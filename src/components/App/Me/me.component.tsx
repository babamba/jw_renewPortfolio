import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, Typography, Avatar } from 'antd';
import useWindowSize from '../../../hooks/useWindow';
import ReactRotatingText from 'react-rotating-text';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const MainIntroText = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  opacity: 0.5;
  margin: 0;
  line-height: 1.5;
`;
const SubIntroText = styled.h2`
  font-weight: 800;
  font-size: 2rem;
  opacity: 0.7;
  margin: 0;
  line-height: 1.5;
  overflow: visible;
  white-space: nowrap;
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

type Props = {
  stateTheme: string;
};
const Me: FunctionComponent<Props> = (props: Props) => {
  const { stateTheme } = props;
  const size = useWindowSize();
  const [ResponsiveFlex, setResponsiveFlex] = useState(false);

  useEffect(() => {
    // console.log('size : ', size);
    if (size !== null) {
      if (size < 768) {
        setResponsiveFlex(true);
      } else {
        setResponsiveFlex(false);
      }
    }
  }, [size]);

  return (
    <>
      <Row
        style={{ alignItems: 'center', padding: ResponsiveFlex ? '1.5em' : '1.5em 11em' }}
        align="middle"
        justify={ResponsiveFlex ? 'center' : 'start'}
      >
        <Col style={{ flexDirection: 'column', padding: 8 }}>
          <Avatar size={size !== null && size > 480 ? 140 : 100} src="/static/images/me.png" />
          <Typography.Title
            style={{
              margin: '.5em 0',
              padding: 0,
              fontWeight: 300,
              fontSize: size !== null && size > 480 ? '1.4em' : '1em',
              lineHeight: 1.4,
              textAlign: 'center'
            }}
          >
            JW{' '}
            <Typography.Link
              style={{ color: stateTheme === 'default' ? 'black' : 'white' }}
              href="https://github.com/babamba"
              target="_blank"
            >
              <GithubOutlined />
            </Typography.Link>
          </Typography.Title>
          <Typography.Paragraph
            style={{
              fontSize: '1em',
              margin: '.1em 0 .6em',
              display: 'inline-block',
              fontStyle: 'italic',
              padding: '6px 10px',
              background: 'rgba(152,44,255, .8)',
              color: '#d9d9d9',
              // background: '#faf46a',
              // color: 'rgba(51, 68, 85,.7)',
              borderRadius: 4,
              lineHeight: 1,
              width: '100%',
              textAlign: 'center'
            }}
          >
            Js Developer
          </Typography.Paragraph>
        </Col>

        {!ResponsiveFlex && (
          <Col style={{ flexDirection: 'column', paddingLeft: '3em' }}>
            <MainIntroText>안녕하세요.</MainIntroText>
            <SubIntroText>
              <ReactRotatingText items={['Front', 'React', 'UI', 'Back', '진지한', '배고픈']} />
              개발자 김진원입니다.
            </SubIntroText>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Me;
