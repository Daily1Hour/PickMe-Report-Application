import { defineConfig, loadEnv } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버 포트
    const styleguideUrl = process.env.VITE_STYLEGUIDE_URL!; // 스타일가이드 URL

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
        ],
        build: {
            target: "esnext",
            emptyOutDir: false,
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue'], // 확장자 인식
        },
        server: {
            // 개발 서버 설정
            port: serverPort,
            cors: true,
        },
        preview: {
            port: serverPort,
        },
        base: process.env.VITE_PUBLIC_URL,
    };
});
