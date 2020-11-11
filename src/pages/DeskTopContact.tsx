import React, { FunctionComponent, useState, useEffect } from "react";
import { Typography, Badge, Affix, Grid } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useWindowWidth } from "@react-hook/window-size";

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

  return screens.xl ? (
    <Affix offsetTop={screens.xl ? 212 : 332}>
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
                  <StatusBadge status="success" /> 현재 사이트는 <br /> React /
                  AntDesign / ContentFul 으로 만들어졌습니다.
                </Typography.Text>
              </motion.div>
            </ContentBox>
            <ContentBox>
              <motion.div variants={ItemLeftStyle}>
                <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                  저에게 관심이 있으시다면
                </Typography.Text>
              </motion.div>
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
                  이메일로 연락주시면 상세한 이력서 보내드리겠습니다. <br />{" "}
                  <br />
                </motion.div>
                <motion.div variants={ItemLeftStyle}>
                  당신과 함께 성장하고 싶습니다. <br />
                </motion.div>
              </Typography.Text>
            </ContentBox>
          </Container>
        </motion.div>
      </motion.div>
    </Affix>
  ) : (
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
                <StatusBadge status="success" /> 현재 사이트는 <br /> React /
                AntDesign / ContentFul 으로 만들어졌습니다.
              </Typography.Text>
            </motion.div>
          </ContentBox>
          <ContentBox>
            <motion.div variants={ItemLeftStyle}>
              <Typography.Text style={{ fontWeight: 300, fontSize: 16 }}>
                저에게 관심이 있으시다면
              </Typography.Text>
            </motion.div>
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
                이메일로 연락주시면 상세한 이력서 보내드리겠습니다. <br />{" "}
                <br />
              </motion.div>
              <motion.div variants={ItemLeftStyle}>
                당신과 함께 성장하고 싶습니다. <br />
              </motion.div>
            </Typography.Text>
          </ContentBox>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
