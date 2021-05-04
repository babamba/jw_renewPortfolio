import { Grid, Col, Row, Skeleton } from "antd";

const LazyIconLoader = () => {
  const screens = Grid.useBreakpoint();

  return (
    <Row gutter={[8, 24]} justify="center">
      {screens.lg && (
        <>
          <Col xs={4} sm={4} md={4} lg={24} xl={24} xxl={24} style={{ textAlign: "center" }}>
            <Skeleton.Avatar />
          </Col>
          <Col xs={4} sm={4} md={4} lg={24} xl={24} xxl={24} style={{ textAlign: "center" }}>
            <Skeleton.Avatar />
          </Col>
          <Col xs={4} sm={4} md={4} lg={24} xl={24} xxl={24} style={{ textAlign: "center" }}>
            <Skeleton.Avatar />
          </Col>
          <Col xs={4} sm={4} md={4} lg={24} xl={24} xxl={24} style={{ textAlign: "center" }}>
            <Skeleton.Avatar />
          </Col>
          <Col xs={4} sm={4} md={4} lg={24} xl={24} xxl={24} style={{ textAlign: "center" }}>
            <Skeleton.Avatar />
          </Col>
        </>
      )}
    </Row>
  );
};

export default LazyIconLoader;
