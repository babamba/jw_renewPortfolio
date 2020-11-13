import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-wrapper";

import { useStore } from "hooks/useStore";
import LoadingLottie from "images/lottie/deep-loading.json";

interface LoadingTextProps {
  isDark: boolean;
}

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
`;

const LoadingText = styled.span<LoadingTextProps>`
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0,0,0,0.7)"};
`;

const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
  },
  animationData: LoadingLottie,
};

const ChartLoader = ({ text }) => {
  const { useDark } = useStore("common");

  return (
    <LoadingContainer>
      <Lottie width="100px" height="100px" options={lottieOptions} speed={1} />
      <LoadingText isDark={useDark}>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default ChartLoader;
