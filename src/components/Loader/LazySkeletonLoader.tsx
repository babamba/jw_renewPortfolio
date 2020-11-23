import React, { FC } from "react";
import styled from "styled-components";
import { Col, Grid, Row, Skeleton } from "antd";

const { Avatar, Input } = Skeleton;

const LoadingContainer = styled.div`
  padding: 8px 40px;
`;

interface Props {
  type: "profile" | "contact" | "content" | "default";
  row: number;
}

const LazySkeletonLoader: FC<Props> = (props: Props) => {
  const screens = Grid.useBreakpoint();
  const { type, row } = props;
  return (
    <LoadingContainer>
      <Row>
        {type === "profile" ? (
          <>
            <Col xs={2} sm={2} md={2} lg={2} xl={24} xxl={24}>
              <Avatar style={{ width: screens.xl ? 100 : 50, height: screens.xl ? 100 : 50 }} />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={24} xxl={24}>
              <Skeleton paragraph={{ rows: row }} />
            </Col>
          </>
        ) : (
          Object.keys(screens).length > 0 &&
          screens.xl === true && (
            <Col xl={14} xxl={14}>
              <Skeleton paragraph={{ rows: row }} />
            </Col>
          )
        )}
      </Row>
    </LoadingContainer>
  );
};

export default LazySkeletonLoader;
