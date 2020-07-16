import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
// import loadable from '@loadable/component';

import LabMain from '../pages/LabMain';
import { AnimatePresence } from 'framer-motion';

// const AboutComponent = loadable(() => import('../pages/about'));
// const BlogComponent = loadable(() => import('../pages/blog'));
// const BlogDetailComponent = loadable(() => import('../pages/blog-detail'));
// const ContactComponent = loadable(() => import('../pages/contact'));
// const PortfolioComponent = loadable(() => import('../pages/portfolio'));
// const ResumeComponent = loadable(() => import('../pages/resume'));
// const NoMatchComponent = loadable(() => import('../pages/404'));
// 전역에서 사용되는 브라우저 라우터

const LabsRoute = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        {/* exact 대신 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않는다.
         * 주의점 : 비교 할 라우트를 위에 작성해야 한다.
         *  만약에 /statistics 을 /statistics/searchDetail 보다 위에 넣어준다면,
         *  상세화면이 라우팅 되지 않는다.
         */}

        <Route path="/lab" exact={true} component={LabMain} />
        <Route path="/" exact component={LabMain} />
      </Switch>
    </AnimatePresence>
  );
};

export default LabsRoute;
