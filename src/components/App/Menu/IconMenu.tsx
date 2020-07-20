import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ReadOutlined, PictureOutlined, IdcardOutlined, CoffeeOutlined } from '@ant-design/icons';
import { ContainerStyle, ItemStyle } from '../../../interfaces/Motion';
import { motion } from 'framer-motion';
import ThemeModeSelector from '../ThemeMode/ThemeModeSelector';

interface Props extends RouteComponentProps<any> {}
const IconMenu: FunctionComponent<Props> = (props: Props) => {
  const [selected, setSelected] = useState('/');
  const { history, match } = props;

  useEffect(() => {
    console.log('test : ', location.pathname);
    setSelected(location.pathname);
  }, [match]);

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Row justify="center" align="middle" gutter={[0, 32]} style={{ paddingTop: 30 }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={20} />
          </motion.div>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <IdcardOutlined
              style={{
                fontSize: selected === '/about' || selected === '/' ? 24 : 20,
                transition: '0.2s'
              }}
              onClick={() => history.push('/about')}
            />
          </motion.div>
        </Col>

        <Col span={24} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <PictureOutlined
              style={{
                fontSize: selected === '/portfolio' ? 24 : 20,
                transition: '0.2s'
              }}
              onClick={() => history.push('/portfolio')}
            />
          </motion.div>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <ReadOutlined
              style={{
                fontSize: selected === '/resume' ? 24 : 20,
                transition: '0.2s'
              }}
              onClick={() => history.push('/resume')}
            />
          </motion.div>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <motion.div variants={ItemStyle}>
            <CoffeeOutlined
              style={{
                fontSize: selected === '/blog' ? 24 : 20,
                transition: '0.2s'
              }}
              onClick={() => history.push('/blog')}
            />
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default withRouter(IconMenu);
