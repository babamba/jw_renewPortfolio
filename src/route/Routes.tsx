import React, { useEffect } from 'react';
import { Result } from 'antd';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import Test from '../pages/test';
import { AnimatePresence } from 'framer-motion';

// 전역에서 사용되는 브라우저 라우터

const Routes = () => {
  const location = useLocation();
  console.log('props : ', location);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        {/* exact 대신 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않는다.
         * 주의점 : 비교 할 라우트를 위에 작성해야 한다.
         *  만약에 /statistics 을 /statistics/searchDetail 보다 위에 넣어준다면,
         *  상세화면이 라우팅 되지 않는다.
         *
         */}

        <Redirect exact from="/" to="/test" />
        <Route exact path="/" component={Test} />

        {/*
         */}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
