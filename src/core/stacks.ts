import { Stack } from "@interfaces/stack";

const backEndStack: Stack[] = [
  {
    id: 1,
    stackTitle: "SpringBoot",
    tooltipTitle: null,
    isUsed: false,
    published_at: "2020-11-25T02:31:34.641Z",
    created_at: "2020-11-25T02:31:32.763Z",
    updated_at: "2020-11-25T02:33:56.291Z",
    imgUrl: "spring.png"
  },
  {
    id: 2,
    stackTitle: "express.js",
    tooltipTitle: null,
    isUsed: false,
    published_at: "2020-11-25T02:32:54.428Z",
    created_at: "2020-11-25T02:32:52.011Z",
    updated_at: "2020-11-25T02:34:01.737Z",
    imgUrl: "express.png"
  },
  {
    id: 3,
    stackTitle: "GraphQL",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:33:12.338Z",
    created_at: "2020-11-25T02:33:11.049Z",
    updated_at: "2020-11-25T02:33:12.406Z",
    imgUrl: "graphql.png"
  },
  {
    id: 4,
    stackTitle: "Prisma.V2",
    tooltipTitle: null,
    isUsed: false,
    published_at: "2020-11-25T02:33:26.040Z",
    created_at: "2020-11-25T02:33:24.913Z",
    updated_at: "2020-11-25T02:33:26.077Z",
    imgUrl: "prisma.png"
  },
  {
    id: 5,
    stackTitle: "AppSync",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:33:48.221Z",
    created_at: "2020-11-25T02:33:47.013Z",
    updated_at: "2020-11-25T02:33:48.325Z",
    imgUrl: "Appsync.png"
  }
];

const frontEndStack: Stack[] = [
  {
    id: 1,
    stackTitle: "Javascript",
    tooltipTitle: "프론트엔드 개발자로써 Dom 컨트롤 및 데이터 컨트롤을 위한 필수 요소",
    isUsed: true,
    published_at: "2020-11-25T02:20:25.047Z",
    created_at: "2020-11-25T02:20:21.829Z",
    updated_at: "2020-11-25T03:02:02.308Z",
    imgUrl: "js.png"
  },
  {
    id: 2,
    stackTitle: "ES 6",
    tooltipTitle: "프론트엔드 개발자로써 Dom 컨트롤 및 데이터 컨트롤을 위한 필수 요소",
    isUsed: true,
    published_at: "2020-11-25T02:24:11.629Z",
    created_at: "2020-11-25T02:24:10.168Z",
    updated_at: "2020-11-25T02:24:11.661Z",
    imgUrl: "jses6.png"
  },
  {
    id: 3,
    stackTitle: "TypeScript",
    tooltipTitle: "런타임에러 방지 및 신용 할 수 있는 코드를 위한 필수 요소",
    isUsed: true,
    published_at: "2020-11-25T02:24:40.925Z",
    created_at: "2020-11-25T02:24:37.827Z",
    updated_at: "2020-11-25T02:24:40.953Z",
    imgUrl: "typescript.png"
  },
  {
    id: 4,
    stackTitle: "Babel",
    tooltipTitle:
      "크로스브라우징을 위해 es6문법으로 작성된 js파일을 es5문법으로 작성된 js파일로 만들어 주기 위한 필수요소",
    isUsed: true,
    published_at: "2020-11-25T02:25:40.025Z",
    created_at: "2020-11-25T02:25:38.521Z",
    updated_at: "2020-11-25T02:25:40.053Z",
    imgUrl: "babel.png"
  },
  {
    id: 5,
    stackTitle: "Webpack",
    tooltipTitle:
      "각 파일로 나뉘어있는 소스들을 하나로묶어(번들링)서 네트워크 비용을 최소화 하는 필수 요소",
    isUsed: true,
    published_at: "2020-11-25T02:25:57.624Z",
    created_at: "2020-11-25T02:25:56.365Z",
    updated_at: "2020-11-25T02:25:57.658Z",
    imgUrl: "webpack.png"
  },
  {
    id: 6,
    stackTitle: "Jquery",
    tooltipTitle: null,
    isUsed: false,
    published_at: "2020-11-25T02:26:23.725Z",
    created_at: "2020-11-25T02:26:21.518Z",
    updated_at: "2020-11-25T02:26:23.759Z",
    imgUrl: "jquery.png"
  },
  {
    id: 7,
    stackTitle: "React",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:26:39.023Z",
    created_at: "2020-11-25T02:26:37.927Z",
    updated_at: "2020-11-25T02:26:39.050Z",
    imgUrl: "react.png"
  },
  {
    id: 8,
    stackTitle: "Next.js",
    tooltipTitle: null,
    isUsed: false,
    published_at: "2020-11-25T02:26:56.727Z",
    created_at: "2020-11-25T02:26:54.615Z",
    updated_at: "2020-11-25T02:34:12.920Z",
    imgUrl: "nextjs.png"
  },
  {
    id: 9,
    stackTitle: "ReactNative",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:27:19.137Z",
    created_at: "2020-11-25T02:27:18.018Z",
    updated_at: "2020-11-25T02:27:19.174Z",
    imgUrl: "RN.png"
  },
  {
    id: 10,
    stackTitle: "Redux",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:27:36.421Z",
    created_at: "2020-11-25T02:27:29.131Z",
    updated_at: "2021-05-12T02:30:38.761Z",
    imgUrl: "redux.png"
  },
  {
    id: 11,
    stackTitle: "Mobx",
    tooltipTitle: null,
    isUsed: false,
    published_at: "2020-11-25T02:27:52.585Z",
    created_at: "2020-11-25T02:27:50.912Z",
    updated_at: "2021-05-12T02:31:00.379Z",
    imgUrl: "mobx.png"
  },
  {
    id: 12,
    stackTitle: "StyledComponent",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:28:05.158Z",
    created_at: "2020-11-25T02:28:03.817Z",
    updated_at: "2020-11-25T02:28:05.190Z",
    imgUrl: "styled-component.png"
  },
  {
    id: 13,
    stackTitle: "AntDesign",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:28:26.125Z",
    created_at: "2020-11-25T02:28:23.918Z",
    updated_at: "2020-11-25T02:28:26.156Z",
    imgUrl: "ant.png"
  },
  {
    id: 14,
    stackTitle: "Chart.js",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:28:43.423Z",
    created_at: "2020-11-25T02:28:42.214Z",
    updated_at: "2020-11-25T02:28:43.452Z",
    imgUrl: "chartjs.png"
  },
  {
    id: 15,
    stackTitle: "Lottie",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:29:03.775Z",
    created_at: "2020-11-25T02:29:02.514Z",
    updated_at: "2020-11-25T02:29:03.804Z",
    imgUrl: "lottie.png"
  },
  {
    id: 16,
    stackTitle: "Apollo",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:29:20.626Z",
    created_at: "2020-11-25T02:29:18.611Z",
    updated_at: "2020-11-25T02:29:20.657Z",
    imgUrl: "apollo.png"
  },
  {
    id: 17,
    stackTitle: "React-Query",
    tooltipTitle: "API 코드 간결화와 비동기 데이터 캐시 관리 ",
    isUsed: true,
    published_at: "2021-05-04T06:05:43.670Z",
    created_at: "2021-05-04T06:05:41.898Z",
    updated_at: "2021-05-04T06:05:43.766Z",
    imgUrl: "react-query.png"
  },
  {
    id: 18,
    stackTitle: "Framer-motion",
    tooltipTitle: "다양한 애니메이션 구현",
    isUsed: true,
    published_at: "2021-05-04T06:08:56.341Z",
    created_at: "2021-05-04T06:08:51.395Z",
    updated_at: "2021-05-04T06:08:56.467Z",
    imgUrl: "framer-motion.png"
  }
];

