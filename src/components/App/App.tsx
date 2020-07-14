import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from '../../route/Routes';
import { observer } from 'mobx-react';
import { ThemeProvider, useTheme } from 'antd-theme';
import useStores from '../../hooks/useStores';
import { Layout } from 'antd';

import Tabs from './Tabs/Tabs';
import Me from './Me/me.component';
import ThemeModeSelector from './ThemeMode/ThemeModeSelector';

import { useRouter } from '../../hooks/useRouter';
import ReactGA from 'react-ga';

const App = () => {
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
  }, []);

  const [theme, setInitialTheme] = useState(initialTheme);
  const handleDarkmode = value => {
    //console.log('value: ', value);
    setInitialTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChange={value => handleDarkmode(value)}>
      <Layout
        style={{ height: '100%', transition: 'background 0.3s' }}
        className={`${isDarkMode ? 'dark' : 'light'} auth main-layout`}
      >
        <ThemeModeSelector setIsDarkMode={setIsDarkMode} />
        <Layout.Content>
          <Me />
        </Layout.Content>

        <Tabs />

        <Layout.Content style={{ width: '90%', height: '100%', margin: '20px auto' }}>
          <div style={{ position: 'relative' }}>
            <Routes />
          </div>
        </Layout.Content>
      </Layout>
      {/* <Layout
        style={{ transition: 'background 0.3s', marginBottom: 70 }}
        className={`${common.useDark ? 'dark' : 'light'} bottom-layout`}
      >
        
      </Layout> */}
    </ThemeProvider>
  );
};

export default App;
