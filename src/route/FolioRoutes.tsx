import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import About from '../pages/about';
import { AnimatePresence } from 'framer-motion';
import LazyLoader from '../components/Loader/LazyLoader';

// 전역에서 사용되는 브라우저 라우터
const BlogComponent = React.lazy(() => import('../pages/blog'));
const BlogDetailComponent = React.lazy(() => import('../pages/blog-detail'));
const PortfolioComponent = React.lazy(() => import('../pages/DeckFolio'));
const ResumeComponent = React.lazy(() => import('../pages/resume'));
const FolioDetailComponent = React.lazy(() => import('../pages/Portfolio-detail'));

const FolioRoutes = () => {
  const location = useLocation();

  return (
    <React.Suspense
      fallback={
        <div>
          <LazyLoader />
        </div>
      }
    >
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {/* exact 대신 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않는다.
           * 주의점 : 비교 할 라우트를 위에 작성해야 한다.
           *  만약에 /statistics 을 /statistics/searchDetail 보다 위에 넣어준다면,
           *  상세화면이 라우팅 되지 않는다.
           */}
          <Route path={['/', '/about']} exact={true} component={About} />
          {/* <Route path={['/', '/main']} exact component={DeckFolio} />
          <Route path="/about" exact={true} component={About} /> */}

          {/* <Route path="/blog" exact={true} component={Blog} /> */}
          {/* <Route path="/portfolio" exact={true} component={DeckFolio} /> */}
          <Route path="/portfolio" exact={true} component={PortfolioComponent} />
          <Route path="/portfolio/:id" exact={true} component={FolioDetailComponent} />
          {/* <Route path="/contact" exact={true} component={ContactComponent} /> */}
          {/* <Route path="/resume" exact={true} component={Resume} /> */}
          <Route path="/resume" exact={true} component={ResumeComponent} />
          <Route path="/blog" exact={true} component={BlogComponent} />
          <Route path="/blog/:id" exact={true} component={BlogDetailComponent} />

          {/* <Route path="/portfolio" exact={true} component={Portfolio} />
          <Route path="/contact" exact={true} component={Contact} />
         
          
          <Route path="/blog/:id" exact={true} component={BlogDetail} /> */}
          {/* <Route path={['/blog/:id', '/blog']} component={Blog} /> */}

          <Redirect path="*" to="/" />
          {/* <Redirect to="/about" from="/" /> */}
          {/*  */}
          {/* <Route component={NoMatchComponent} /> */}
        </Switch>
      </AnimatePresence>
    </React.Suspense>
  );
};

export default FolioRoutes;
