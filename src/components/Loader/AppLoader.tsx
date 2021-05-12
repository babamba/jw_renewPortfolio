import styled from "styled-components";
import LoadingLottie from "@images/lottie/deep-loading.json";
import { Grid, Typography } from "antd";
import Lottie from "react-lottie-wrapper";
import { useAppSelector } from "@store/useAppStore";

interface LoadingTextProps {
  darkmode: string;
}

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingText = styled(Typography.Text)<LoadingTextProps>`
  margin-top: -40px;
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

const LottieLoader = (props: Props) => {
  const { text } = props;
  const { useDark } = useAppSelector(state => state.appStore);
  const screens = Grid.useBreakpoint();
  return (
    <LoadingContainer>
      <Lottie
        width={screens.lg ? "100px" : "200px"}
        height={screens.lg ? "300px" : "400px"}
        options={lottieOptions}
        speed={1}
      />
      <LoadingText darkmode={useDark ? "true" : "false"}>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default LottieLoader;
