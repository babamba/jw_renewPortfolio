import React, { useEffect, useState, useRef } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import useWindowSize from '../hooks/useWindow';
import Deck from './PortFolioDeck/Deck';
import { motion, useAnimation } from 'framer-motion';
import { pageOpacityVariants, pageOpacityTransition } from '../interfaces/Motion';
import PortfolioData from './PortFolioDeck/PortfolioData';
import DetailInfo from './PortFolioDeck/FolioInfo';
import { ForwardOutlined, RetweetOutlined } from '@ant-design/icons';
import { Progress, Row, Col } from 'antd';
import useStores from '../hooks/useStores';
import useMount from '../hooks/useMount';

const DeckFolio = props => {
  const { common } = useStores();
  const isMount = useMount();
  const DeckRef = useRef();
  const size = useWindowSize();
  const controls = useAnimation();
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');
  const [currentIdx, SetCurrentIdx] = useState(PortfolioData.length - 1);
  const [prevIdx, setPrevIdx] = useState(0);

  const [progressBar, setProgressBar] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const [InfoData, setInfoData] = useState({});

  const updatePercentage = () => {
    setTimeout(() => {
      if (isMount.current) setProgressBar(progressBar + 1);
    }, 50);
  };

  useEffect(() => {
    window.dispatchEvent(new Event('scroll'));
  }, []);

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) {
      updatePercentage();
    } else if (progressBar >= 100) {
      gestureTrigger();
      setTimeout(() => {
        setProgressBar(0);
      }, 0);
    }
  }, [progressBar]);

  const callback = idx => {
    setPrevIdx(currentIdx);
    if (idx > 0) {
      SetCurrentIdx(idx - 1);
    } else SetCurrentIdx(PortfolioData.length - 1);
  };

  const gestureTrigger = () => {
    DeckRef.current.getNext();
  };

  const ReDeckTrigger = () => {
    DeckRef.current.getRedeck();
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

  useEffect(() => {
    if (prevIdx === 0 && currentIdx === PortfolioData.length - 1) {
      closeAction();
      setTimeout(() => {
        setInfoData(PortfolioData[currentIdx]);
        openAction();
      }, 1000);
    }

    if (prevIdx !== currentIdx) {
      closeAction();
      setTimeout(() => {
        setInfoData(PortfolioData[currentIdx]);
        openAction();
      }, 600);
    }
  }, [currentIdx]);

  // const transitionDuration = 200 + 50; // Keep this value slightly higher than the CSS counterpart
  // const applyProgressBeforeInteractive = `function (elements, progress) {
  //     elements.progressBar.style = 'transform:scaleX(' + progress + ')';
  // }`;

  // const promise = new Promise(resolve => setTimeout(resolve, 4000));

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
          <Deck ref={DeckRef} callback={callback} currentIdx={currentIdx} />
        </div>

        <div
          style={{
            position: 'relative',
            textAlign: 'left',
            padding: '10px 15%',
            top: isDeviceSize === 'desktop' ? '75%' : '0'
          }}
        >
          <div style={{ margin: '12px 0px' }}>
            <Row align="middle" gutter={[16, 8]}>
              <Col
                span={isDeviceSize === 'mobile' ? 2 : 1}
                onClick={() => gestureTrigger()}
                style={{ paddingTop: 8 }}
              >
                <ForwardOutlined style={{ fontSize: 18 }} />
              </Col>
              <Col
                span={isDeviceSize === 'mobile' ? 2 : 1}
                onClick={() => ReDeckTrigger()}
                style={{ paddingTop: 8 }}
              >
                <RetweetOutlined style={{ fontSize: 18 }} />
              </Col>

              <Col span={isDeviceSize === 'mobile' ? 2 : 1} style={{ textAlign: 'center' }}>
                <span>0{PortfolioData.length - currentIdx}</span>
              </Col>
              <Col span={isDeviceSize === 'mobile' ? 6 : 2}>
                <Progress
                  style={{
                    borderRadius: 0
                  }}
                  percent={progressBar}
                  showInfo={false}
                  strokeLinecap="square"
                  strokeColor={common.useDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.65)'}
                />
              </Col>
              <Col span={isDeviceSize === 'mobile' ? 2 : 1} style={{ textAlign: 'center' }}>
                <span>0{PortfolioData.length}</span>
              </Col>
            </Row>
          </div>
          <motion.div animate={controls}>
            <DetailInfo data={InfoData} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(DeckFolio);
