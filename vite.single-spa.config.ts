import { defineConfig, loadEnv } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import federation from "@originjs/vite-plugin-federation";
import vitePluginSingleSpa, { SingleSpaPluginOptions } from "vite-plugin-single-spa";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

// https://github.com/WJSoftware/vite-plugin-single-spa
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버 포트
    const styleguideUrl = process.env.VITE_STYLEGUIDE_URL!; // 스타일가이드 URL

    // single-spa 옵션 설정
    const vitePluginSingleSpaOptions: SingleSpaPluginOptions = {
        serverPort,
        spaEntryPoints: "src/app/main.ts",
    };

    // single-spa 빌드 진입점 설정
    switch (process.env.VITE_MF_TYPE) {
        case "application":
            vitePluginSingleSpaOptions.spaEntryPoints = "src/app/application.ts";
            break;
        case "parcel":
            vitePluginSingleSpaOptions.spaEntryPoints = "src/app/parcel.ts";
            break;
    }

    // vite 설정
    return {
        plugins: [
            tsconfigPaths({ loose: true }), // tsconfig.json의 paths 설정을 적용
            vue({
                // Vue 플러그인 적용
                template: {
                    transformAssetUrls, // Quasar 리소스 URL 경로 관리
                },
            }),
            quasar(), // Quasar 플러그인 적용
            federation({
                // 모듈 페더레이션 적용
                remotes: {
                    "@styleguide": styleguideUrl,
                },
                shared: ["vue"],
            }),
            vitePluginSingleSpa(vitePluginSingleSpaOptions), // single-spa 라이브러리 적용
            cssInjectedByJsPlugin(), // css 파일을 js 파일에 삽입
        ],
        build: {
            target: "esnext",
            cssMinify: true, // css 코드 압축 여부
            minify: true, // 빌드시 코드 압축 여부
            cssCodeSplit: false, // css 코드 분할 여부
            emptyOutDir: false, // 빌드시 기존 파일 삭제 여부
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue'], // 확장자 인식
        },
    };
});
