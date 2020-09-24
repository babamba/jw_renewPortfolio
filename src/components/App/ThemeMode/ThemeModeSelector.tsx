import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../../../hooks/useStores';
import { useTheme } from 'antd-theme';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';
import CustomIcon from '../../Common/CustomIcon';

const ThemeModeSelector = observer(({ size }) => {
  const { common } = useStores();
  const [{ name, variables }, setTheme] = useTheme();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const body = document.body.classList;
    const mainLayout = document.getElementsByClassName('main-layout')[0].classList;
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
    } else {
      await common.setUseDark(true);
      setTheme({
        name: 'dark'
      });
    }
  };

  const spring = {
    type: 'spring',
    bounceDamping: 0,
    bounceStiffness: 0
  };

  const RotateVariants = {
    open: { rotateZ: [90, 0], transition: { spring } },
    closed: { rotateZ: [0, 90], transition: { spring } }
  };

  return (
    <motion.div animate={common.useDark ? 'open' : 'closed'} variants={RotateVariants}>
      <CustomIcon
        onClick={handleChange}
        style={{
          margin: 0,
          color: common.useDark ? '#f0d74a' : '#6b6b6b',
          fontSize: `${size}rem`,
          cursor: 'pointer'
        }}
        type={common.useDark ? 'icon-night' : 'icon-brightness'}
      />
    </motion.div>
  );
});

export default ThemeModeSelector;
