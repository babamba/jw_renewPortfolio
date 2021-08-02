import { Typography, Affix, Grid } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { pageTransition, pageVariants, ContainerStyle, ItemLeftStyle } from "@interfaces/Motion";
import { motion } from "framer-motion";

const ContentBox = styled.div`
  padding: 12px;
`;

const Container = styled.div`
  padding: 1.5rem 2rem;
`;

const GuideText = styled(Typography.Text)`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.4px;
`;

const Contact = () => {
  const screens = Grid.useBreakpoint();

  return (
    <div style={{ display: screens.lg ? "block" : "none" }}>
      <Affix offsetTop={screens.xxl ? 212 : 328}>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <motion.div
            className="container"
            variants={ContainerStyle}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Container>
              <ContentBox>
                <motion.div variants={ItemLeftStyle}>
                  <GuideText>
                    현재 사이트는
                    <br />
                    React / AntDesign / ContentFul
                    <br /> 등을 사용하여 제작되었습니다.
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
                <br />
                <motion.div variants={ItemLeftStyle}>
                  <GuideText>
                    <MailOutlined />
                    <a
                      style={{ paddingLeft: 8 }}
                      className="email"
                      href="mailto:orochi13@naver.com"
                    >
                      orochi13@naver.com
                    </a>
                  </GuideText>
                </motion.div>
                <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                  <motion.div variants={ItemLeftStyle}>
                    <GuideText> 위의 이메일로 언제든 연락주세요. </GuideText>
                    <br />
                  </motion.div>
                  <motion.div variants={ItemLeftStyle}>
                    <GuideText>당신과 함께 성장하고 싶습니다. </GuideText>
                    <br />
                  </motion.div>
                  <br />
                  <motion.div variants={ItemLeftStyle}>
                    <GuideText>봐주셔서 감사합니다 :D</GuideText>
                  </motion.div>

                  <motion.div variants={ItemLeftStyle}>
                    <GuideText>김진원 올림.</GuideText>
                  </motion.div>
                </Typography.Text>
              </ContentBox>
            </Container>
          </motion.div>
        </motion.div>
      </Affix>
    </div>
  );
};

export default Contact;
