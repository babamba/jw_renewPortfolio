import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../../../hooks/useStores';
import { useTheme } from 'antd-theme';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const Container = styled.div`
  position: absolute;
  right: 12px;
  top: 14px;
`;

const ThemeModeSelector = observer(({ setIsDarkMode }) => {
  //const { setIsDarkMode } = props;
  const { common } = useStores();
  const [{ name, variables }, setTheme] = useTheme();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const body = document.body.classList;
    const mainLayout = document.getElementsByClassName('main-layout')[0].classList;
    //console.log('body : ', body);
    if (common.useDark) {
      mainLayout.remove('light');
      body.remove('light');
      mainLayout.add('dark');
      body.add('dark');
    } else {
      mainLayout.remove('dark');
      body.remove('dark');
      mainLayout.add('light');
      body.add('light');
    }
    init();
  }, [common.useDark]);

  const init = async () => {
    if (common.useDark) {
      setTheme({
        name: 'dark'
      });
    } else {
      setTheme({
        name: 'default'
      });
    }
  };

  const handleChange = async () => {
    if (common.useDark) {
      await common.setUseDark(false);
      setTheme({
        name: 'default'
      });
      setIsDarkMode(false);
    } else {
      await common.setUseDark(true);
      setTheme({
        name: 'dark'
      });
      setIsDarkMode(true);
    }
  };

  const rotateVariants = {
    open: { opacity: 1, scale: [1, 1.2, 1.2, 1] },
    closed: { pacity: 1, scale: [1, 1.2, 1.2, 1] }
  };

  return (
    <Container>
      <motion.div animate={common.useDark ? 'open' : 'closed'} variants={rotateVariants}>
        <BulbOutlined
          onClick={handleChange}
          style={{
            color: common.useDark ? '#f0d74a' : '#000000',
            fontSize: 24,
            cursor: 'pointer'
          }}
        />
      </motion.div>
    </Container>
  );
});

export default ThemeModeSelector;
