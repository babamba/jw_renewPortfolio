import React, { FC } from 'react';
import { Result, Button } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

const Page_404: FC<RouteComponentProps> = ({ history }) => {
  const HandleGoBack = () => {
    history.goBack();
  };

  return (
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
  );
};

export default withRouter(Page_404);
