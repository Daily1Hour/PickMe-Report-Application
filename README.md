# 기업 분석 마이크로 프론트엔드

> Single-Spa Application 구성

## 🚩 목차

- [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)
- [💁 소개](#-소개)
- [💡 주요 기능](#-주요-기능)
- [🎨 스크린샷](#-스크린샷)
- [📐 다이어그램](#-다이어그램)
  - [🧩 컴포넌트 의존성 그래프](#-컴포넌트-의존성-그래프)
  - [🎯 상태 전이 다이어그램](#-상태-전이-다이어그램)
  - [🚚 CI/CD 파이프라인](#-cicd-파이프라인)
- [📂 폴더 구조](#-폴더-구조)
- [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택

[![Vuejs](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)  
[![Pinia](https://img.shields.io/badge/🍍_Pinia-FFD859?style=flat-square&logoColor=white)](https://pinia.vuejs.org/)
[![Vue-Query](https://img.shields.io/badge/Vue_Query-FF4955.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTQiIGhlaWdodD0iMjE0IiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZCI+PHBhdGggc3R5bGU9Im9wYWNpdHk6Ljk1MyIgZmlsbD0iIzA3MmM0YiIgZD0iTS0uNSAxMy41YzI4LjY2OS0uMTY3IDU3LjMzNSAwIDg2IC41QTE3ODMuODk0IDE3ODMuODk0IDAgMCAxIDEwNiA0OC41IDU5NS4yNDUgNTk1LjI0NSAwIDAgMCAxMjYuNSAxNGMyOC45OTgtLjUgNTcuOTk4LS42NjcgODctLjV2MmEyNDQ4MS4xNTQgMjQ0ODEuMTU0IDAgMCAwLTEwNy41IDE4NEE4NzAxNzguMDU4IDg3MDE3OC4wNTggMCAwIDAtLjUgMTYuNXYtM3oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNjYzNDRlIiBkPSJNMTMyLjUgMjQuNWMyMC44MzctMS4zMjggNDEuODM3LTEuMzI4IDYzIDAtLjEyNC42MDctLjQ1Ny45NC0xIDFhOTYxLjYzNiA5NjEuNjM2IDAgMCAwLTYyLTF6Ii8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2ZiNDA1MyIgZD0iTTEzMi41IDI0LjVjMjAuODQtLjMzIDQxLjUwNy4wMDMgNjIgMWEyMDYxMy4yNzIgMjA2MTMuMjcyIDAgMCAxLTg4LjUgMTUzbC04OC41LTE1M2E2NDEuMjIzIDY0MS4yMjMgMCAwIDEgNjItLjVBMjk3MS40OTEgMjk3MS40OTEgMCAwIDEgMTA2IDY5LjVhNzYxLjI5IDc2MS4yOSAwIDAgMCAyNi41LTQ1eiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiMwYjJkNGIiIGQ9Ik0zOC41IDM3LjVjMTEuMTYtMS4xNiAyMi40OTItMS4zMjYgMzQtLjVBNDkxMC4wNiA0OTEwLjA2IDAgMCAwIDEwNiA5NC41bDMzLjUtNTdhMTQ1LjAwNCAxNDUuMDA0IDAgMCAxIDM0IDAgMTAwMDAuNTY0IDEwMDAwLjU2NCAwIDAgMS02Ny41IDExNiA5NzExLjM1NiA5NzExLjM1NiAwIDAgMC02Ny41LTExNnoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjZjZkMzRjIiBkPSJNNTYuNSA0Ni41YzMuNjA2LS4yOSA3LjEwNi4wNDQgMTAuNSAxYTMzMzIuMTgzIDMzMzIuMTgzIDAgMCAwIDM5IDY3IDMzMzYuMDE5IDMzMzYuMDE5IDAgMCAwIDM5LTY3YzMuNzQ0LTEuMTI2IDcuNTc3LTEuMjkzIDExLjUtLjVMMTA2IDEzMy41YTI4MTAuOTcgMjgxMC45NyAwIDAgMS00OS41LTg3eiIvPjwvc3ZnPg==&style=flat-square)](https://tanstack.com/query/latest/docs/framework/vue/overview)
[![VeeValidate](https://img.shields.io/badge/VeeValidate-065f46.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2ODcuMzYgNTk1LjI4MDA1Jz48cGF0aCBkPSdtNTcyLjQgMC01Ny40OSA5OS41Ni0xNzEuMjMgMjk2LjU5TDE3Mi40NSA5OS41NmgxMTguMDJsNTMuMjEgOTIuMTQgNTMuMjEtOTIuMTRMNDU0LjM2IDBIMGwzNDMuNjggNTk1LjI4TDY4Ny4zNiAwWicgZmlsbD0nIzA2ZDc3Yic+PC9wYXRoPjwvc3ZnPgo=&style=flat-square)](https://vee-validate.logaretm.com/v4/)  
[![Quasar](https://img.shields.io/badge/Quasar-050A14?style=flat-square&logo=quasar&logoColor=white)](https://quasar.dev/)
[![Editorjs](https://img.shields.io/badge/+_Editor.js-1CADFE?style=flat-square&logoColor=white)](https://editorjs.io/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)](https://zod.dev/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/kr/docs/intro)  
[![Single-SPA](https://img.shields.io/badge/single--spa-ee689f.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgODExLjIxIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZmZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDguNTQsMjAwLjMzLDUyOC40Miw0NzAuNDIsNDQ5LjI3LDU4My44NCw1OS4zOSwzODYuMjJsNDkuMTUtMTg1Ljg5TTc3LjQsMTIwLjEyLDAsNDEyLjg2bDQ2NS42MSwyMzZMNjAwLDQ1Ni4yOCw3Ny40LDEyMC4xMloiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjg0Ljg0IDU1Ni4zNCA0NjUuNiA2NDguODUgMTU0LjY5IDgxMS4yMSAyODQuODQgNTU2LjM0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQwMS4wNiAzMjguODUgNzcuNCAxMjAuMTIgNTY5LjA5IDAgNDAxLjA2IDMyOC44NSIvPjwvZz48L2c+PC9zdmc+&style=flat-square&logoColor=white)](https://single-spa.js.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Steiger](https://img.shields.io/badge/FSD_Steiger-211b1d.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTAyKSIvPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsODcpIi8+CjxwYXRoIGQ9Ik0wIDAgQzI4LjM4IDAgNTYuNzYgMCA4NiAwIEM4NiAzLjYzIDg2IDcuMjYgODYgMTEgQzU3LjYyIDExIDI5LjI0IDExIDAgMTEgQzAgNy4zNyAwIDMuNzQgMCAwIFogIiBmaWxsPSIjRUJFQUVBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Nyw1NykiLz4KPHBhdGggZD0iTTAgMCBDMjguMzggMCA1Ni43NiAwIDg2IDAgQzg2IDMuNjMgODYgNy4yNiA4NiAxMSBDNTcuNjIgMTEgMjkuMjQgMTEgMCAxMSBDMCA3LjM3IDAgMy43NCAwIDAgWiAiIGZpbGw9IiNFQkVBRUEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LDQyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTQ3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTMyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTE3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsNzIpIi8+Cjwvc3ZnPgo=&style=flat-square&logoColor=black)](https://github.com/feature-sliced/steiger)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io/)

## 💁 소개

기업 분석 마이크로 프론트엔드는 모듈화된 마이크로 프론트엔드 아키텍처를 기반으로, 사용자가 스스로 기업이나 산업을 분석하고 정리하며, 이를 기록으로 남길 수 있도록 돕습니다.  
이를 통해 면접이나 취업 준비 과정에서 보다 체계적으로 정보를 정리하고 활용할 수 있으며, 개인적인 인사이트를 쌓아가는 데에도 유용합니다.

## 💡 주요 기능

| 기능                              | 설명                                                                                                                                                |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 기업 분석 페이지 관리             | 새로운 분석 페이지를 생성, 수정, 삭제할 수 있으며, 목록에서 검색 및 페이지네이션 기능을 지원합니다.                                                 |
| 강력한 폼 유효성 검사             | **VeeValidate**와 **Zod**를 활용하여 입력 폼의 유효성을 검증하고, 사용자 입력 오류를 방지합니다.                                                    |
| 직관적인 리치 텍스트 에디터       | **Editor.js**를 사용하여 블록 기반 편집이 가능한 리치 텍스트 입력 기능을 제공합니다.                                                                |
| 최적화된 데이터 관리              | **Vue Query**를 활용한 쿼리 캐싱을 통해 API 요청을 최적화하고, 빠른 데이터 로딩을 지원합니다.                                                       |
| 상태 관리                         | **Pinia**를 활용한 프록시 기반 상태 관리로 효율적이고 직관적인 상태 관리가 가능합니다.                                                              |
| 폴더 구조 최적화                  | **Feature-Sliced Design(FSD)** 방식의 폴더 구조 설계를 적용하여, 명시적인 비즈니스 로직과 도메인 스코프 덕분에 필요한 로직을 쉽게 찾을 수 있습니다. |
| 마이크로 프론트엔드 아키텍처 적용 | **Module Federation**을 활용한 스타일 가이드 통합 및 **Single-SPA** 기반의 마이크로 프론트엔드 빌드를 지원합니다.                                   |

## 🎨 스크린샷

![screen](https://github.com/user-attachments/assets/0cf54396-b7e6-4a11-85e8-5720bf707744)

## 📐 다이어그램

### 🧩 컴포넌트 의존성 그래프

```mermaid
graph TD
    direction TB
    App --> report-page --> side-feature & report-feature

    subgraph side-feature
        direction TB
        summary-store[(pinia store)]

        load-summaries -.-> summary-store -.-> drawer-layout & display-summaries & search-summaries

        side --> load-summaries & drawer-layout & display-summaries
        drawer-layout --> search-summaries
        display-summaries --> add-report & section-tab
    end

    subgraph report-feature
        report-store[(pinia store)]

        remove-report & load-report -.-> report-store -.-> navigation & report-form & save-report
        report-store -.-> form-layout
        report --> navigation & load-report & display-report

        display-report --> form-layout
        form-layout --> report-form & actions-report
        report-form --> section-field --> field-content & field-title
        actions-report --> save-report & remove-report
    end

    click App "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/app/App.vue"
    click report-page "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/pages/index.vue"
    click side "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/index.vue"
    click load-summaries "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/load-report.vue"
    click summary-store "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/store/summary.ts"
    click drawer-layout "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/ui/drawer-layout.vue"
    click display-summaries "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/ui/display-summaries.vue"
    click search-summaries "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/ui/search-summaries.vue"
    click add-report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/ui/add-report.vue"
    click section-tab "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/side/ui/section-tab.vue"

    click report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/index.vue"
    click load-report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/load-report.vue"
    click report-store "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/store/report.ts"
    click navigation "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/navigation.vue"
    click report-form "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/report-form.vue"
    click save-report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/save-report.vue"
    click form-layout "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/form-layout.vue"
    click display-report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/display-report.vue"
    click actions-report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/actions-report.vue"
    click section-field "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/section-field.vue"
    click field-content "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/field-content.vue"
    click field-title "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/field-title.vue"
    click remove-report "https://github.com/Daily1Hour/PickMe-Report-Application/blob/main/src/features/report/ui/remove-report.vue"
```

![components](https://github.com/user-attachments/assets/46a8d704-fff9-4cc9-8afc-4002b41fd799)

### 🎯 상태 전이 다이어그램

```mermaid
stateDiagram-v2
    state report {
        state "load" as load {
            state load/if_exist_id <<choice>>
            state load/if_fetch <<choice>>
            state load/join_state <<join>>

            load/Prepare: Prepare
            load/Fetching: Fetching
            load/Empty: Empty
            load/Loaded: Loaded

            [*] --> load/Prepare: 페이지 진입 시
            load/Prepare --> load/if_exist_id: 경로 확인<br>useRoute()
            load/if_exist_id --> load/Empty: new
            load/if_exist_id --> load/Fetching: 경로 존재
            load/Fetching --> load/if_fetch: 데이터 패칭<br>useQuery()
            load/if_fetch --> load/Empty: fetch 실패
            load/if_fetch --> load/Loaded: fetch 성공
            load/Empty --> load/join_state
            load/Loaded --> load/join_state
        }
        state report/is_valid <<choice>>

        report/Ready: Ready
        report/Editing: Editing
        report/Edited: Edited
        report/Validating: Validating
        report/Submitting: Submitting

        report/Ready --> valid/SchemaInit: 폼모델 & 스키마 구성
        report/Ready --> report/Editing: 사용자 입력 시작
        report/Editing --> report/Validating: 유효성 검사 트리거
        report/Validating --> valid/WatchFields: 필드 유효성 검사 시작
        report/is_valid --> report/Editing: 실패
        report/is_valid --> report/Edited: 성공
        report/Edited --> report/Submitting: 저장/삭제
        report/Submitting --> [*]: 페이지 이동
    }
    state "Pinia Store" as store {
        store/Raw: Raw
        store/Reactive: Reactive
        store/Schema: Schema

        [*] --> store/Raw: store 정의
        store/Raw --> store/Reactive: proxy
        store/Reactive --> store/Raw: proxy
        store/Reactive --> store/Schema: zod 스키마 변환
    }

    note left of store
        Proxy 방식 중앙상태저장소
        상태 객체를 직접 관찰하고 변경 사항을 자동으로 감지
    end note

    state "vee-validate" as vlid {
        valid/SchemaInit: SchemaInit
        valid/FormInit: FormInit
        valid/WatchFields: WatchFields
        valid/ValidateField: ValidateField
        valid/ErrorUpdate: ErrorUpdate
        valid/AllValid: AllValid

        valid/SchemaInit --> valid/FormInit: formData 초기화
        valid/FormInit --> valid/WatchFields: v-model 감지
        valid/WatchFields --> valid/ValidateField: 필드 검사
        valid/ValidateField --> valid/ErrorUpdate: errorMessage 반영
        valid/ErrorUpdate --> valid/WatchFields: 입력 대기
        valid/WatchFields --> valid/AllValid: 전체 유효성 통과
    }

    load/join_state --> store: Setter
    store --> report/Ready: Getter
    valid/AllValid --> report/is_valid: report로 결과 전달
```

### 🚚 CI/CD 파이프라인

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/Daily1Hour/PickMe-Report-Application/actions" title="GitHub Actions">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" alt="GitHubActions" height="45" /> GitHub Actions 바로가기
</a>

```mermaid
graph LR
    subgraph CD[🚀 CD 영역]
        direction LR
        Tag[태그 푸시]
        Tag --> DeployGH[gh-pages에 배포] --> |자동 워크플로 실행|pages-build-deployment[GitHub Pages 배포 완료]
        Tag --> DeployAWS[Amazon S3에 배포] --> |콘텐츠 서빙|CloudFront[Amazon CloudFront]
    end

    Build & Build_Single_SPA -.-> |📦 아티팩트|Tag

    subgraph CI[🧪 CI 영역]
        direction LR
        Push[브랜치 푸시] --> Lint[린트] --> |🟢 통과|Test[테스트]
        Test --> |🟢 통과|Build[빌드] & Build_Single_SPA[빌드 For single-spa] --> |🟢 통과|Review[리뷰]
        Review -->|✔️ 승인|Merge[머지]
    end

    click Build "https://github.com/Daily1Hour/PickMe-Report-Application/actions/workflows/vite-build.yml"
    click Build_Single_SPA "https://github.com/Daily1Hour/PickMe-Report-Application/actions/workflows/vite-build.yml"
    click Review "https://github.com/Daily1Hour/PickMe-Report-Application/actions/workflows/auto-assign.yml"
    click DeployGH "https://github.com/Daily1Hour/PickMe-Report-Application/actions/workflows/deploy-gh-pages.yml"
    click pages-build-deployment "https://github.com/Daily1Hour/PickMe-Report-Application/actions/workflows/pages/pages-build-deployment"
    click DeployAWS "https://github.com/Daily1Hour/PickMe-Report-Application/actions/workflows/deploy-aws-s3.yml"
```

## 📂 폴더 구조

<details>
<summary>열기</summary>

> <a href="https://feature-sliced.design"><image src="https://feature-sliced.design/kr/img/brand/logo-primary.png" width=40 alt="Feature-Sliced Design" /></a>

```python
PickMe-Report-Application
├─ .github
│  └─ workflows # 깃헙 액션 워크플로어 프로세스
│     ├─ deploy-aws-s3.yml # AWS S3로 페이지로 배포
│     ├─ deploy-gh-pages.yml # 깃헙 페이지로 배포
│     └─ vite-build.yml # Vite로 빌드
├─ index.html
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
│  │  │     ├─ Report.ts # 인터페이스
│  │  │     ├─ CompanyReport.ts
│  │  │     └─ IndustryReport.ts
│  │  └─ summary
│  │     └─ model
│  │        ├─ index.ts
│  │        └─ Summary.ts
│  ├─ features # 기능 구현체 레이어
│  │  ├─ report
│  │  │  ├─ index.vue
│  │  │  ├─ api
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ dto.ts # 데이터전송객체
│  │  │  │  ├─ getHealthy.ts # 헬스 체크
│  │  │  │  ├─ getReport.ts # 리포트 가져오기
│  │  │  │  ├─ setReport.ts # 리포트 내보내기
│  │  │  │  └─ deleteReport.ts # 레포트 삭제
│  │  │  ├─ model # 폼 스키마
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ CompanySchema.ts
│  │  │  │  └─ IndustrySchema.ts
│  │  │  ├─ service # 엔터티 ↔ dto/form 헬퍼 메서드
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ map_dto_to_report.ts
│  │  │  │  ├─ map_form_to_report.ts
│  │  │  │  ├─ map_report_to_dto.ts
│  │  │  │  └─ map_report_to_form.ts
│  │  │  ├─ store # 중앙상태저장소
│  │  │  │  ├─ index.ts
│  │  │  │  └─ report.ts
│  │  │  └─ ui
│  │  │     ├─ index.ts
│  │  │     ├─ load-report.vue # 리포트 데이터 로딩
│  │  │     ├─ display-report.vue # 리포트 뷰 컴포넌트
│  │  │     │  └─ display-report-skeleton.vue
│  │  │     ├─ form-layout.vue # 리포트 뷰 폼 레이아웃
│  │  │     ├─ report-form.vue # 리포트 뷰 폼 컨텐츠
│  │  │     ├─ section-field.vue # 리포트 뷰 필드 레이아웃
│  │  │     ├─ field-content.vue # 리포트 컨텐츠 필드
│  │  │     │  └─ field-content-skeleton.vue
│  │  │     ├─ field-title.vue # 리포트 타이틀 필드
│  │  │     │  └─ field-title-skeleton.vue
│  │  │     ├─ actions-report.vue # 삭제&저장 액션 버튼
│  │  │     │  └─ actions-report-skeleton.vue
│  │  │     ├─ save-report.vue # 리포트 저장 버튼
│  │  │     ├─ remove-report.vue # 리포트 삭제 버튼
│  │  │     └─ navigation.vue # 페이지 앵커 컴포넌트
│  │  │        └─ navigation-skeleton.vue
│  │  └─ side
│  │     ├─ index.vue
│  │     ├─ api
│  │     │  ├─ index.ts
│  │     │  ├─ dto.ts
│  │     │  └─ getSummaries.ts
│  │     ├─ service
│  │     │  ├─ index.ts
│  │     │  └─ mapper.ts
│  │     ├─ store
│  │     │  ├─ index.ts
│  │     │  └─ summary.ts
│  │     └─ ui
│  │        ├─ index.ts
│  │        ├─ load-summaries.vue # 요약 데이터 로딩
│  │        ├─ drawer-layout.vue # 서랍형 레이아웃
│  │        ├─ search-summaries.vue # 요약 검색
│  │        ├─ display-summaries.vue # 요약 뷰 컴포넌트
│  │        │  └─ display-summaries-skeleton.vue
│  │        ├─ add-report.vue # 리포트 생성 페이지 라우팅
│  │        │  └─ add-report-skeleton.vue
│  │        └─ section-tab.vue # 탭 컴포넌트
│  │           └─ section-tab-skeleton.vue
│  ├─ pages # 페이지 레이어
│  │  └─ index.vue
│  ├─ shared # 공유 레이어
│  │  ├─ api
│  │  │  ├─ index.ts
│  │  │  ├─ client.ts # Axios 인스턴스
│  │  │  ├─ ServerError.ts # 서버 에러 상태 관리
│  │  │  └─ tokens.ts # 토큰 3종종
│  │  ├─ hook # 커스텀 훅
│  │  │  ├─ index.ts
│  │  │  └─ usePagination.ts # 페이지네이션 훅
│  │  ├─ model # 열거형 객체
│  │  │  ├─ index.ts
│  │  │  ├─ Category.ts
│  │  │  ├─ QueryKey.ts
│  │  │  └─ RouteName.ts
│  │  ├─ trans # 다국어 처리
│  │  │  └─ ko.ts
│  │  ├─ type
│  │  │  └─ QSkeletonAnimation.ts
│  │  └─ ui
│  │     ├─ index.ts
│  │     ├─ pagination-skeleton.vue
│  │     └─ skeleton-transition.vue
│  └─ widgets
│     └─ editorjs.vue # editor.js의 Vue3 컴포넌트 래퍼
├─ package.json # 의존성 설정
│  ├─ .prettierrc # 포맷터 설정
│  ├─ eslint.config.js # 린트 설정
│  └─ steiger.config.ts # FSD 린트 설정
└─ vite.config.ts # Vite 설정 파일
   ├─ shims-vue.d.ts # *.vue 타입 정의
   ├─ styleguide-types.d.ts # 스타일 가이드의 타입
   └─ vite-env.d.ts # 환경변수 타입 정의
```

</details>

## 🚀 실행 방법

### 백엔드

[🔗 Report-Service 바로가기](https://github.com/Daily1Hour/PickMe-Report-Service)

### 프론트엔드

#### 개발 서버 실행

```sh
$ npm install
$ npm run dev
```

#### Single-SPA 애플리케이션 빌드

```sh
$ npm install
$ npm run build:single-spa
```

#### Single-SPA 주입 개발 서버

```sh
$ npm install
$ npm run start
```
