import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { Link, withRouter, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';

import useWindowSize from '../../../hooks/useWindow';
import styled, { keyframes } from 'styled-components';
import useStores from '../../../hooks/useStores';
import {
  pageTransition,
  pageVariants,
  ContainerStyle,
  ItemStyle
} from '../../../interfaces/Motion';
import { motion } from 'framer-motion';

const Gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LinkText = styled.span`
  transition: background-color 2s, transform 2s;
  color: ${props => (props.theme ? '#345' : 'white')};
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 24px;
  }
`;

const GradientFont = styled.span`
  /* background: linear-gradient(to right, #fbcac9, #8ca6ce); */
  /*  */
  /* background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  transition:width 0.4s, opacity 1.1s;
  background:transparent;
  background-size: 200% 200%;
  &:hover {
    transition-delay: width 2s;
    transition:width 0.4s, opacity 1.1s;
    animation: ${Gradient} 5s ease infinite alternate;
    background-size: 200% 200%;
    background: linear-gradient(-60deg, #ebe650, #cfeb50, #23d5ab, #22c1c3, #23a6d5);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-duration: 1.1s;   
  }

  /* animation: ${props => props.isCurrent && `Gradient 5s ease infinite alternate`}; */
`;

const ContentArea = styled.div`
  opacity: ${props => (props.current ? 1 : 0.3)};
  transition: opacity 1s ease 0s;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    padding: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    padding: 30px;
  }
`;
interface Props extends RouteComponentProps<any> {}
//const Dynamic: NextPage<PostPageProps, any> = (props: PostPageProps) => {
const Menu: FunctionComponent<Props> = (props: Props) => {
  const { history, match } = props;
  const size = useWindowSize();
  const {
    common: { useDark }
  } = useStores();

  //   useEffect(() => {
  //     if (size.width !== undefined) {
  //       if (size.width < 400) {
  //         setTitlePadding(0);
  //       }
  //       if (size.width < 768) {
  //         setTitlePadding(0);
  //       } else if (size.width < 1176) {
  //         setTitlePadding(20);
  //       } else {
  //         setTitlePadding(20);
  //       }
  //     }
  //   }, [size]);

  //   const swipePageNum = async (next: number) => {
  //     if (next === 0) history.push('/about');
  //     else if (next === 1) history.push('/portfolio');
  //     else if (next === 2) history.push('/resume');
  //     else if (next === 3) history.push('/contact');
  //     else if (next === 4) history.push('/blog');
  //     else history.push('/');

  //   };

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Row justify="center" align="middle" style={{ padding: '1rem 3rem', paddingRight: '5rem' }}>
        <Col span={6} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <Link to="/about">
              <LinkText theme={useDark}>
                <GradientFont>About</GradientFont>
              </LinkText>
            </Link>
          </motion.div>
        </Col>

        <Col span={6} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <Link to="/portfolio">
              <LinkText theme={useDark}>
                <GradientFont>Portfolio</GradientFont>
              </LinkText>
            </Link>
          </motion.div>
        </Col>
        <Col span={6} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <Link to="/blog">
              <LinkText theme={useDark}>
                <GradientFont>MyPost</GradientFont>
              </LinkText>
            </Link>
          </motion.div>
        </Col>
        <Col span={6} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <Link to="/resume">
              <LinkText theme={useDark}>
                <GradientFont>Resume</GradientFont>
              </LinkText>
            </Link>
          </motion.div>
        </Col>
        {/* <Col span={6} style={{ textAlign: 'center' }}>
        <Link to="/contact">
          <LinkText theme={useDark}>
            <GradientFont>Contact</GradientFont>
          </LinkText>
        </Link>
      </Col> */}
        {/* <Col span={4} style={{ textAlign: 'center' }}>
        <Link to="/profile">
          <LinkText theme={useDark}>
            <GradientFont>Profile</GradientFont>
          </LinkText>
        </Link>
      </Col> */}
      </Row>
    </motion.div>
  );
};

export default withRouter(Menu);
