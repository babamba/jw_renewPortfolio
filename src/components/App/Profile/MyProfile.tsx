import React, { FC } from "react";
import { Row, Col, Typography, Avatar, Affix, Grid, Divider } from "antd";
import ReactRotatingText from "react-rotating-text";
import { GithubOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStore } from "hooks/useStore";
import { pageDetailVariants, pageDetailTransition } from "interfaces/Motion";
import { observer } from "mobx-react-lite";

const MainIntroText = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  opacity: 1;
  margin: 0;
  line-height: 1.5;
  letter-spacing: -2.4px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  font-family: "NEXON Lv2 Gothic Bold";
  color: ${props => (props.useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)")};
`;

const MainIntroSmallText = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  opacity: 0.9;
  margin: 0;
  line-height: 1.5;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: -2.4px;
  font-family: "NEXON Lv2 Gothic Bold";
  color: ${props => (props.useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)")};
`;
const SubIntroSmallText = styled.h1`
  font-weight: 300;
  font-size: 1.1rem;
  padding-left: 2px;
  opacity: 1;
  margin: 0;
  line-height: 1.5;
  overflow: visible;
  white-space: nowrap;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  color: ${props => (props.useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)")};
`;

const SubIntroText = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
  opacity: 1;
  margin: 0;
  line-height: 1.5;
  overflow: visible;
  white-space: nowrap;
  padding-left: 6px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  color: ${props => (props.useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)")};
  @media only screen and (min-width: 400px) and (max-width: 799px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 800px) and (max-width: 924px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 925px) and (max-width: 1037px) {
    font-size: 2rem;
  }
`;

const MyProfile: FC = () => {
  const { useDark } = useStore("common");
  const screens = Grid.useBreakpoint();
  const textVariants = {
    out: { x: 10, opacity: 0 },
    in: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 }
    }
  };
  // return screens.xl ? (
  return (
    <Affix offsetTop={screens.xl ? 10 : -120} style={{ position: "relative" }}>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageDetailVariants}
        transition={pageDetailTransition}
        style={{
          width: "100%"
        }}
      >
        <Row
          style={{
            alignItems: "center",
            padding: "1.5rem 2.5rem",
            paddingBottom: screens.xl ? "0" : "1rem"
          }}
          align="middle"
          justify="start"
        >
          <Col
            style={{
              flexDirection: screens.xl ? "column" : "row",
              padding: 8
            }}
          >
            <div>
              <Avatar size={screens.xl ? 100 : 50} src={require("../../../assets/images/me.png")} />

              <Typography.Title
                style={{
                  display: screens.xl ? "block" : "inline",
                  margin: ".5em 0",
                  padding: 0,
                  fontWeight: 550,
                  fontSize: "1em",
                  lineHeight: 1.4,
                  textAlign: "center",
                  marginLeft: screens.xl ? 0 : 15,
                  letterSpacing: -0.8,
                  color: useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)"
                }}
              >
                <Typography.Link
                  style={{
                    color: useDark ? "white" : "black",
                    textShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px"
                  }}
                  href="https://github.com/babamba"
                  target="_blank"
                >
                  JW <GithubOutlined />
                </Typography.Link>
              </Typography.Title>
            </div>
            <Typography.Paragraph
              style={{
                fontSize: "1em",
                // margin: '.1em 0 .6em',
                display: "inline-block",
                fontStyle: "italic",
                padding: "6px 10px",
                background: "rgba(255,248,24, 1)",
                color: "rgba(51, 68, 85,.8)",
                // background: '#faf46a',
                // color: 'rgba(51, 68, 85,.7)',
                borderRadius: 4,
                lineHeight: 1,
                width: "100%",
                textAlign: "center",
                marginTop: screens.xl ? 0 : 10,
                marginBottom: 0,
                boxShadow: "0 4px 15px 1px rgba(0,0,0,0.1)"
              }}
            >
              Js Developer
            </Typography.Paragraph>
          </Col>

          {screens.xl ? (
            <Col
              style={{
                flexDirection: "column",
                paddingLeft: screens.xxl ? "2.5em" : 0
              }}
              span={screens.xxl ? 17 : 24}
            >
              <motion.div variants={textVariants}>
                <MainIntroText useDark={useDark}>안녕하세요.</MainIntroText>
              </motion.div>
              <motion.div variants={textVariants}>
                <SubIntroText useDark={useDark}>
                  <ReactRotatingText
                    items={["Front", "React", "UI ", "BackEnd", "진지한", "배고픈"]}
                  />
                  개발자 김진원입니다.
                </SubIntroText>
              </motion.div>
            </Col>
          ) : (
            <Col style={{ flexDirection: "column", paddingLeft: "1em" }}>
              <motion.div variants={textVariants}>
                <MainIntroSmallText useDark={useDark}>안녕하세요.</MainIntroSmallText>
              </motion.div>
              <motion.div variants={textVariants}>
                {/* {screens.lg && (
                  <SubIntroText>
                    <ReactRotatingText
                      items={[
                        "Front",
                        "React",
                        "UI ",
                        "BackEnd",
                        "진지한",
                        "배고픈",
                      ]}
                    />
                  </SubIntroText>
                )} */}
                <SubIntroSmallText useDark={useDark}>
                  {screens.sm && (
                    <ReactRotatingText
                      items={["Front", "React", "UI ", "BackEnd", "진지한", "배고픈"]}
                    />
                  )}
                  개발자 김진원입니다.
                </SubIntroSmallText>
              </motion.div>
            </Col>
          )}
        </Row>
      </motion.div>
    </Affix>
  );
};

export default observer(MyProfile);
