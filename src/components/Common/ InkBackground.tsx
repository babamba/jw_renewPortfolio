import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useStore } from "hooks/useStore";
import { observer } from "mobx-react-lite";

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
        return "M 84 -50 C 13 -19 -68 -65 -10 218 C -1 255 11 360 33 244 C 57 268 71 276 61 231 C 56 205 116 260 110 234 C 114 209 73 161 144 198 C 253 255 102 114 320 168 C 371 166 225 76 323 68 C 281 17 443 -5 417 -2 C 296 -1 139 13 211 -75 Z";
      case "portfolio":
        return "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 42 285 C 74 351 114 219 224 277 C 139 160 345 195 251 175 C 123 149 177 90 213 29 C 205 17 171 49 100 60 C 138 22 181 -40 155 -30 C 87 -21 85 34 -3 -42 Z";
      case "resume":
        return "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 41 347 C 37 322 76 234 100 216 C 122 196 244 244 186 198 C 119 152 185 85 260 74 C 333 58 154 70 182 46 C 206 17 452 -31 323 -16 C 64 1 -66 -102 -3 -42 Z";
      case "blog":
        return "M 1 -7 C -46 -17 -55 17 -11 355 C 7 464 -17 303 32 342 C 65 367 -9 251 95 305 C 162 331 17 197 118 225 C 204 256 218 196 181 190 C 88 162 211 129 152 122 C 84 120 245 76 162 69 C 115 61 183 34 176 6 C 152 -12 133 4 57 -16 Z";
      default:
        return "M -30 32 C -38 39 -42 68 -43 71 C -37 78 -42 86 -48 93 C -40 98 -50 102 -44 111 C -41 131 -27 127 -22 141 C -8 152 -5 143 -5 124 C -5 117 -6 113 -2 102 C -1 85 0 56 -2 47 C -1 21 -4 30 -12 8 C -15 1 -25 8 -24 19 Z";
    }
  };

  const getPathColor = () => {
    switch (location.pathname.split("/")[1]) {
      case "about":
        return useDark ? "rgba(128, 119, 185, 1)" : "rgba(178, 166, 255, 1)";
      case "portfolio":
        return useDark ? "rgba(218, 139, 147, 1)" : "rgba(251, 126, 168, 1)";
      case "resume":
        return useDark ? "rgba(162, 167, 93, 1)" : "rgba(247, 255, 92, 1)";
      case "blog":
        return useDark ? "rgba(108, 179, 123, 1)" : "rgba(146, 228, 162, 1)";
      default:
        return "#fdeae7";
    }
  };

  const routePathProps = useSpring({
    native: true,
    from: {
      d:
        "M -30 32 C -38 39 -42 68 -43 71 C -37 78 -42 86 -48 93 C -40 98 -50 102 -44 111 C -41 131 -27 127 -22 141 C -8 152 -5 143 -5 124 C -5 117 -6 113 -2 102 C -1 85 0 56 -2 47 C -1 21 -4 30 -12 8 C -15 1 -25 8 -24 19 Z"
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
