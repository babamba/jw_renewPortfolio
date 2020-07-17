import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, Typography, Badge } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { pageTransition, pageVariants, ContainerStyle, ItemLeftStyle } from '../interfaces/Motion';
import { motion } from 'framer-motion';
import HeadMeta from '../components/Helmet/HeadMeta';
import { useRouter } from '../hooks/useRouter';
import ReactGA from 'react-ga';
import useWindowSize from '../hooks/useWindow';

const StatusBadge = styled(Badge)`
  position: relative;
  top: -1px;
`;

const ContentBox = styled.div`
  padding: 12px;
`;

const GuideText = styled.h4`
  font-weight: 300;

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 1.4em;
  }
`;

type Props = {};
const Contact: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const size = useWindowSize();
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width < 769) {
        SetIsDeviceSize('mobile');
      } else if (size.width < 1201) {
        SetIsDeviceSize('tablet');
      } else {
        SetIsDeviceSize('desktop');
      }
    }
  }, [size]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
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
      style={{ position: 'absolute', width: '100%' }}
      // style={pageStyle}
    >
      <HeadMeta text="Contact Me" />
      <Card
        style={{
          textAlign: 'center',
          padding: '10px 0px',
          borderRadius: 12,
          marginBottom: isDeviceSize === 'desktop' ? 0 : 30,
          margin: isDeviceSize === 'desktop' ? '40px' : 0
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
              <Typography.Text style={{ fontWeight: 200 }}>
                <StatusBadge status="success" /> 현재 사이트는 <br /> React / AntDesign / ContentFul
                으로 만들어졌습니다.
              </Typography.Text>
            </motion.div>
          </ContentBox>
          <ContentBox>
            <motion.div variants={ItemLeftStyle}>
              <GuideText>저에게 관심이 있으시다면</GuideText>
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
                이메일로 연락주시면 상세한 이력서 보내드리겠습니다. <br /> <br />
              </motion.div>
              <motion.div variants={ItemLeftStyle}>
                당신과 함께 성장하고 싶습니다. <br />
              </motion.div>
              <motion.div variants={ItemLeftStyle}>
                봐주셔서 감사합니다. <br /> 김진원 올림.
              </motion.div>
            </GuideText>
          </ContentBox>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Contact;
