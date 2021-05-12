import styled from "styled-components";
import Lottie from "react-lottie-wrapper";
import { Typography } from "antd";

import LoadingLottie from "@images/lottie/deep-loading.json";
import { useAppSelector } from "@store/useAppStore";

interface LoadingTextProps {
  darkmode: string;
}

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
`;

const LoadingText = styled(Typography.Text)<LoadingTextProps>`
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  color: ${props => (props.darkmode === "true" ? "rgba(255, 255, 255, 0.8)" : "rgba(0,0,0,0.7)")};
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
  text: string;
}
const ChartLoader = (props: Props) => {
  const { text } = props;
  const { useDark } = useAppSelector(state => state.appStore);

  return (
    <LoadingContainer>
      <Lottie width="100px" height="100px" options={lottieOptions} speed={1} />
      <LoadingText darkmode={useDark ? "true" : "false"}>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default ChartLoader;
