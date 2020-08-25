import React, { useEffect, useState, useRef } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import useWindowSize from '../hooks/useWindow';
import Deck from './PortFolioDeck/Deck';
import { motion, useAnimation } from 'framer-motion';
import { pageOpacityVariants, pageOpacityTransition } from '../interfaces/Motion';
import PortfolioData from './PortFolioDeck/PortfolioData';
import DetailInfo from './PortFolioDeck/FolioInfo';
import { ForwardOutlined, RetweetOutlined } from '@ant-design/icons';
import { Progress, Row, Col, Tooltip } from 'antd';
import ReactGA from 'react-ga';
import useStores from '../hooks/useStores';
import useMount from '../hooks/useMount';
import HeadMeta from '../components/Helmet/HeadMeta';
import { useRouter } from '../hooks/useRouter';

const DeckFolio = props => {
  const { common } = useStores();
  const isMount = useMount();
  const router = useRouter();
  const DeckRef = useRef();
  const size = useWindowSize();
  const controls = useAnimation();
  const [animating, setAnimating] = useState(false);
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');
  const [currentIdx, SetCurrentIdx] = useState(PortfolioData.length - 1);
  const [prevIdx, setPrevIdx] = useState(0);

  const [progressBar, setProgressBar] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const [InfoData, setInfoData] = useState({});

  const updatePercentage = () => {
    setTimeout(() => {
      if (isMount.current) setProgressBar(progressBar + 1);
    }, 80);
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
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    openAction();
  }, []);

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
        if (isMount.current) {
          setInfoData(PortfolioData[currentIdx]);
          openAction();
        }
      }, 1000);
    }

    if (prevIdx !== currentIdx) {
      closeAction();
      setTimeout(() => {
        if (isMount.current) {
          setInfoData(PortfolioData[currentIdx]);
          openAction();
        }
      }, 600);
    }
  }, [currentIdx]);

  const closeAction = () => {
    setAnimating(false);
  };

  const openAction = () => {
    setAnimating(true);
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
      <HeadMeta
        title="JW Project PortFolio"
        text="JW Project PortFolio"
        keywords="FrontEnd Developer React Project"
        description="Project PortFolio"
      />
      <div className={isDeviceSize === 'desktop' ? 'deck-area-desktop' : 'deck-area-mobile'}>
        <div
          style={{
            position: isDeviceSize === 'desktop' ? 'fixed' : 'relative',
            textAlign: 'left',
            padding: isDeviceSize === 'desktop' ? '10px 10%' : 0,
            top: isDeviceSize === 'desktop' ? '75%' : '0',
            width: '100%'
          }}
        >
          <Row
            align="middle"
            gutter={[16, 8]}
            justify={isDeviceSize === 'desktop' ? 'start' : 'center'}
          >
            <Col span={24}>
              <div
                style={{
                  position: isDeviceSize === 'desktop' ? 'fixed' : 'relative',
                  height: isDeviceSize === 'desktop' ? '75vh' : size.width > 473 ? '55vh' : '45vh',
                  top: isDeviceSize === 'desktop' ? '7%' : '0'
                }}
              >
                <Deck ref={DeckRef} callback={callback} currentIdx={currentIdx} />
              </div>
            </Col>
            <Col span={24}>
              <Row justify={isDeviceSize === 'desktop' ? 'start' : 'center'}>
                <Col span={isDeviceSize === 'mobile' ? 2 : 1} onClick={() => gestureTrigger()}>
                  <ForwardOutlined style={{ fontSize: 18 }} />
                </Col>
                <Col span={isDeviceSize === 'mobile' ? 2 : 1} onClick={() => ReDeckTrigger()}>
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
                    strokeColor={
                      common.useDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.65)'
                    }
                  />
                </Col>
                <Col span={isDeviceSize === 'mobile' ? 2 : 1} style={{ textAlign: 'center' }}>
                  <span>0{PortfolioData.length}</span>
                </Col>

                <Col offset={1} span={isDeviceSize === 'mobile' ? 2 : 8}>
                  {isDeviceSize !== 'mobile' && (
                    <span style={{ paddingRight: 12 }}>Swipe Left and Right</span>
                  )}

                  <Tooltip placement="topLeft" title={'You Can Try Swipe To Card'}>
                    <img
                      style={{
                        width: 18,
                        height: 18
                      }}
                      src={require('../assets/images/swipe-light.png')}
                    />
                  </Tooltip>
                </Col>
              </Row>
            </Col>
            <Col
              span={24}
              style={{
                padding:
                  isDeviceSize === 'mobile'
                    ? '8px 42px'
                    : isDeviceSize === 'tablet'
                    ? '20px 15%'
                    : '4px 8px'
              }}
            >
              <motion.div animate={controls}>
                <DetailInfo data={InfoData} animating={animating} />
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(DeckFolio);
