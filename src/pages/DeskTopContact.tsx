import React, { FunctionComponent, useState, useEffect } from "react";
import { Typography, Badge, Affix, Grid } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  pageTransition,
  pageVariants,
  ContainerStyle,
  ItemLeftStyle,
} from "../interfaces/Motion";
import { motion } from "framer-motion";

const StatusBadge = styled(Badge)`
  position: relative;
  top: -1px;
`;

const ContentBox = styled.div`
  padding: 12px;
`;

const Container = styled.div`
  padding: 1.5rem 2rem;
`;

type Props = {};
const Contact: FunctionComponent<Props> = ({}) => {
  const screens = Grid.useBreakpoint();

  return (
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
                <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                  현재 사이트는 React / AntDesign / ContentFul
                  <br /> 등을 사용하여 제작되었습니다.
                </Typography.Text>
              </motion.div>
            </ContentBox>
            <ContentBox>
              <motion.div variants={ItemLeftStyle}>
                <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                  저에게 관심이 있으시거나,
                </Typography.Text>
              </motion.div>
              <motion.div variants={ItemLeftStyle}>
                <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                  관심사에 대해 궁금한 점이 있다면,
                </Typography.Text>
              </motion.div>
              <br />
              <motion.div variants={ItemLeftStyle}>
                <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                  <MailOutlined />
                  <a
                    style={{ paddingLeft: 8 }}
                    className="email"
                    href="mailto:orochi13@naver.com"
                  >
                    orochi13@naver.com
                  </a>
                </Typography.Text>
              </motion.div>
              <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                <motion.div variants={ItemLeftStyle}>
                  위의 이메일로 언제든 연락주세요. <br />
                </motion.div>
                <motion.div variants={ItemLeftStyle}>
                  당신과 함께 성장하고 싶습니다. <br />
                </motion.div>
                <br />
                <motion.div variants={ItemLeftStyle}>
                  저의 포트폴리오를 시간내어 봐주셔서 감사합니다 :D
                </motion.div>

                <motion.div variants={ItemLeftStyle}>김진원 올림.</motion.div>
              </Typography.Text>
            </ContentBox>
          </Container>
        </motion.div>
      </motion.div>
    </Affix>
  );
};

export default Contact;
