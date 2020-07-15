import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from '../../route/Routes';
import { observer } from 'mobx-react';
import { ThemeProvider, useTheme } from 'antd-theme';
import useStores from '../../hooks/useStores';
import { Layout, Spin, Typography } from 'antd';

import Tabs from './Tabs/Tabs';
import Me from './Me/me.component';
import ThemeModeSelector from './ThemeMode/ThemeModeSelector';
import styled from 'styled-components';

import { useRouter } from '../../hooks/useRouter';
import ReactGA from 'react-ga';
import WaitForReact from '@moxy/react-wait-for-react';
import { LoadingOutlined } from '@ant-design/icons';

const { Text, Title, Paragraph } = Typography;
const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
`;

const LoaderContent = styled(Paragraph)`
  display: block;
  color: #fffd8f;
  font-family: -apple-system, 'Helvetica Neue', sans-serif;
  font-size: 34px;
  font-weight: 300;
`;

const transitionDuration = 200 + 50; // Keep this value slightly higher than the CSS counterpart
const applyProgressBeforeInteractive = `function (elements, progress) {
    elements.progressBar.style = 'transform:scaleX(' + progress + ')';
}`;

const promise = new Promise(resolve => setTimeout(resolve, 4000));

const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const { common } = useStores();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(common.useDark);
  const initialTheme = {
    name: 'default',
    variables: {}
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    setLoading(false);
    // if (router.location.pathname === '/') router.history.push('/about');
  }, []);

  const [theme, setInitialTheme] = useState(initialTheme);
  const handleDarkmode = value => {
    //console.log('value: ', value);
    setInitialTheme(value);
  };
  return (
    <>
      {/* <WaitForReact
        applyProgressBeforeInteractive={applyProgressBeforeInteractive}
        promise={promise}
        progressInterval={transitionDuration}
      >
        {({ progress }) => {
          console.log('progress : ', progress);
          return (
            <div className={`SplashScreen ${progress >= 1 ? 'loaded' : ''}`}>
              <div
                data-wait-for-react-element="progressBar"
                className="Loader-ProgressBar"
                style={{ transform: `scaleX(${progress})` }}
              />
              <LoaderContent>안녕하세요. 김진원입니다.</LoaderContent>
            </div>
          );
        }}
      </WaitForReact> */}
      <ThemeProvider theme={theme} onChange={value => handleDarkmode(value)}>
        <Layout
          style={{ height: '80%', transition: 'background 0.3s' }}
          className={`${common.useDark ? 'dark' : 'light'} auth main-layout`}
        >
          {loading ? (
            <LoaderContainer>
              <Spin
                tip="화면을 구성중입니다..."
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                // style={{ position: 'absolute', top: '50%', left: '45%' }}
              />
            </LoaderContainer>
          ) : (
            <>
              <ThemeModeSelector setIsDarkMode={setIsDarkMode} />
              <Layout.Content>
                <Me />
              </Layout.Content>

              <Tabs />

              <Layout.Content style={{ width: '80%', height: '100%', margin: '20px auto' }}>
                <div style={{ position: 'relative' }}>
                  <Routes />
                </div>
              </Layout.Content>
            </>
          )}
        </Layout>
        {/* <Layout
        style={{ transition: 'background 0.3s', marginBottom: 70 }}
        className={`${common.useDark ? 'dark' : 'light'} bottom-layout`}
      >
        
      </Layout> */}
      </ThemeProvider>
    </>
  );
});

export default App;
