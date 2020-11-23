import React from "react";
import styled from "styled-components";
import { Col, Row, Skeleton } from "antd";

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
`;

const LazyIconLoader = () => {
  return (
    <LoadingContainer>
      <Row gutter={[8, 24]}>
        <Col>
          <Skeleton.Avatar />
        </Col>
        <Col>
          <Skeleton.Avatar />
        </Col>
        <Col>
          <Skeleton.Avatar />
        </Col>
        <Col>
          <Skeleton.Avatar />
        </Col>
        <Col>
          <Skeleton.Avatar />
        </Col>
      </Row>
    </LoadingContainer>
  );
};

export default LazyIconLoader;
