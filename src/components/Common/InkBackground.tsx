import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useStore } from "hooks/useStore";
import { observer } from "mobx-react-lite";
import COLOR from "core/colors";

const HeroSvg = styled(animated.svg)`
  position: fixed;
  height: 100%;
  width: 100%;
  transform-origin: 0px 0px;
`;

const HeroBackground = () => {
  const { useDark } = useStore("common");
  const location = useLocation();

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
    <div>
      <HeroSvg xmlns="http://www.w3.org/2000/svg">
        <animated.path {...routePathProps} />
      </HeroSvg>
    </div>
  );
};

export default observer(HeroBackground);
