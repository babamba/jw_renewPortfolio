import { Resume } from "interfaces/resume";

const resumeData: Resume[] = [
  {
    period: "2019.12 ~ 현재",
    tag: {
      type: "process",
      text: "재직&이직준비",
    },
    companyName: "GINT",
    companyImg: "gint.png",
    usedPosition: true,
    usedRank: true,
    rank: "서비스플랫폼 선임 연구원",
    position: "프론트엔드 개발자(Client)",
    resumeStory: [
      {
        type: "process",
        title: "Gint Connect Telematics 플랫폼 개발 (19.12 ~ 현재)",
        isDeveloperPosition: true,
        programLanguage:
          "React(TypeScript) / Mobx / AntDesign / Appsync(Apollo)",
        subDescriptions: [
          {
            title: "https://daedong-connect.gintlab.com/",
            type: "link",
          },
          {
            title:
              "Gint-Connect 단말기로 쌓여진 트랙터 데이터를 이용한 Web Admin 어플리케이션 개발",
            type: "normal",
          },
          {
            title:
              "AWS lambda / Aws DynamoDB를 이용해 개발된 API 기준 React SPA Application 개발환경 부터 S3 Bucket Product 환경  까지 구성 및 개발 진행",
            type: "normal",
          },
          {
            title:
              "TypeScript 적용. 컴파일 단계 타입체크 및 1차적 문법에러 처리, 런타임 단계 타입 안정성 보장",
            type: "normal",
          },
          {
            title: "React / Amplify / Ant design / styled-components 등 사용",
            type: "normal",
          },
          {
            title:
              "AppSync(GraphQL) 을 통한 Subscription 기반 소켓통신 및 실시간 알림 및 실시간 데이터 변경 처리",
            type: "normal",
          },
          {
            title: "AppSync VTL 코드 작성 ",
            type: "normal",
          },
          {
            title:
              "Mobx를 이용한 Observer패턴 상태 관리 및 비즈니스 로직 분산 개발",
            type: "normal",
          },
          {
            title: "오픈소스 Chart.js를 이용한 통계 관련 Data Visualization",
            type: "normal",
          },
          {
            title:
              "GitLab CI / CD 를 통한 Docker Container build test / e2e test / Deploy PipeLine 작성 및 자동화 구성",
            type: "normal",
          },
          {
            title: "Lottie를 이용한 Animate Loading",
            type: "normal",
          },
          {
            title: "AWS S3 / CloudFront를 이용한 프로덕션 빌드 결과물 배포",
            type: "normal",
          },
          {
            title: "Cypress를 이용한 e2e test code 작성 및 테스트 자동화",
            type: "normal",
          },
          {
            title:
              "디자이너의 와이어프레임을 참고하여 StoryBook 으로 UX / UI 문서화 진행",
            type: "normal",
          },
          {
            title: "서비스 기획 회의 및 요구사항도출 문서화",
            type: "normal",
          },
        ],
      },
      {
        type: "process",
        title: "국립농원과학원 봉군형성실 Web Console 개발(20.01 ~ 현재)",
        isDeveloperPosition: true,
        programLanguage: "React / Material UI",
        subDescriptions: [
          {
            title:
              "국립농업과학원 봉군형성실 iot Project의 web console 개발진행",
            type: "normal",
          },
          {
            title:
              "Flask / mysql 로 개발된 서버의 API 를 가지고 클라이언트 개발",
            type: "normal",
          },
          {
            title: "실시간 데이터 fetching 처리 및 Data Visualization 개발",
            type: "normal",
          },
        ],
      },
      {
        type: "complete",
        title: "국립농원과학원 봉군형성실 Mobile App 개발(20.03 ~ 20.06)",
        isDeveloperPosition: true,
        programLanguage: "React Native / NativeBase / Victory Chart",
        subDescriptions: [
          {
            title: "국립 농과원 web project 기반 React Native로 App 개발 진행",
            type: "normal",
          },
          {
            title:
              "Flask / mysql 로 개발된 서버의 API 를 가지고 클라이언트 개발",
            type: "normal",
          },
          {
            title: "Victory Chart를 통한 Data Visualization 개발",
            type: "normal",
          },
        ],
      },
      {
        type: "complete",
        title: "충남대학교 농업동력 테스트 프로젝트(20.02 ~ 20.03)",
        isDeveloperPosition: true,
        programLanguage: "React / AntDesign",
        subDescriptions: [
          {
            title: "충남대학교 트랙터 동력 테스트 Web console 개발",
            type: "normal",
          },
          {
            title:
              "Aws lambda / sqs 서비스를 이용해 제작된 API를 가지고 데이터 관리 및 실험 관리 클라이언트 개발",
            type: "normal",
          },
          {
            title:
              "위치 데이터 입출력 처리(csv 1만개 이상 데이터) 및 이동경로 지도 표시",
            type: "normal",
          },
        ],
      },
    ],
  },
  {
    period: "2018.05 ~ 2019.09",
    tag: {
      type: "complete",
      text: "계약만료",
    },
    companyName: "XHIFT",
    companyImg: "xhift.png",
    rank: "개발팀 연구원",
    usedPosition: true,
    usedRank: true,
    position: "프론트엔드 개발자(Client)",
    resumeStory: [
      {
        type: "complete",
        title: "알티캐스트 & KT 셋탑 키즈랜드 2.0 프로젝트(18.05 ~ 18.10)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        subDescriptions: [
          {
            title: "알티캐스트 & KT IPTV ACAP 미들웨어 어플리케이션 개발",
            type: "normal",
          },
          {
            title: "전체적인 UI Framework 고도화 및 voiceable 로직 추가",
            type: "normal",
          },
          {
            title: "QA테스트를 통한 이슈사항 관리 및 송출 전 안정화",
            type: "normal",
          },
          {
            title: "Zira 를 이용한 이슈트래커 및 이슈사항 관리",
            type: "normal",
          },
          {
            title:
              "관련 기사 https://www.mk.co.kr/news/special-edition/view/2018/12/777042/",
            type: "normal",
          },
        ],
      },
      {
        type: "complete",
        title: "KT 기가지니 '미봇' POC 프로젝트 (18.05 ~ 18.10)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        subDescriptions: [
          {
            title: "KT 기가지니 '미봇' 테스트용 프로젝트 진행",
            type: "normal",
          },
          {
            title:
              "KT 셋탑 기가지니의 챗봇 관련 front 단 로직 및 UI/UX 적용 개발 진행",
            type: "normal",
          },
          {
            title: "셋탑 사양 대비 애니메이션 추가로 인한 효율적 소스 관리",
            type: "normal",
          },
        ],
      },

      {
        type: "complete",
        title: "알티캐스트 & KT 셋탑 Voice UI 프로젝트(19.05 ~ 19.09)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        subDescriptions: [
          {
            title: "알티캐스트 - KT IPTV ACAP 셋탑 어플리케이션 개발",
            type: "normal",
          },
          {
            title:
              "결제 Voiceable 과 연동하여 자동 추천 및 할인율, 쿠폰 여부 에 따른 자동안내 로직 개발",
            type: "normal",
          },
          {
            title: "제플린 UI 가이드를 통한 View 개발",
            type: "normal",
          },
        ],
      },
      {
        type: "complete",
        title:
          "알티캐스트 & KT 셋탑 키즈랜드 2.0 고도화 프로젝트(18.12 ~ 19.04)",
        isDeveloperPosition: true,
        programLanguage: "Javascript(es5)",
        subDescriptions: [
          {
            title:
              "알티캐스트 - KT IPTV ACAP 셋탑 어플리케이션 모듈 키즈랜드 v2.0 안정화 프로젝트",
            type: "normal",
          },
          {
            title: "결제 관련 부분 UI 및 로직 담당",
            type: "normal",
          },
        ],
      },
    ],
  },
  {
    period: "2017.04 ~ 2018.04",
    tag: {
      type: "complete",
      text: "계약만료",
    },
    companyName: "나눔 ICT",
    companyImg: "nanumict.png",
    usedPosition: true,
    usedRank: true,
    rank: "공공SI 개발팀 사원",
    position: "풀스택 개발자(Server & Client)",
    resumeStory: [
      {
        type: "complete",
        title:
          "오산시 공공기관 오산백년 시민대학 시스템 구축 프로젝트(17.04 ~ 18.01)",
        isDeveloperPosition: true,
        programLanguage: "Spring MVC / Ibatis / HTML & CSS & JQuery",
        subDescriptions: [
          {
            title: "https://www.osan.go.kr/osanedu/",
            type: "link",
          },
          {
            title: "요구사항 도출 및 화면 설계",
            type: "normal",
          },
          {
            title: "화면 설계를 통한 자료 사전 및 도메인 정의, ERD작성",
            type: "normal",
          },
          {
            title: "관리자 서버 & 사용자 서버 개발",
            type: "normal",
          },
          {
            title: "End 유저(시민) Web Client 개발 (HTML / CSS / JQuery / JSP)",
            type: "normal",
          },
          {
            title:
              "관리자(배너, 게시물 관리, 사업관리, 권한 관리, 통계, 접속 로그, 회원관리, 예약관리, 공통코드관리 등) 화면 및 시스템 개발",
            type: "normal",
          },
          {
            title: "형상 관리(SVN), 젠킨스 CI / CD",
            type: "normal",
          },
          {
            title:
              "리포팅 툴을 통한 관리자 통합 분석 및 보고서 제공(ClipReport 솔루션 사용)",
            type: "normal",
          },
          {
            title: "웹표준/웹접근성 관리",
            type: "normal",
          },
        ],
      },
      {
        type: "complete",
        title:
          "오산시 공공기관 오산백년 시민대학 시스템 구축 프로젝트(17.04 ~ 18.01)",
        isDeveloperPosition: true,
        programLanguage: "Spring MVC / Ibatis / HTML & CSS & JQuery",
        subDescriptions: [
          {
            title: "https://apply.gh.or.kr/index.do",
            type: "link",
          },
          {
            title:
              "경기도 및 경기도시공사에서 성공적으로 진행중인 행복주택 사업을 인터넷시스템으로 구축",
            type: "normal",
          },
          {
            title:
              "전자정부프레임워크, Tibero, ibatis, jQuery, Netfunnel, Dguard 사용",
            type: "normal",
          },
          {
            title:
              "12월 중순 1차 인터넷 청약신청시스템 선 구축 후 운영 및 실시간 데이터를 통한 경쟁률 및 현황 분석을 제공 및 민원사항 수렴 후 빠른 조치 제공",
            type: "normal",
          },
          {
            title:
              "분석단계 SH/LH 컨설팅 및 선진사례도출 &gt; RFP, 제안서 기반 요구사항 / 추적표 / 과업대비표 / 도메인정의 도출 &gt; 설계단계",
            type: "normal",
          },
          {
            title: "유즈케이스 / 화면UI설계서 자료 도출",
            type: "normal",
          },
          {
            title: "UI설계서를 위한 Nexacro를 사용한 화면 설계",
            type: "normal",
          },
        ],
      },
    ],
  },
  {
    period: "2016.09 ~ 2017.03",
    tag: {
      type: "complete",
      text: "수료",
    },
    companyName: "비트 캠프",
    companyImg: "bit_logo.png",
    usedPosition: true,
    usedRank: false,
    rank: "",
    position: "JAVA 기반 웹표준/웹프로그래밍 개발자 양성과정",
    resumeStory: [
      {
        type: "complete",
        title: "웹 서버 & 클라이언트 프로그래밍 과정 수료",
        isDeveloperPosition: true,
        programLanguage: "Spring / MyBatis / Maria DB / HTML & CSS & JQuery",
        subDescriptions: [
          {
            title: "응용 애플리케이션 개발과정 습득",
            type: "normal",
          },
          {
            title:
              "졸업프로젝트 : HOT DOG(Pet Cam : Raspberry Pi를 이용한 웹/앱 스트리밍 및 커뮤니티)",
            type: "normal",
          },
        ],
      },
    ],
  },

  {
    period: "2016.09 ~ 2017.03",
    tag: {
      type: "complete",
      text: "계약만료",
    },
    companyName: "경기도시공사(현 경기주택도시공사)",
    companyImg: "gico.png",
    rank: "홍보실 사원",
    usedPosition: false,
    usedRank: true,
    position: "",
    resumeStory: [
      {
        type: "complete",
        title: "사내 홈페이지 고도화 (15.08 ~ 16.06)",
        isDeveloperPosition: true,
        programLanguage: "Spring / JSP / Servlet / HTML",
        subDescriptions: [
          {
            title: "응용 애플리케이션 개발과정 습득",
            type: "normal",
          },
          {
            title:
              "졸업프로젝트 : HOT DOG(Pet Cam : Raspberry Pi를 이용한 웹/앱 스트리밍 및 커뮤니티)",
            type: "normal",
          },
        ],
      },
      {
        type: "complete",
        title: "홍보실 사무 (14.06 ~ 15.08)",
        isDeveloperPosition: false,
        programLanguage: "",
        subDescriptions: [
          {
            title: "온라인 홍보 모니터링",
            type: "normal",
          },
          {
            title: "언론사 광고비 집행 업무 - 언론사 대응 업무",
            type: "normal",
          },
          {
            title: "사회공헌 활동 등 주요 행사 업무지원",
            type: "normal",
          },
          {
            title: "공사 페이스북 SNS컨텐츠관리",
            type: "normal",
          },
        ],
      },
    ],
  },
];

export default resumeData;
