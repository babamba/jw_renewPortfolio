import styled from "styled-components";
import { Col, Grid, Row, Skeleton } from "antd";

const { Avatar } = Skeleton;

const LoadingContainer = styled.div`
  padding: 8px 40px;
`;

interface Props {
  type: "profile" | "contact" | "content" | "default";
  row: number;
}

const LazySkeletonLoader = (props: Props) => {
  const screens = Grid.useBreakpoint();
  const { type, row } = props;
  return (
    <LoadingContainer>
      <Row>
        {type === "profile" ? (
          <>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={24}
              xl={24}
              xxl={24}
              style={{ padding: screens.lg ? 0 : 20 }}
            >
              <Avatar style={{ width: screens.lg ? 100 : 50, height: screens.lg ? 100 : 50 }} />
            </Col>
            <Col xs={12} sm={8} md={8} lg={24} xl={24} xxl={24}>
              <Skeleton paragraph={{ rows: row }} />
            </Col>
          </>
        ) : (
          Object.keys(screens).length > 0 &&
          screens.lg === true && (
            <Col lg={18} xl={14} xxl={14}>
              <Skeleton paragraph={{ rows: row }} />
            </Col>
          )
        )}
      </Row>
    </LoadingContainer>
  );
};

export default LazySkeletonLoader;
