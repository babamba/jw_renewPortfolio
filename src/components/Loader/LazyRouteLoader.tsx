import React, { FC } from "react";
import styled from "styled-components";
import Lottie from "react-lottie-wrapper";

import { useStore } from "hooks/useStore";
import LoadingLottie from "images/lottie/lego-loading.json";
import { Skeleton } from "antd";

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10% 0;
`;

const LoadingText = styled.span<Props>`
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  color: ${props => (props.isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0,0,0,0.7)")};
`;

const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet"
  },
  animationData: LoadingLottie
};

interface Props {
  isDark: boolean;
}

const RouteLoader: FC = () => {
  const { useDark } = useStore("common");

  return (
    <LoadingContainer>
      <Lottie width="30%" height="30%" options={lottieOptions} speed={1} />
      <LoadingText isDark={useDark}>Loading..</LoadingText>
    </LoadingContainer>
  );
};

export default RouteLoader;