const remoteStack: Stack[] = [
  {
    id: 1,
    stackTitle: "Github",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:36:09.544Z",
    created_at: "2020-11-25T02:36:07.132Z",
    updated_at: "2020-11-25T02:36:09.616Z",
    imgUrl: "github.png"
  },
  {
    id: 2,
    stackTitle: "GitLab",
    tooltipTitle: null,
    isUsed: true,
    published_at: "2020-11-25T02:36:57.431Z",
    created_at: "2020-11-25T02:36:54.715Z",
    updated_at: "2020-11-25T02:36:57.462Z",
    imgUrl: "gitlab.png"
  }
];

const interestStack: Stack[] = [
  {
    id: 1,
    stackTitle: "k8s",
    tooltipTitle: null,
    isUsed: false,
    created_at: "2020-11-25T02:42:47.618Z",
    updated_at: "2020-11-25T02:42:47.635Z",
    imgUrl: "k8s.png"
  },
  {
    id: 2,
    stackTitle: "ELK Stack",
    tooltipTitle: "",
    isUsed: false,
    created_at: "2020-11-25T02:43:06.024Z",
    updated_at: "2020-11-25T04:41:26.322Z",
    imgUrl: "elk.png"
  }
];

const infraStack: Stack[] = [
  {
    id: 1,
    stackTitle: "AWS",
    tooltipTitle: null,
    isUsed: true,
    created_at: "2020-11-25T02:42:12.734Z",
    updated_at: "2020-11-25T02:42:12.754Z",
    imgUrl: "aws.png"
  },
  {
    id: 2,
    stackTitle: "Docker",
    tooltipTitle: null,
    isUsed: false,
    created_at: "2020-11-25T02:42:27.928Z",
    updated_at: "2020-11-25T02:42:27.945Z",
    imgUrl: "docker.png"
  }
];

const ciStack: Stack[] = [
  {
    id: 1,
    stackTitle: "GitLab-Runner",
    tooltipTitle: null,
    isUsed: true,
    created_at: "2020-11-25T02:39:25.212Z",
    updated_at: "2020-11-25T02:39:25.331Z",
    imgUrl: "gitlab.png"
  }
];

const SFStack: Stack[] = [
  {
    id: 1,
    stackTitle: "Salesforce",
    tooltipTitle: null,
    isUsed: true,
    created_at: "2021-07-02T02:39:25.212Z",
    updated_at: "2021-07-02T02:39:25.331Z",
    imgUrl: "salesforce.png"
  },
  {
    id: 2,
    stackTitle: "LWC",
    tooltipTitle: null,
    isUsed: true,
    created_at: "2021-07-02T02:39:25.212Z",
    updated_at: "2021-07-02T02:39:25.331Z",
    imgUrl: "lwc.png"
  }
];

export { backEndStack, frontEndStack, remoteStack, interestStack, infraStack, ciStack, SFStack };
