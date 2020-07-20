import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ReadOutlined, PictureOutlined, IdcardOutlined, CoffeeOutlined } from '@ant-design/icons';
import { ContainerStyle, ItemStyle } from '../../../interfaces/Motion';
import { motion } from 'framer-motion';
import ThemeModeSelector from '../ThemeMode/ThemeModeSelector';
import useWindowSize from '../../../hooks/useWindow';

interface Props extends RouteComponentProps<any> {}
const IconMobileMenu: FunctionComponent<Props> = (props: Props) => {
  const [selected, setSelected] = useState('/');
  const [isMobile, setIsMobile] = useState(false);
  const { history, match } = props;
  const size = useWindowSize();

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width < 570) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [size]);

  useEffect(() => {
    console.log('test : ', location.pathname);
    const pathname = location.pathname.split('/');

    setSelected(pathname[1]);
  }, [match]);

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Row justify="center" align="middle" style={{ padding: '0px 8px', margin: 'auto 1rem' }}>
        <Col span={4} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={16} />
          </motion.div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: 'center',
            transform: selected === 'about' || selected === '' ? 'scale( 1.2 )' : 'scale( 1 )',
            textDecoration: selected === 'about' ? 'underline' : 'unset',

            transition: '.2s'
          }}
          onClick={() => history.push('/about')}
        >
          <motion.div
            variants={ItemStyle}
            style={{
              cursor: 'pointer',
              backgroundColor:
                isMobile && selected === 'about' ? 'rgba(152, 44, 255, 0.15)' : 'transparent',
              borderRadius: 12
            }}
          >
            {isMobile ? (
              <IdcardOutlined />
            ) : (
              <>
                <IdcardOutlined />

                <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>About</Typography.Text>
              </>
            )}
          </motion.div>
        </Col>

        <Col
          span={5}
          style={{
            textAlign: 'center',
            transform: selected === 'portfolio' ? 'scale( 1.2 )' : 'scale( 1 )',
            textDecoration: selected === 'portfolio' ? 'underline' : 'unset',

            transition: '.2s'
          }}
          onClick={() => history.push('/portfolio')}
        >
          <motion.div
            variants={ItemStyle}
            style={{
              cursor: 'pointer',
              backgroundColor:
                isMobile && selected === 'portfolio' ? 'rgba(152, 44, 255, 0.15)' : 'transparent',
              borderRadius: 12
            }}
          >
            {isMobile ? (
              <PictureOutlined />
            ) : (
              <>
                <PictureOutlined />
                <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>
                  Portfolio
                </Typography.Text>
              </>
            )}
          </motion.div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: 'center',
            transform: selected === 'resume' ? 'scale( 1.2 )' : 'scale( 1 )',
            textDecoration: selected === 'resume' ? 'underline' : 'unset',

            transition: '.2s'
          }}
          onClick={() => history.push('/resume')}
        >
          <motion.div
            variants={ItemStyle}
            style={{
              cursor: 'pointer',
              backgroundColor:
                isMobile && selected === 'resume' ? 'rgba(152, 44, 255, 0.15)' : 'transparent',
              borderRadius: 12
            }}
          >
            {isMobile ? (
              <ReadOutlined />
            ) : (
              <>
                <ReadOutlined />

                <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>
                  Resume
                </Typography.Text>
              </>
            )}
          </motion.div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: 'center',
            transform: selected === 'blog' ? 'scale( 1.2 )' : 'scale( 1 )',
            textDecoration: selected === 'blog' ? 'underline' : 'unset',

            transition: '.2s'
          }}
          onClick={() => history.push('/blog')}
        >
          <motion.div
            variants={ItemStyle}
            style={{
              cursor: 'pointer',
              backgroundColor:
                isMobile && selected === 'blog' ? 'rgba(152, 44, 255, 0.15)' : 'transparent',
              borderRadius: 12
            }}
          >
            {isMobile ? (
              <CoffeeOutlined />
            ) : (
              <>
                <ReadOutlined />

                <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>Blog</Typography.Text>
              </>
            )}
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default withRouter(IconMobileMenu);
