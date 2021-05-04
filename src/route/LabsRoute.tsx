import { Route, Switch, useLocation } from "react-router-dom";
import LabMain from "../pages/LabMain";
import { AnimatePresence } from "framer-motion";

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
