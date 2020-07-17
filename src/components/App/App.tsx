import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import FolioRoutes from '../../route/FolioRoutes';
import LabsRoutes from '../../route/LabsRoute';
import { observer } from 'mobx-react';
import { ThemeProvider, useTheme } from 'antd-theme';
import useStores from '../../hooks/useStores';
import { Layout, Spin, Typography, Row, Col, Affix } from 'antd';
import { AffixProps } from 'antd/lib/affix';
import useWindowSize from '../../hooks/useWindow';
import Loader from '../Loader/Loader';

import Tabs from './Tabs/Tabs';

import IconMenu from '../App/Menu/IconMenu';
import DeckFolio from '../../pages/PortFolioDeck/DeckFolio';

import MyProfile from './Profile/MyProfile';
import ThemeModeSelector from './ThemeMode/ThemeModeSelector';
import LabModeSelector from './LabMode/LabModeSelector';
import styled from 'styled-components';
import Menu from '../../components/App/Menu/Menu';

import {
  pageTransition,
  pageVariants,
  FastContainerStyle,
  ItemStyle
} from '../../interfaces/Motion';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRouter } from '../../hooks/useRouter';
import ReactGA from 'react-ga';

import DetailInfo from '../../pages/PortFolioDeck/DetailInfo';
import DeskTopContact from '../../pages/PortFolioDeck/DeskTopContact';

// const { Text, Title, Paragraph } = Typography;
// const LoaderContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 45%;
// `;

// const LoaderContent = styled(Paragraph)`
//   display: block;
//   color: #fffd8f;
//   font-family: -apple-system, 'Helvetica Neue', sans-serif;
//   font-size: 34px;
//   font-weight: 300;
// `;

// const transitionDuration = 200 + 50; // Keep this value slightly higher than the CSS counterpart
// const applyProgressBeforeInteractive = `function (elements, progress) {
//     elements.progressBar.style = 'transform:scaleX(' + progress + ')';
// }`;

// const promise = new Promise(resolve => setTimeout(resolve, 4000));
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

  // common.useLabPage ? 'open' : 'closed';

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

  type ButtonProps = React.HTMLProps<HTMLButtonElement>;

  // const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  //   <button type="button" ref={ref} className="FancyButton">
  //     {props.children}
  //   </button>
  // ))

  // const MenuAffix = React.forwardRef(({ ...props }, ref) => (
  //   <Affix {...props} offsetTop={top}>
  //     <IconMenu />
  //   </Affix>
  // ));

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
                {/* <motion.div animate={controls} className="clippath-box"> */}
                {common.useLabPage ? (
                  <div style={{ position: 'relative' }}>
                    <LabsRoutes />
                  </div>
                ) : (
                  <Layout.Content>
                    {isDeviceSize !== 'desktop' ? (
                      <>
                        <ControlCenter>
                          <ThemeModeSelector />
                          {/* <LabModeSelector /> */}
                        </ControlCenter>
                        <MyProfile />
                        <Tabs />
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
                      <Row style={{ height: isDeviceSize === 'desktop' ? '100vh' : 'auto' }}>
                        <Col span={1} style={{ alignSelf: 'center' }}>
                          <Affix ref={menuSticky} offsetTop={10}>
                            <IconMenu />
                          </Affix>
                        </Col>
                        <Col span={8} style={{ alignSelf: 'center' }}>
                          <Affix ref={profileSticky} offsetTop={10}>
                            <MyProfile />
                            <DeskTopContact />
                          </Affix>
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
