import { useState, useCallback, useRef, useLayoutEffect } from "react";
import { OverflowDetector } from "react-overflow";
import { Typography, Space } from "antd";
import { useWindowWidth } from "@react-hook/window-size";
import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
`;

interface MarqueeBoxProps {
  color?: string;
}
const MarqueeBox = styled.div<MarqueeBoxProps>`
  width: 100%;
  white-space: nowrap;
  color: ${props => (props.color ? props.color : "inherit")};
`;

interface MarqueeTextProps {
  delay: number | undefined;
}

const MarqueeText = styled.div<MarqueeTextProps>`
  display: inline-block;
  animation: ${props =>
    props.delay ? `marquee ${props.delay}s linear infinite` : "marquee 15s linear infinite"};
`;

const MarqueeText2 = styled.div<MarqueeTextProps>`
  display: inline-block;
  animation: ${props =>
    props.delay ? `marquee ${props.delay}s linear infinite` : "marquee 15s linear infinite"};
`;

interface DefaultTextProps {
  size?: number | undefined;
  weight?: number | undefined;
}
const DefaultText = styled.span<DefaultTextProps>`
  font-size: ${props => (props.size ? `${props.size}px` : `14px`)};
  font-weight: ${props => (props.weight ? `${props.weight}` : `500`)};
`;

interface Props {
  content: string;
  color?: string | undefined;
  delay?: number | undefined;
}

const OverFlowTitle = (props: Props) => {
  const browserWidth = useWindowWidth();
  const marqueeBoxRef = useRef<HTMLDivElement>(null);
  const deafultTextRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLDivElement>(null);
  const { content, color, delay } = props;
  const [overFlow, setOverFlow] = useState(false);

  const handleOverflowChange = useCallback((isoverflow: boolean) => setOverFlow(isoverflow), [
    content,
    color
  ]);

  useLayoutEffect(() => {
    if (overFlow) {
      if (marqueeBoxRef.current?.clientWidth && marqueeTextRef.current?.offsetWidth) {
        if (marqueeBoxRef.current?.clientWidth > marqueeTextRef.current?.offsetWidth) {
          setOverFlow(false);
        }
      }
    }
  }, [browserWidth]);

  return (
    <Container>
      <OverflowDetector onOverflowChange={handleOverflowChange} style={{ width: "95%" }}>
        <MarqueeBox color={color} ref={marqueeBoxRef}>
          {overFlow ? (
            <Space>
              <MarqueeText ref={marqueeTextRef} delay={delay}>
                {content}
              </MarqueeText>
              <MarqueeText2 delay={delay}>{content}</MarqueeText2>
            </Space>
          ) : (
            <DefaultText ref={deafultTextRef}>{content}</DefaultText>
          )}
        </MarqueeBox>
      </OverflowDetector>
    </Container>
  );
};

export default OverFlowTitle;
