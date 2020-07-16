import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import FolioRoutes from '../../route/FolioRoutes';
import LabsRoutes from '../../route/LabsRoute';
import { observer } from 'mobx-react';
import { ThemeProvider, useTheme } from 'antd-theme';
import useStores from '../../hooks/useStores';
import { Layout, Spin, Typography } from 'antd';
import useWindowSize from '../../hooks/useWindow';
import Loader from '../Loader/Loader';
import Tabs from './Tabs/Tabs';
import MyProfile from './Profile/MyProfile';
import ThemeModeSelector from './ThemeMode/ThemeModeSelector';
import LabModeSelector from './LabMode/LabModeSelector';
import styled from 'styled-components';

import {
  pageTransition,
  pageVariants,
  FastContainerStyle,
  ItemStyle
} from '../../interfaces/Motion';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRouter } from '../../hooks/useRouter';
import ReactGA from 'react-ga';

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

const App = observer(() => {
  const [isBackButtonClicked, setBackbuttonPress] = useState(false);
  const size = useWindowSize();
  const controls = useAnimation();
  const [isInit, setIsInit] = useState(true);
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');

  const [loading, setLoading] = useState(true);
  const { common } = useStores();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(common.useDark);
  const initialTheme = {
    name: 'default',
    variables: {}
  };

  // common.useLabPage ? 'open' : 'closed';

  useEffect(() => {
    console.log('size : ', size);
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
    // if (router.location.pathname === '/') router.history.push('/about');
  }, []);

  // const closeAction = () => {
  //   controls.start((height = 1000) => ({
  //     clipPath: [
  //       `circle(10px at 5px 5px)`,
  //       `circle(${height}px at 40px 40px)`,
  //       `circle(10px at 5px 5px)`
  //     ],
  //     transition: {
  //       duration: 1,
  //       type: 'spring',
  //       stiffness: 400,
  //       damping: 40
  //     }
  //   }));
  // };

  // const openAction = () => {
  //   controls.start((height = 1000) => ({
  //     clipPath: [
  //       `circle(10px at 5px 5px)`,
  //       `circle(${height + 200}px at 40px 40px)`,
  //       `circle(${height + 600}px at 40px 40px)`,
  //       `circle(${document.getElementsByTagName('body')[0].scrollHeight}px at at 40px 40px)`
  //       // `circle(${height + 200}px at 40px 40px)`
  //       // `circle(10px at 20px 20px)`
  //     ],
  //     transition: {
  //       duration: 1.5,
  //       type: 'spring',
  //       stiffness: 400,
  //       damping: 40
  //     }
  //   }));
  // };

  useEffect(() => {
    controls.start(() => ({
      opacity: [0, 1],
      scale: [1, 0.98, 0.97, 0.98, 1]
    }));
  }, [common.useLabPage]);

  // useEffect(() => {
  //   console.log('router.history : ', router);
  // }, [router.location.pathname]);

  const [theme, setInitialTheme] = useState(initialTheme);
  const handleDarkmode = value => {
    //console.log('value: ', value);
    setInitialTheme(value);
  };

  const rotateVariants = {
    open: { opacity: 1, scale: [1, 1.02, 1.04, 1.02, 1] },
    closed: { pacity: 1, scale: [1, 1.02, 1.04, 1.02, 1] }
  };

  // const clipVariants = {
  //   open: (height = size.outerHeight !== undefined ? size.outerHeight : 1000) => ({
  //     clipPath: [
  //       `circle(${height * 2 + 200}px at 40px 40px)`,
  //       `circle(30px at 40px 40px)`,
  //       `circle(${height * 2 + 200}px at 40px 40px)`
  //     ],
  //     transition: {
  //       type: 'spring',
  //       stiffness: 20,
  //       restDelta: 2
  //     }
  //   }),
  //   closed: (height = size.outerHeight !== undefined ? size.outerHeight : 1000) => ({
  //     clipPath: [
  //       `circle(${height * 2 + 200}px at 40px 40px)`,
  //       `circle(30px at 40px 40px)`,
  //       `circle(${height * 2 + 200}px at 40px 40px)`
  //     ],
  //     transition: {
  //       delay: 0.5,
  //       type: 'spring',
  //       stiffness: 400,
  //       damping: 40
  //     }
  //   })
  // };

  return (
    <ThemeProvider theme={theme} onChange={value => handleDarkmode(value)}>
      <AnimatePresence>
        <Layout
          style={{ transition: 'background 0.3s' }}
          className={`${common.useDark ? 'dark' : 'light'} auth main-layout`}
        >
          {loading ? (
            <Loader isDark={common.useDark} />
          ) : (
            <>
              <ThemeModeSelector setIsDarkMode={setIsDarkMode} />
              {/* <LabModeSelector closeAction={closeAction} openAction={openAction} /> */}
              <LabModeSelector />

              <motion.div animate={controls}>
                {/* <motion.div animate={controls} className="clippath-box"> */}
                {common.useLabPage ? (
                  <Layout.Content>
                    <div style={{ position: 'relative' }}>
                      <LabsRoutes />
                    </div>
                  </Layout.Content>
                ) : (
                  <>
                    <Layout.Content>
                      <MyProfile />
                    </Layout.Content>

                    <Tabs />

                    <Layout.Content
                      style={{
                        width:
                          isDeviceSize === 'mobile'
                            ? '90%'
                            : isDeviceSize === 'tablet'
                            ? '90%'
                            : '70%',
                        minHeight: '100vh',
                        margin: '20px auto'
                      }}
                    >
                      <div style={{ position: 'relative' }}>
                        <FolioRoutes />
                      </div>
                    </Layout.Content>
                  </>
                )}
              </motion.div>
            </>
          )}
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
});

export default App;
