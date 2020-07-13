import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../../../hooks/useStores';
import { useTheme } from 'antd-theme';
import { PoweroffOutlined, BulbFilled } from '@ant-design/icons';
import { useSpring, animated } from 'react-spring';

import CustomIcon from '../../Common/CustomIcon';

const ModeSelector = observer(({ setIsDarkMode }) => {
  //const { setIsDarkMode } = props;
  const { common } = useStores();
  const [{ name, variables, themes }, setTheme] = useTheme();
  // const animation = useSpring({
  //   from: {
  //     transform: 'rotateZ(0deg)'
  //   },
  //   to: {
  //     transform: 'rotateZ(360deg)'
  //   },
  //   config: {
  //     mass: 1,
  //     tension: 10,
  //     friction: 10
  //   }
  // });

  // const { transform } = useSpring({
  //   from: {
  //     opacity: 0,
  //     transform: `perspective(0px) rotate(${common.useDark ? 180 : 0}deg)`,
  //     transformOrigin: '0 0'
  //   },
  //   to: {
  //     opacity: 1,
  //     transform: `perspective(0px) rotate(${common.useDark ? 0 : 180}deg)`,
  //     transformOrigin: '0 0'
  //   },
  //   config: { mass: 5, tension: 1000, friction: 80 }
  // });

  const initialTheme = {
    name: 'default',
    variables: {}
  };

  useEffect(() => {
    // console.log('mode effect : ', common.useDark);
    init();
  }, []);

  useEffect(() => {
    // console.log('mode effect : ', common.useDark);
    const body = document.body.classList;
    console.log('body : ', body);
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
        name: themes[1].name,
        variables: { ...themes[1].variables, ...initialTheme.variables }
      });
    } else {
      setTheme({
        name: themes[0].name,
        variables: { ...themes[0].variables, ...initialTheme.variables }
      });
    }
  };

  const handleChange = async () => {
    if (common.useDark) {
      await common.setUseDark(false);
      // setTheme(initialTheme);

      setTheme({
        name: themes[0].name,
        variables: { ...themes[0].variables, ...initialTheme.variables }
      });
      setIsDarkMode(false);
    } else {
      await common.setUseDark(true);
      //setTheme(themes[1]);
      setTheme({
        name: themes[1].name,
        variables: { ...themes[1].variables, ...initialTheme.variables }
      });
      setIsDarkMode(true);
    }
  };

  return (
    <div style={{ position: 'absolute', right: 12, top: -6 }}>
      {/* <animated.div style={{ transform }}> */}
      <CustomIcon
        onClick={handleChange}
        style={{
          // transform: 'rotateZ(180deg)',
          // transformOrigin: 'center',
          margin: 0,

          color: common.useDark ? '#f0d74a' : '#000000',
          fontSize: 38,
          cursor: 'pointer',
          marginTop: 20
          // paddingBottom: 12
        }}
        type={common.useDark ? 'icon-night' : 'icon-brightness'}
      />
      {/* </animated.div> */}
    </div>
  );
});

export default ModeSelector;
