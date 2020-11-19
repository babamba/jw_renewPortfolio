import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import favicon from "images/jw.png";

interface MetaProps {
  text: string;
  keywords: string;
  description: string;
  title: string;
}

const HeadMeta: FC<MetaProps> = ({ text, keywords = "", description = "", title = "" }) => {
  const defaultKeyword =
    " javascript, react, antd, nodejs, typescript, frontend, front-end, backend, back-end, Fullstack, developer, 웹개발자, 프론트엔드, 백엔드, 코딩, 프로그래밍, 소프트웨어, 개발자포트폴리오, 프로그래머, 웹개발자포트폴리오, 스타트업개발자";
  return (
    <Helmet>
      <title>김진원 | {text} | I'm FrontEnd Developer</title>
      <meta name={text} content={`${text} content`} />
      <meta name="author" content="Jinwon Kim" />
      <meta property="og:title" content={`김진원 | ${text}`} />

      <meta name="description" content={`김진원 | ${description}`} />
      <meta name="keywords" content={keywords + defaultKeyword} />
      <meta property="og:image" content={favicon} />
      <meta property="og:site_name" content="김진원 | JW PortFolio" />
      <meta property="og:description" content={`김진원 | ${description}`} />

      <meta name="twitter:title" content={`김진원 | ${title}`} />
      <meta name="twitter:description" content={`김진원 | ${description}`} />
      <meta name="twitter:image" content={favicon} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};
export default HeadMeta;
