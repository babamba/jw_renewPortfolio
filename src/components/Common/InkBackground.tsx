import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import COLOR from "@core/colors";
import { useAppSelector } from "@store/useAppStore";
import { useRef, useEffect } from "react";

const HeroSvg = styled(animated.svg)`
  position: fixed;
  height: 100%;
  width: 100%;
  transform-origin: 0px 0px;
  transition: background 2s ease-in-out;
`;

const BackGround = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: transparent;
  /* transition: background 2s ease-in-out; */
`;

interface Props {
  backStyle: string;
}

const HeroBackground = (props: Props) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { backStyle } = props;
  const location = useLocation();
  const { useDark } = useAppSelector(state => state.appStore);

  useEffect(() => {
    console.log("backStyle : ", backStyle);
    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.style.background = backStyle;
    }
  }, [backStyle]);

  const getPath = () => {
    switch (location.pathname.split("/")[1]) {
      case "about":
        return COLOR.ABOUT_INK_SVG_PATH;
      case "portfolio":
        return COLOR.FOLIO_INK_SVG_PATH;
      case "resume":
        return COLOR.RESUME_INK_SVG_PATH;
      case "blog":
        return COLOR.BLOG_INK_SVG_PATH;
      default:
        return COLOR.DEFAULT_INK_SVG_PATH;
    }
  };

  const getPathColor = () => {
    switch (location.pathname.split("/")[1]) {
      case "about":
        return useDark ? COLOR.ABOUT_INK_BACK_COLOR_DARK : COLOR.ABOUT_INK_BACK_COLOR_LIGHT;
      case "portfolio":
        return useDark ? COLOR.FOLIO_INK_BACK_COLOR_DARK : COLOR.FOLIO_INK_BACK_COLOR_LIGHT;
      case "resume":
        return useDark ? COLOR.RESUME_INK_BACK_COLOR_DARK : COLOR.RESUME_INK_BACK_COLOR_LIGHT;
      case "blog":
        return useDark ? COLOR.BLOG_INK_BACK_COLOR_DARK : COLOR.BLOG_INK_BACK_COLOR_LIGHT;
      default:
        return COLOR.DEFAULT_INK_BACK_COLOR;
    }
  };

  const routePathProps = useSpring({
    native: true,
    delay: 300,
    from: {
      d: COLOR.DEFAULT_INK_SVG_PATH
    },
    to: {
      d: getPath(),
      fill: getPathColor()
    }
  });

  return (
    <BackGround ref={backgroundRef}>
      <HeroSvg xmlns="http://www.w3.org/2000/svg">
        <animated.path {...routePathProps} />
      </HeroSvg>
    </BackGround>
  );
};

export default HeroBackground;
