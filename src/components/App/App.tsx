import React, { useState, useEffect, useRef } from 'react';
import FolioRoutes from '../../route/FolioRoutes';
import LabsRoutes from '../../route/LabsRoute';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'antd-theme';
import useStores from '../../hooks/useStores';
import { Layout, Row, Col, Affix } from 'antd';
import useWindowSize from '../../hooks/useWindow';
import Loader from '../Loader/Loader';

import IconMenu from '../App/Menu/IconMenu';
import IconMobileMenu from '../App/Menu/IconMobileMenu';

import MyProfile from './Profile/MyProfile';
// import LabModeSelector from './LabMode/LabModeSelector';
import styled from 'styled-components';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRouter } from '../../hooks/useRouter';
import ReactGA from 'react-ga';

import DeskTopContact from '../../pages/DeskTopContact';

const ControlCenter = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  right: 12px;
  top: 26px;
  /* width: 80px; */
`;

const App = observer(() => {
  const menuSticky = useRef(null);
  const profileSticky = useRef(null);
  const [top, setTop] = useState(10);
  const [isBackButtonClicked, setBackbuttonPress] = useState(false);
  const size = useWindowSize();
  const controls = useAnimation();
  const [isInit, setIsInit] = useState(true);
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');

  const [loading, setLoading] = useState(true);
  const { common } = useStores();
  const router = useRouter();
  const initialTheme = {
    name: 'default',
    variables: {}
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
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    setLoading(false);
    setIsInit(false);
  }, []);

  useEffect(() => {
    controls.start(() => ({
      opacity: [0, 1],
      scale: [1, 0.98, 0.97, 0.98, 1]
    }));
  }, [common.useLabPage]);

  const [theme, setInitialTheme] = useState(initialTheme);
  const handleDarkmode = value => {
    setInitialTheme(value);
  };

  return (
    <ThemeProvider theme={theme} onChange={value => handleDarkmode(value)}>
      <AnimatePresence>
        <Layout
          style={{ transition: 'background 0.3s' }}
          className={`${common.useDark ? 'dark' : 'light'} auth main-layout`}
        >
          {loading ? (
            <Loader />
          ) : (
            <Layout.Content>
              <motion.div animate={controls}>
                {common.useLabPage ? (
                  <div style={{ position: 'relative' }}>
                    <LabsRoutes />
                  </div>
                ) : (
                  <Layout.Content>
                    {isDeviceSize !== 'desktop' ? (
                      <>
                        <MyProfile />
                        <IconMobileMenu />
                        <Layout.Content
                          style={{
                            width:
                              isDeviceSize === 'mobile'
                                ? '90%'
                                : isDeviceSize === 'tablet'
                                ? '90%'
                                : '60%',
                            margin: '20px auto'
                          }}
                        >
                          <div style={{ position: 'relative' }}>
                            <FolioRoutes />
                          </div>
                        </Layout.Content>
                      </>
                    ) : (
                      <Row
                        style={{
                          height: isDeviceSize === 'desktop' ? '100vh' : 'auto'
                        }}
                      >
                        <Col span={1} style={{ alignSelf: 'center' }}>
                          <Affix ref={menuSticky} offsetTop={20}>
                            <IconMenu />
                          </Affix>
                        </Col>
                        <Col span={8} style={{ alignSelf: 'center' }}>
                          <MyProfile />
                          <DeskTopContact />
                        </Col>

                        <Col span={15}>
                          <div style={{ position: 'relative' }}>
                            <FolioRoutes />
                          </div>
                        </Col>
                      </Row>
                    )}
                  </Layout.Content>
                )}
              </motion.div>
            </Layout.Content>
          )}
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
});

export default App;
