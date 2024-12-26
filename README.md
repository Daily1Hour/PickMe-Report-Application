# 기업 분석 마이크로 프론트엔드

> Single-Spa Application 구성

## 🛠️ 기술 스택

[![Vuejs](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://reactjs.org)
[![Pinia](https://img.shields.io/badge/🍍_Pinia-FFE286?style=flat-square&logoColor=white)](https://pinia.vuejs.org/)
[![Vue-Query](https://img.shields.io/badge/Vue_Query-F24551.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDI2MS43NiAyMjYuNjkiPgogIDxwYXRoIGZpbGw9IiNmZmQ5NGMiIHN0cm9rZT0iIzAwMmM0YiIgc3Ryb2tlLXdpZHRoPSIzMi42MyIgZD0iTTE1Ni43NyA0Mi43NUwxMjYuNTUgOTUuMSA5Ni4zMiA0Mi43NWgtNDguM2w3OC41MyAxMzYgNzguNTMtMTM2eiIgLz4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZjQxNTQiIHN0cm9rZS13aWR0aD0iMTIuNDMiIGQ9Ik0xNTYuNzcgNDIuNzVMMTI2LjU1IDk1LjEgOTYuMzIgNDIuNzVoLTQ4LjNsNzguNTMgMTM2IDc4LjUzLTEzNnoiIC8+Cjwvc3ZnPgo=&style=flat-square)](https://vue-query.vercel.app/)  
[![Quasar](https://img.shields.io/badge/Quasar-050A14?style=flat-square&logo=quasar&logoColor=white)](https://quasar.dev/)
[![Editorjs](https://img.shields.io/badge/+_Editor.js-1CADFE?style=flat-square&logoColor=white)](https://aws.amazon.com/ko/cognito/)  
[![Single-SPA](https://img.shields.io/badge/Single_SPA-gray.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgODExLjIxIj48c2NyaXB0IHhtbG5zPSIiIGlkPSJjdXN0b20tdXNlcmFnZW50LXN0cmluZy1wYWdlLXNjcmlwdCIvPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWU2ODlmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwOC41NCwyMDAuMzMsNTI4LjQyLDQ3MC40Miw0NDkuMjcsNTgzLjg0LDU5LjM5LDM4Ni4yMmw0OS4xNS0xODUuODlNNzcuNCwxMjAuMTIsMCw0MTIuODZsNDY1LjYxLDIzNkw2MDAsNDU2LjI4LDc3LjQsMTIwLjEyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyODQuODQgNTU2LjM0IDQ2NS42IDY0OC44NSAxNTQuNjkgODExLjIxIDI4NC44NCA1NTYuMzQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDAxLjA2IDMyOC44NSA3Ny40IDEyMC4xMiA1NjkuMDkgMCA0MDEuMDYgMzI4Ljg1Ii8+PC9nPjwvZz48L3N2Zz4=&style=flat-square&logoColor)](https://single-spa.js.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=javascript&logoColor=white)](https://www.typescriptlang.org/)  
[![Steiger](https://img.shields.io/badge/FSD_Steiger-211b1d.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTAyKSIvPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsODcpIi8+CjxwYXRoIGQ9Ik0wIDAgQzI4LjM4IDAgNTYuNzYgMCA4NiAwIEM4NiAzLjYzIDg2IDcuMjYgODYgMTEgQzU3LjYyIDExIDI5LjI0IDExIDAgMTEgQzAgNy4zNyAwIDMuNzQgMCAwIFogIiBmaWxsPSIjRUJFQUVBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Nyw1NykiLz4KPHBhdGggZD0iTTAgMCBDMjguMzggMCA1Ni43NiAwIDg2IDAgQzg2IDMuNjMgODYgNy4yNiA4NiAxMSBDNTcuNjIgMTEgMjkuMjQgMTEgMCAxMSBDMCA3LjM3IDAgMy43NCAwIDAgWiAiIGZpbGw9IiNFQkVBRUEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LDQyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTQ3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTMyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTE3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsNzIpIi8+Cjwvc3ZnPgo=&style=flat-square&logoColor=black)](https://github.com/feature-sliced/steiger)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)

```python
PickMe-Report-Application
├─ .github
│  └─ workflows # 깃헙 액션 워크플로어 프로세스
│     ├─ deploy-aws-s3.yml # AWS S3로 페이지로 배포
│     ├─ deploy-gh-pages.yml # 깃헙 페이지로 배포
│     └─ vite-build.yml # Vite로 빌드
├─ .prettierrc # 포맷터
├─ index.html
├─ README.md
├─ src
│  ├─ app
│  │  ├─ App.vue
│  │  ├─ application.ts # single-spa 애플리케이션 진입점
│  │  ├─ main.ts # 프로바이더 스택
│  │  └─ router.ts # 라우터
│  ├─ entities # 비즈니스 엔터티 레이어
│  │  ├─ report
│  │  │  └─ model
│  │  │     ├─ index.ts
│  │  │     ├─ CompanyReport.ts
│  │  │     └─ IndustryReport.ts
│  │  └─ summary
│  │     └─ model
│  │        └─ index.ts
│  ├─ features # 기능 구현체 레이어
│  │  ├─ report
│  │  │  ├─ index.vue
│  │  │  ├─ api
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ dto.ts # 데이터전송객체
│  │  │  │  ├─ mapper.ts # dto -> model
│  │  │  │  ├─ getReport.ts
│  │  │  │  └─ setReport.ts
│  │  │  ├─ store # 중앙상태저장소
│  │  │  │  └─ report.ts
│  │  │  └─ ui
│  │  │     ├─ index.ts
│  │  │     ├─ load-report.vue # 리포트 데이터 로딩
│  │  │     ├─ save-report.vue # 리포트 데이터 저장
│  │  │     ├─ navigation.vue # 페이지 앵커 컴포넌트
│  │  │     ├─ report.vue # 리포트 컴포넌트
│  │  │     └─ section-form.vue # 폼 컴포넌트
│  │  └─ side
│  │     ├─ index.vue
│  │     ├─ api
│  │     │  ├─ index.ts
│  │     │  ├─ dto.ts
│  │     │  ├─ mapper.ts
│  │     │  ├─ getSummaries.ts
│  │     │  └─ deleteReport.ts
│  │     ├─ store
│  │     │  └─ summary.ts
│  │     └─ ui
│  │        ├─ index.ts
│  │        ├─ load-summaries.vue # 요약 데이터 로딩
│  │        ├─ add-report.vue # 리포트 생성
│  │        ├─ remove-report.vue # 리포트 삭제
│  │        └─ section-tab.vue # 탭 컴포넌트
│  ├─ pages # 페이지 레이어
│  │  └─ index.vue
│  ├─ shared # 공유 레이어
│  │  ├─ api
│  │  │  └─ client.ts # Axios 인스턴스
│  │  ├─ model # 열거형 객체
│  │  │  ├─ Category.ts
│  │  │  ├─ QueryKey.ts
│  │  │  └─ RouteName.ts
│  │  └─ trans # 다국어 처리
│  │     └─ ko.ts
│  └─ widgets
│     └─ editorjs.vue # editor.js의 Vue3 컴포넌트 래퍼
├─ steiger.config.ts # FSD 린트
├─ vite-env.d.ts # 환경변수 타입 정의
├─ shims-vue.d.ts # *.vue 타입 정의
├─ vite.config.ts # Vite 설정 파일
└─ vite.single-spa.config.ts # Single-spa용 Vite 설정 파일
```
