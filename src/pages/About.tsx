import React, { FC, useEffect, useRef } from "react";
import { Row, Col, Divider, Card, Typography, Badge, Grid } from "antd";
import styled from "styled-components";
import ReactGA from "react-ga";
import {
  RemoteStack,
  InfraStack,
  BackEndStack,
  CiStack,
  FrontEndStack,
  InterestStack
} from "core/Stack";

import { motion } from "framer-motion";
import {
  pageTransition,
  pageVariants,
  ContainerStyle,
  FastContainerStyle
} from "interfaces/Motion";

import HeadMeta from "components/Helmet/HeadMeta";
import StackCard from "components/Card/StackCard";
import LargeTitle from "components/Common/LargeTitle";

import { useStore } from "hooks/useStore";
import { useRouter } from "hooks/useRouter";

const IntroText = styled.h2`
  font-weight: 200;
  padding: 0px 24px;
  letter-spacing: -0.4px;
  color: ${(props: any) =>
    props.theme === "true" ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.85)"};
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 24px;
  }
`;

const StackText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;

const HashTag = styled.p`
  font-weight: 300;
  padding: 0px 24px;
`;

type Props = {};

const About: FC<Props> = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { useDark } = useStore("common");
  const screens = Grid.useBreakpoint();
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: screens.xl ? "0px" : "20px"
      }}
      // style={pageStyle}
    >
      <HeadMeta
        title="About Me"
        text="About Me"
        keywords="FrontEnd Developer"
        description="About JW"
      />

      <Card
        style={{
          borderRadius: 12,
          margin: screens.xs ? 0 : 20,
          transition: "box-shadow .3s",
          boxShadow: useDark ? "none" : "0px 0px 20px 1px rgba(206, 203, 226, 1)"
        }}
        bodyStyle={{
          padding: "18px 24px"
        }}
      >
        <Row gutter={24}>
          {/*  INTRODUCE */}
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <Divider orientation="left">INTRODUCE</Divider>
            <IntroText theme={useDark ? "true" : "false"}>
              안녕하세요. <br />
              저는 현재 <Typography.Text underline>FrontEnd</Typography.Text> 직군에서 프로젝트를
              진행하고있습니다. <br />
              Javascript 언어를 가장 좋아합니다. <br />
              FrontEnd 및 BackEnd 직군으로 프로젝트를 진행한 경력이 있습니다.
              <br />
              기술 트렌드와 실제 프로덕션의 중간에서 효율점을 찾아가며
              <br />
              하루하루 발전해 나가고 있습니다. 잘 부탁드립니다.
              <br />
              {/* 항상 도전하고 배우겠습니다. */}
            </IntroText>
          </Col>
          {/* TAGS */}
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Divider orientation="left">TAGS</Divider>
            <HashTag>
              #React #NextJS #Javascript #Typescript #Node.JS #jQuery #Express #GraphQL #MySQL #AWS
              #Cognito #MySQL #SpringBoot
            </HashTag>
          </Col>
        </Row>
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          FrontEnd Stack
          <StackText style={{ paddingLeft: 12, fontSize: 12, fontWeight: 100 }}>
            <Badge status="processing" color="green" />
            {screens.md ? ": 현재 진행 중인 프로젝트에서 사용중" : ": 현재 프로젝트에서 사용중"}
          </StackText>
        </Divider>

        <motion.div
          className="container"
          variants={FastContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row gutter={[0, 16]}>
                {FrontEndStack.map((item, i) => (
                  <StackCard
                    key={i}
                    stackTitle={item.stackTitle}
                    imgUrl={item.imgUrl}
                    tooltipTitle={item.tooltipTitle}
                    isUsed={item.isUsed}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Divider orientation="left" style={{ marginBottom: 28 }}>
            BackEnd Stack
          </Divider>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                {BackEndStack.map((item, i) => (
                  <StackCard
                    key={i}
                    stackTitle={item.stackTitle}
                    imgUrl={item.imgUrl}
                    tooltipTitle={item.tooltipTitle}
                    isUsed={item.isUsed}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
        {/* 인프라 */}
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Infra Stack
        </Divider>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                {InfraStack.map((item, i) => (
                  <StackCard
                    key={i}
                    stackTitle={item.stackTitle}
                    imgUrl={item.imgUrl}
                    tooltipTitle={item.tooltipTitle}
                    isUsed={item.isUsed}
                  />
                ))}
              </Row>
            </Col>
          </Row>

          <Divider orientation="left" style={{ marginBottom: 28 }}>
            CI & CD
          </Divider>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                {CiStack.map((item, i) => (
                  <StackCard
                    key={i}
                    stackTitle={item.stackTitle}
                    imgUrl={item.imgUrl}
                    tooltipTitle={item.tooltipTitle}
                    isUsed={item.isUsed}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
        {/* 형상관리 */}
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Remote Repository
        </Divider>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                {RemoteStack.map((item, i) => (
                  <StackCard
                    key={i}
                    stackTitle={item.stackTitle}
                    imgUrl={item.imgUrl}
                    tooltipTitle={item.tooltipTitle}
                    isUsed={item.isUsed}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
        {/* 관심스택 */}
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Interest
        </Divider>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                {InterestStack.map((item, i) => (
                  <StackCard
                    key={i}
                    stackTitle={item.stackTitle}
                    imgUrl={item.imgUrl}
                    tooltipTitle={item.tooltipTitle}
                    isUsed={item.isUsed}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default About;
