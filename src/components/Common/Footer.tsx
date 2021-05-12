import { Typography, Affix, Grid } from "antd";
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
      <Affix offsetTop={screens.xxl ? 630 : 740}>
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
                  <GuideText>© 2020 Created by JW</GuideText>
                </motion.div>
              </ContentBox>
            </Container>
          </motion.div>
        </motion.div>
      </Affix>
    </div>
  );
};

export default Contact;
