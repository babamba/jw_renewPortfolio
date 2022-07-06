import { Resume } from "@interfaces/resume";

export const resumes: Resume[] = [
  {
    id: 1,
    period: "2019.12 ~ 2021.06",
    companyName: "GINT",
    usedPosition: true,
    usedRank: true,
    position: "프론트엔드 개발자(Client)",
    rank: "서비스플랫폼팀 선임 연구원",
    statusType: "complete",
    statusText: "계약만료",
    flow: 5,
    published_at: "2020-11-26T06:20:57.440Z",
    created_at: "2020-11-26T06:11:12.107Z",
    updated_at: "2021-07-20T10:13:19.290Z",
    companyImg: "gint.png",
    resume_stories: [
      {
        id: 1,
        type: "complete",
        title: "Gint Connect Telematics 플랫폼 개발 (19.12 ~ 21.06)",
        isDeveloperPosition: true,
        programLanguage: "React(TypeScript) / RTK / AntDesign / Appsync(Apollo) / Chart.js",
        resume: 1,
        desc: [
          "고객사 서비스 중",
          "Gint-Connect 단말기로 쌓여진 트랙터 데이터를 이용한 Web Admin 어플리케이션 개발",
          "AWS lambda / Aws DynamoDB를 이용해 개발된 API 기준 React SPA Application 개발환경 부터 S3 Bucket Product 환경  까지 구성 및 개발 진행",
          "TypeScript 적용. 컴파일 단계 타입체크 및 1차적 문법에러 처리, 런타임 단계 타입 안정성 보장",
          "React / Amplify / Ant design / styled-components 등 사용",
          "AppSync(GraphQL) 을 통한 Subscription 기반 소켓통신 및 실시간 알림 및 실시간 데이터 변경 처리",
          "AppSync VTL 코드 작성 ",
          "RTK(Redux-Toolkit) 를 이용한 glabal-state 관리",
          "Jest를 통한 core-function 테스트 ",
          "오픈소스 Chart.js를 이용한 통계 관련 Data Visualization",
          "GitLab-runner 를 통한 Docker Container build test / intergration test / Deploy PipeLine 작성 및 CI / CD 자동화 구성",
          "AWS S3 / CloudFront를 이용한 프로덕션 빌드 결과물 배포",
          "디자이너의 와이어프레임을 참고하여 StoryBook 으로 UX / UI 문서화 진행",
          "서비스 기획 회의 및 요구사항도출 문서화"
        ],
        link: "https://eager-elion-d61454.netlify.app",
        created_at: "2020-11-26T06:19:19.024Z",
        updated_at: "2021-07-20T10:13:19.274Z"
      },
      {
        id: 2,
        type: "complete",
        title: "국립농원과학원 봉군형성실 Web Console 개발(20.01 ~ 2020.06)",
        isDeveloperPosition: true,
        programLanguage: "React / Material UI /Nivo Chart / Mobx",
        resume: 1,
        desc: [
          "국립농업과학원 봉군형성실 iot Project의 web console 개발진행",
          "Flask / mysql 로 개발된 서버의 API 를 가지고 클라이언트 개발",
          "실시간 데이터 fetching 처리 및 Data Visualization 개발"
        ],
        link: null,
        created_at: "2020-11-26T07:26:29.958Z",
        updated_at: "2021-07-20T10:13:19.274Z"
      },
      {
        id: 3,
        type: "complete",
        title: "국립농원과학원 봉군형성실 Mobile App 개발(20.03 ~ 20.06)",
        isDeveloperPosition: true,
        programLanguage: "React Native / NativeBase / Victory Chart",
        resume: 1,
        desc: [
          "국립 농과원 web project 기반 React Native로 App 개발 진행",
          "Flask / mysql 로 개발된 서버의 API 를 가지고 클라이언트 개발",
          "Victory Chart를 통한 Data Visualization 개발"
        ],
        link: null,
        created_at: "2020-11-26T07:27:10.402Z",
        updated_at: "2021-07-20T10:13:19.274Z"
      },
      {
        id: 4,
        type: "complete",
        title: "충남대학교 농업동력 테스트 프로젝트(20.02 ~ 20.03)",
        isDeveloperPosition: true,
        programLanguage: "React / AntDesign",
        resume: 1,
        desc: [
          "충남대학교 트랙터 동력 테스트 Web console 개발",
          "Aws lambda / sqs 서비스를 이용해 제작된 API를 가지고 데이터 관리 및 실험 관리 클라이언트 개발",
          "위치 데이터 입출력 처리(csv 2만개 이상 데이터) 및 이동경로 지도 표시"
        ],
        link: null,
        created_at: "2020-11-26T07:28:14.031Z",
        updated_at: "2021-07-20T10:13:19.274Z"
      }
    ]
  },
  {
    id: 2,
    period: "2018.05 ~ 2019.09",
    companyName: "XHIFT",
    usedPosition: true,
    usedRank: true,
    position: "프론트엔드 개발자(Client)",
    rank: "개발팀 연구원",
    statusType: "complete",
    statusText: "계약만료",
    flow: 4,
    published_at: "2020-11-26T07:31:43.222Z",
    created_at: "2020-11-26T07:28:59.592Z",
    updated_at: "2021-07-20T10:13:14.673Z",
    companyImg: "xhift.png",
    resume_stories: [
      {
        id: 5,
        type: "complete",
        title: "알티캐스트 & KT 셋탑 키즈랜드 2.0 프로젝트(18.05 ~ 18.10)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        resume: 2,
        desc: [
          "알티캐스트 & KT IPTV ACAP 미들웨어 어플리케이션 개발",
          "전체적인 UI Framework 고도화 및 voiceable 로직 추가",
          "QA테스트를 통한 이슈사항 관리 및 송출 전 안정화",
          "Zira 를 이용한 이슈트래커 및 이슈사항 관리",
          "관련 기사 https://www.mk.co.kr/news/special-edition/view/2018/12/777042/"
        ],
        link: null,
        created_at: "2020-11-26T07:29:56.865Z",
        updated_at: "2021-07-20T10:13:14.596Z"
      },
      {
        id: 6,
        type: "complete",
        title: "KT 기가지니 '미봇' POC 프로젝트 (18.05 ~ 18.10)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        resume: 2,
        desc: [
          "KT 기가지니 '미봇' 테스트용 프로젝트 진행",
          "KT 셋탑 기가지니의 챗봇 관련 front 단 로직 및 UI/UX 적용 개발 진행",
          "셋탑 사양 대비 애니메이션 추가로 인한 효율적 소스 관리"
        ],
        link: null,
        created_at: "2020-11-26T07:30:26.555Z",
        updated_at: "2021-07-20T10:13:14.596Z"
      },
      {
        id: 7,
        type: "complete",
        title: "알티캐스트 & KT 셋탑 Voice UI 프로젝트(19.05 ~ 19.09)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        resume: 2,
        desc: [
          "알티캐스트 - KT IPTV ACAP 셋탑 어플리케이션 개발",
          "결제 Voiceable 과 연동하여 자동 추천 및 할인율, 쿠폰 여부 에 따른 자동안내 로직 개발",
          "제플린 UI 가이드를 통한 View 개발"
        ],
        link: null,
        created_at: "2020-11-26T07:30:53.518Z",
        updated_at: "2021-07-20T10:13:14.596Z"
      },
      {
        id: 8,
        type: "complete",
        title: "알티캐스트 & KT 셋탑 키즈랜드 2.0 고도화 프로젝트(18.12 ~ 19.04)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        resume: 2,
        desc: [
          "알티캐스트 - KT IPTV ACAP 셋탑 어플리케이션 모듈 키즈랜드 v2.0 안정화 프로젝트",
          "결제 관련 부분 UI 및 로직 담당"
        ],
        link: null,
        created_at: "2020-11-26T07:31:37.958Z",
        updated_at: "2021-07-20T10:13:14.596Z"
      }
    ]
  },
  {
    id: 3,
    period: "2017.04 ~ 2018.04",
    companyName: "나눔 ICT",
    usedPosition: true,
    usedRank: true,
    position: "풀스택 개발자(Server & Client)",
    rank: "공공SI 개발팀 사원",
    statusType: "complete",
    statusText: "계약만료",
    flow: 3,
    published_at: "2020-11-26T07:32:56.019Z",
    created_at: "2020-11-26T07:32:53.751Z",
    updated_at: "2021-07-20T10:13:09.273Z",
    companyImg: "nanumict.png",
    resume_stories: [
      {
        id: 9,
        type: "complete",
        title: "오산시 공공기관 오산백년 시민대학 시스템 구축 프로젝트(17.04 ~ 18.01)",
        isDeveloperPosition: true,
        programLanguage: "Spring MVC / Ibatis / HTML & CSS & JQuery",
        resume: 3,
        desc: [
          "요구사항 도출 및 화면 설계",
          "화면 설계를 통한 자료 사전 및 도메인 정의, ERD작성",
          "관리자 서버 & 사용자 서버 개발",
          "End 유저(시민) Web Client 개발 (HTML / CSS / JQuery / JSP)",
          "관리자(배너, 게시물 관리, 사업관리, 권한 관리, 통계, 접속 로그, 회원관리, 예약관리, 공통코드관리 등) 화면 및 시스템 개발",
          "형상 관리(SVN), 젠킨스 CI / CD",
          "리포팅 툴을 통한 관리자 통합 분석 및 보고서 제공(ClipReport 솔루션 사용)",
          "웹표준/웹접근성 관리"
        ],
        link: "https://www.osan.go.kr/osanedu/",
        created_at: "2020-11-26T07:33:59.277Z",
        updated_at: "2021-07-20T10:13:09.197Z"
      },
      {
        id: 10,
        type: "complete",
        title: "경기도시공사 인터넷청약시스템 구축 프로젝트(17.12 ~ 18.04)",
        isDeveloperPosition: true,
        programLanguage: "Spring MVC / Ibatis / HTML & CSS & JQuery",
        resume: 3,
        desc: [
          "경기도 및 경기도시공사에서 성공적으로 진행중인 행복주택 사업을 인터넷시스템으로 구축",
          "전자정부프레임워크, Tibero, ibatis, jQuery, Netfunnel, Dguard 사용",
          "12월 중순 1차 인터넷 청약신청시스템 선 구축 후 운영 및 실시간 데이터를 통한 경쟁률 및 현황 분석을 제공 및 민원사항 수렴 후 빠른 조치 제공",
          "분석단계 SH/LH 컨설팅 및 선진사례도출 &gt; RFP, 제안서 기반 요구사항 / 추적표 / 과업대비표 / 도메인정의 도출 &gt; 설계단계",
          "유즈케이스 / 화면UI설계서 자료 도출",
          "UI설계서를 위한 Nexacro를 사용한 화면 설계"
        ],
        link: "https://apply.gh.or.kr/index.do",
        created_at: "2020-11-26T07:35:41.401Z",
        updated_at: "2021-07-20T10:13:09.197Z"
      }
    ]
  },
  {
    id: 4,
    period: "2016.09 ~ 2017.03",
    companyName: "비트 캠프",
    usedPosition: true,
    usedRank: false,
    position: "JAVA 기반 웹표준/웹프로그래밍 개발자 양성과정(16.09 ~ 17.03)",
    rank: null,
    statusType: "complete",
    statusText: "수료",
    flow: 2,
    published_at: "2020-11-26T07:37:18.443Z",
    created_at: "2020-11-26T07:36:35.238Z",
    updated_at: "2021-07-20T10:13:01.879Z",
    companyImg: "bit_logo.png",
    resume_stories: [
      {
        id: 11,
        type: "complete",
        title: "웹 서버 & 클라이언트 프로그래밍 과정 수료",
        isDeveloperPosition: true,
        programLanguage: "Spring / MyBatis / Maria DB / HTML & CSS & JQuery",
        resume: 4,
        desc: [
          "응용 애플리케이션 개발과정 습득",
          "졸업프로젝트 : HOT DOG(Pet Cam : Raspberry Pi를 이용한 웹/앱 스트리밍 및 커뮤니티)"
        ],
        link: null,
        created_at: "2020-11-26T07:37:13.569Z",
        updated_at: "2021-07-20T10:13:01.863Z"
      }
    ]
  },
  {
    id: 5,
    period: "2014.06 ~ 2016.06",
    companyName: "경기도시공사(현 경기주택도시공사)",
    usedPosition: false,
    usedRank: true,
    position: null,
    rank: "홍보실 사원",
    statusType: "complete",
    statusText: "계약만료",
    flow: 1,
    published_at: "2020-11-26T07:39:56.039Z",
    created_at: "2020-11-26T07:38:16.028Z",
    updated_at: "2021-07-20T10:12:44.701Z",
    companyImg: "gico.png",
    resume_stories: [
      {
        id: 12,
        type: "complete",
        title: "사내 홈페이지 고도화 보조(15.08 ~ 16.06)",
        isDeveloperPosition: true,
        programLanguage: "JSP",
        resume: 5,
        desc: ["사내 홈페이지 화면단 유지보수 보조"],
        link: null,
        created_at: "2020-11-26T07:41:25.827Z",
        updated_at: "2021-07-20T10:12:44.683Z"
      },
      {
        id: 13,
        type: "complete",
        title: "홍보실 사무 (14.06 ~ 15.08)",
        isDeveloperPosition: false,
        programLanguage: null,
        resume: 5,
        desc: [
          "온라인 홍보 모니터링",
          "언론사 광고비 집행 업무 - 언론사 대응 업무",
          "사회공헌 활동 등 주요 행사 업무지원",
          "공사 페이스북 SNS컨텐츠관리"
        ],
        link: null,
        created_at: "2020-11-26T07:41:54.133Z",
        updated_at: "2021-07-20T10:12:44.683Z"
      }
    ]
  },
  {
    id: 6,
    period: "2021.07 ~ 현재",
    companyName: "I2MAX",
    usedPosition: true,
    usedRank: true,
    position: "세일즈포스 개발자(CommonDev Front & Back)",
    rank: "개발센터 파트4 책임 개발자",
    statusType: "process",
    statusText: "프로젝트 진행중",
    flow: 6,
    published_at: "2021-07-20T10:06:23.893Z",
    created_at: "2021-07-20T10:05:09.593Z",
    updated_at: "2021-07-20T10:13:24.194Z",
    companyImg: "i2max.png",
    resume_stories: [
      {
        id: 15,
        type: "process",
        title: "삼성전자 Foundry 부문 비즈니스 시스템 구축 Phase 2 (22.06 ~ 현재)",
        isDeveloperPosition: true,
        programLanguage: "Salesforce LWC / APEX",
        resume: 5,
        desc: [
          "Foundry 사업부 부분 비즈니스 레거시 시스템 세일즈포스 이관 및 시스템 개발",
          "개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
          "Lightning Web component(es6 web component)를 통한 Frontend 개발",
          "APEX(JAVA)와 SOQL(DB)를 통한 BackEnd 개발."
        ],
        link: null,
        created_at: "2022-06-26T07:41:25.827Z",
        updated_at: "2022-06-28T10:12:44.683Z"
      },
      {
        id: 14,
        type: "complete",
        title: "삼성전자 반도체 부문 CRM(SalesForce)시스템 구축 Phase 1 (21.07 ~ 22.05)",
        isDeveloperPosition: true,
        programLanguage: "Salesforce LWC / APEX",
        resume: 5,
        desc: [
          "공통부분 세일즈포스 - knox 메일 시스템 연동 시스템 개발",
          "3개 사업부에서 공통으로 사용하는 SFDC <-> KnoxMail System & File Manage 시스템 구축",
          "개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
          "Lightning Web component(es6 web component)를 통한 Frontend 개발",
          "APEX(JAVA)와 SOQL(DB)를 통한 BackEnd 개발."
        ],
        link: null,
        created_at: "2020-11-26T07:41:25.827Z",
        updated_at: "2021-07-20T10:12:44.683Z"
      }
    ]
  }
];
