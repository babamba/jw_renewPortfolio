import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../../../hooks/useStores';
import { useTheme, ThemeProvider } from 'antd-theme';
import CustomIcon from '../../Common/CustomIcon';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const ModeSelector = observer(({ setIsDarkMode }) => {
  //const { setIsDarkMode } = props;
  const { common } = useStores();
  const [{ name, variables }, setTheme] = useTheme();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const body = document.body.classList;
    //console.log('body : ', body);
    if (common.useDark) {
      body.remove('light');
      body.add('dark');
    } else {
      body.remove('dark');
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
    open: { scale: [1, 1.2, 1.2, 1] },
    closed: { scale: [1, 1.2, 1.2, 1] }
  };

  return (
    //   <motion.div
    //   animate={{
    //     scale: [1, 2, 2, 1, 1],
    //     rotate: [0, 0, 270, 270, 0],
    //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    //   }}
    // />

    <div style={{ position: 'absolute', right: 12, top: 14 }}>
      <motion.div animate={common.useDark ? 'open' : 'closed'} variants={rotateVariants}>
        {/* <animated.div style={{ transform }}> */}
        <BulbOutlined
          onClick={handleChange}
          style={{
            color: common.useDark ? '#f0d74a' : '#000000',
            fontSize: 30,
            cursor: 'pointer'
          }}
        />
        {/* <CustomIcon
          onClick={handleChange}
          style={{
            color: common.useDark ? '#f0d74a' : '#000000',
            fontSize: 38,
            cursor: 'pointer'
          }}
          type={common.useDark ? 'icon-night' : 'icon-brightness'}
        /> */}
        {/* </animated.div> */}
      </motion.div>
    </div>
  );
});

export default ModeSelector;
