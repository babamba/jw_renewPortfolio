import { useEffect } from "react";
import { Card, Grid, Badge, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { pageTransition, pageVariants, ContainerStyle, ItemLeftStyle } from "@interfaces/Motion";
import { motion } from "framer-motion";
import HeadMeta from "@components/Helmet/HeadMeta";
import { useRouter } from "@hooks/useRouter";
import ReactGA from "react-ga";

const StatusBadge = styled(Badge)`
  position: relative;
  top: -1px;
`;

const ContentBox = styled.div`
  padding: 12px;
`;

const GuideText = styled(Typography.Text)`
  font-weight: 300;

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 1.1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 1.2em;
  }
`;

const Contact = () => {
  const router = useRouter();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: screens.lg ? "0px" : "20px"
      }}
      // style={pageStyle}
    >
      <HeadMeta
        title="Contact Me"
        text="Contact Me"
        keywords="Contact Me"
        description="Contact Me"
        url="contact"
      />
      <Card
        className="glass"
        style={{
          borderRadius: 12,
          marginBottom: screens.lg ? 0 : 30,
          margin: screens.lg ? "40px" : 0
        }}
      >
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ContentBox>
            <motion.div variants={ItemLeftStyle}>
              <GuideText>
                <StatusBadge status="success" /> 현재 사이트는 <br />
                React / AntDesign / ContentFul 등을 사용하여 제작되었습니다.
              </GuideText>
            </motion.div>
          </ContentBox>
          <ContentBox>
            <motion.div variants={ItemLeftStyle}>
              <GuideText>저에게 관심이 있으시거나,</GuideText>
            </motion.div>
            <motion.div variants={ItemLeftStyle}>
              <GuideText>관심사에 대해 궁금한 점이 있다면,</GuideText>
            </motion.div>
            <motion.div variants={ItemLeftStyle}>
              <GuideText>
                <MailOutlined />
                <a style={{ paddingLeft: 8 }} className="email" href="mailto:orochi13@naver.com">
                  orochi13@naver.com
                </a>
              </GuideText>
            </motion.div>
            <GuideText>
              <motion.div variants={ItemLeftStyle}>
                위의 이메일로 언제든 연락주세요. <br />
                <br />
              </motion.div>
              <motion.div variants={ItemLeftStyle}>
                당신과 함께 성장하고 싶습니다. <br />
              </motion.div>
              <br />
              <motion.div variants={ItemLeftStyle}>
                봐주셔서 감사합니다 :D <br />
              </motion.div>

              <motion.div variants={ItemLeftStyle}>김진원 올림.</motion.div>
            </GuideText>
          </ContentBox>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Contact;
