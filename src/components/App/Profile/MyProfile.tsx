import { Row, Col, Typography, Avatar, Affix, Grid } from "antd";
import ReactRotatingText from "react-rotating-text";
import { GithubOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@interfaces/Motion";
import MePhoto from "../../../assets/images/me.png";
import COLOR from "@core/colors";
import { useAppSelector } from "@store/useAppStore";

interface MainIntroTextProps {
  useDark: boolean;
}

const MainIntroText = styled.h1<MainIntroTextProps>`
  font-weight: 800;
  font-size: 3.5rem;
  opacity: 1;
  margin: 0;
  line-height: 1.5;
  letter-spacing: -2.4px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  font-family: "NEXON Lv2 Gothic Bold";
  color: ${props => (props.useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)")};
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 3.3rem;
  }
`;

const MainIntroSmallText = styled.h1<MainIntroTextProps>`
  font-weight: 800;
  font-size: 2rem;
  opacity: 1;
  margin: 0;
  line-height: 1.5;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: -2.4px;
  font-family: "NEXON Lv2 Gothic Bold";
  color: ${props => (props.useDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.85)")};
`;
const SubIntroSmallText = styled.h1<MainIntroTextProps>`
  font-family: "NEXON Lv2 Gothic Bold";
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

const SubIntroText = styled.h2<MainIntroTextProps>`
  font-family: "NEXON Lv2 Gothic Bold";
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

  /* @media only screen and (min-width: 400px) and (max-width: 799px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 800px) and (max-width: 924px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 925px) and (max-width: 1037px) {
    font-size: 2rem;
  } */
`;

const MyProfile = () => {
  const { useDark } = useAppSelector(state => state.appStore);
  const screens = Grid.useBreakpoint();
  const textVariants = {
    out: { x: 10, opacity: 0 },
    in: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 }
    }
  };

  return (
    <Affix offsetTop={screens.lg ? 10 : -120} style={{ position: "relative" }}>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          width: "100%"
        }}
      >
        <Row
          style={{
            alignItems: "center",
            padding: "1.5rem 2rem",
            paddingBottom: screens.lg ? "0" : "1rem"
          }}
          align="middle"
          justify="start"
        >
          <Col
            style={{
              flexDirection: screens.lg ? "column" : "row",
              padding: 8
            }}
          >
            <div>
              <Avatar alt="jinwon-face" size={screens.lg ? 100 : 50} src={MePhoto} />
              <Typography.Title
                style={{
                  display: screens.lg ? "block" : "inline",
                  margin: ".5em 0",
                  padding: 0,
                  fontWeight: 550,
                  fontSize: "1em",
                  lineHeight: 1.4,
                  textAlign: "center",
                  marginLeft: screens.lg ? 0 : 15,
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
                background: COLOR.JS_TAG_BACK_COLOR,
                color: COLOR.JS_TAG_TEXT_COLOR,
                borderRadius: 4,
                lineHeight: 1,
                width: "100%",
                textAlign: "center",
                marginTop: screens.lg ? 0 : 10,
                marginBottom: 0,
                boxShadow: `0 4px 15px 1px ${COLOR.BTN_LESS_SHADOW}`
              }}
            >
              Js Developer
            </Typography.Paragraph>
          </Col>

          {screens.lg ? (
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
                  {screens.xl && (
                    <ReactRotatingText
                      items={["Front", "React", "UI ", "BackEnd", "Salesforce", "진지한", "배고픈"]}
                    />
                  )}
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
                      items={["Front", "React", "UI ", "BackEnd", "Salesforce", "진지한", "배고픈"]}
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

export default MyProfile;
