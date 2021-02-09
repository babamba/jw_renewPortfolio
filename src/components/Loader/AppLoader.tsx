import React from "react";
import styled from "styled-components";
import LoadingLottie from "images/lottie/deep-loading.json";
import Lottie from "react-lottie-wrapper";
import { observer } from "mobx-react-lite";
import { useStore } from "hooks/useStore";

interface LoadingTextProps {
  isDark: boolean;
}
interface LoadingContainerProps {
  isDark: boolean;
}
const LoadingContainer = styled.div<LoadingContainerProps>`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: ${props => (props.isDark ? "#1f1f1f" : "rgba(255, 255, 255, 1)")}; */
`;

const LoadingText = styled.span<LoadingTextProps>`
  margin-top: -40px;
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

const LottieLoader = ({ text }) => {
  const { useDark } = useStore("common");

  return (
    <LoadingContainer isDark={useDark}>
      <Lottie width="200px" height="30%" options={lottieOptions} speed={1} />
      <LoadingText isDark={useDark}>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default observer(LottieLoader);
