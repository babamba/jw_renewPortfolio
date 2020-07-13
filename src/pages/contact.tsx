import React, { FunctionComponent } from 'react';
import { Card, Typography, Badge } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { pageTransition, pageVariants, ContainerStyle, ItemStyle } from '../interfaces/Motion';
import { motion } from 'framer-motion';

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
      <Card style={{ textAlign: 'center', padding: '10px 0px', borderRadius: 12 }}>
        <ContentBox>
          <Typography.Text style={{ fontWeight: 200 }}>
            <StatusBadge status="success" /> 현재 사이트는 <br /> NextJS(React) / AntDesign /
            ContentFul 으로 만들어졌습니다.
          </Typography.Text>
        </ContentBox>
        <ContentBox>
          <GuideText>저에게 관심이 있으시다면</GuideText>
          <GuideText>
            <MailOutlined />
            <a style={{ paddingLeft: 8 }} className="email" href="mailto:orochi13@naver.com">
              orochi13@naver.com
            </a>
          </GuideText>
          <GuideText>
            이메일로 연락주시면 상세한 이력서 보내드리겠습니다. <br /> <br />
            당신과 함께 성장하고 싶습니다. <br />
            봐주셔서 감사합니다. <br /> 김진원 올림.
          </GuideText>
        </ContentBox>
      </Card>
    </motion.div>
  );
};

export default Contact;
