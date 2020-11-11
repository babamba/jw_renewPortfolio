import React, { FC } from "react";
import { Result, Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import HeadMeta from "../components/Helmet/HeadMeta";

const Page_404: FC<RouteComponentProps> = ({ history }) => {
  const HandleGoBack = () => history.goBack();

  return (
    <>
      <HeadMeta
        title="404 Page"
        text="404"
        keywords="404 Page"
        description="404 Page"
      />
      <Result
        status="404"
        title="404"
        subTitle="원하는 페이지를 찾지못했습니다 :("
        extra={
          <Button onClick={() => HandleGoBack()} type="primary">
            전 페이지로 돌아가기
          </Button>
        }
      />
    </>
  );
};

export default withRouter(Page_404);
