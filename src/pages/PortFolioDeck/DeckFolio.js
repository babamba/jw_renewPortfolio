import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import { Link, withRouter, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindow';
import styled, { keyframes } from 'styled-components';
import useStores from '../../hooks/useStores';
import Deck from './Deck';
import MyProfile from '../../components/App/Profile/MyProfile';
import Menu from '../../components/App/Menu/Menu';
import { motion, useAnimation } from 'framer-motion';
import { pageOpacityVariants, pageOpacityTransition } from '../../interfaces/Motion';
import ListData from './ListData';
import DetailInfo from './DetailInfo';
import DeskTopContact from './DeskTopContact';

const DeckFolio = props => {
  const {
    common: { useDark }
  } = useStores();
  const size = useWindowSize();
  const controls = useAnimation();
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');
  const [currentIdx, SetCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const callback = idx => {
    setPrevIdx(currentIdx);
    SetCurrentIdx(idx);
  };

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

  const DeskTopStyle = {
    position: 'relative',
    top: isDeviceSize === 'desktop' ? '0%' : '-25%',
    right: isDeviceSize === 'desktop' ? '20px' : '0'
    // left: '0%'
  };

  useEffect(() => {
    console.log('prevIdx : ', prevIdx);
    console.log('currentIdx : ', currentIdx);

    if (prevIdx === 1 && currentIdx === 0) {
      closeAction();
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        openAction();
      }, 600);
    }
  }, [currentIdx]);

  const closeAction = () => {
    controls.start(() => ({
      opacity: 0,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }));
  };

  const openAction = () => {
    controls.start(() => ({
      opacity: 1,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }));
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageOpacityVariants}
      transition={pageOpacityTransition}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      // style={pageStyle}
    >
      <div className={isDeviceSize === 'desktop' ? 'deck-area-desktop' : 'deck-area-mobile'}>
        <div
          style={{
            position: isDeviceSize === 'desktop' ? 'fixed' : 'relative',
            width: '100vh',
            height: isDeviceSize === 'desktop' ? '75vh' : '55vh',
            top: isDeviceSize === 'desktop' ? '10%' : '0'
          }}
        >
          <Deck callback={callback} />
        </div>

        <div
          style={{
            position: 'relative',
            textAlign: 'left',
            padding: '10px 15%',
            top: isDeviceSize === 'desktop' ? '75%' : '0'
          }}
        >
          <motion.div animate={controls}>
            <DetailInfo data={ListData[currentIdx]} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(DeckFolio);
