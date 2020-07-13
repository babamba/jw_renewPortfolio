import React, { useState } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from '../../route/Routes';
import { observer } from 'mobx-react';
import { ThemeProvider, useTheme } from 'antd-theme';
import useStores from '../../hooks/useStores';
import { Layout } from 'antd';

import Tabs from './Tabs/Tabs';
import Me from './Me/me.component';
import Mode from './Mode/ModeSelector';

function App() {
  const { common } = useStores();
  const [isDarkMode, setIsDarkMode] = useState(common.useDark);
  const [stateTheme, setStateTheme] = useState('default');
  const initialTheme = {
    name: 'default',
    variables: {}
  };

  const [theme, setInitialTheme] = useState(initialTheme);
  const handleDarkmode = value => {
    console.log('value: ', value);
    setInitialTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChange={value => handleDarkmode(value)}>
      <Layout
        style={{ height: '100%' }}
        className={`${isDarkMode ? 'dark' : 'light'} auth main-layout`}
      >
        <Layout.Content>
          <Me />
          <Mode setIsDarkMode={setIsDarkMode} />
        </Layout.Content>
        <Tabs />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
