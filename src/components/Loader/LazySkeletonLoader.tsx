import React, { FC } from "react";
import styled from "styled-components";
import { Grid, Skeleton } from "antd";

const { Avatar } = Skeleton;

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
      {type === "profile" ? (
        <>
          <Avatar style={{ width: 100, height: 100 }} />
          <Skeleton paragraph={{ rows: row }} />
        </>
      ) : (
        Object.keys(screens).length > 0 &&
        screens.xl === true && <Skeleton paragraph={{ rows: row }} />
      )}
    </LoadingContainer>
  );
};

export default LazySkeletonLoader;
