import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Grid } from "antd";
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
  const screens = Grid.useBreakpoint();
  const [{ x }, set] = useSpring(() => ({
    x: 0
  }));

  const getPathVariants = () => {
    console.log('location.pathname.split("/")[0] : ', location.pathname.split("/")[1]);
    switch (location.pathname.split("/")[1]) {
      case "about":
        set({ x: 100 });
        break;
      case "portfolio":
        set({ x: 200 });
        break;
      case "resume":
        set({ x: 300 });
        break;
      case "blog":
        set({ x: 400 });
        break;
      default:
        set({ x: 0 });
        break;
    }
  };

  useEffect(() => {
    getPathVariants();
  }, [location.pathname]);

  return (
    <div style={{ display: screens.xl ? "block" : "none" }}>
      <HeroSvg xmlns="http://www.w3.org/2000/svg">
        <animated.path
          d={x.to({
            range: [0, 100, 200, 300, 400, 500],
            output: [
              "M -47 61 C -64 68 -59 51 -52 79 C -62 89 -72 75 -85 88 C -108 89 -102 106 -62 106 C -32 134 -103 87 -48 140 C -94 139 -10 169 -24 128 C 13 100 -50 114 -16 100 C -4 98 -13 98 -11 86 C -32 36 -16 36 -29 83 C -41 -8 -30 27 -37 53 Z",
              "M 94 -117 C 13 -19 -1 -65 -19 115 C -74 55 -106 14 -85 99 C -113.2067 122.1873 -27 323 1 409 C 44 557 -18 223 68 274 C 183 434 21 131 119 189 C 415 380 28 175 442 187 C 250 135 333 98 565 50 C 313 12 276 -42 333 -122 C 278 -97 44 25 180 -179 Z",
              "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 42 285 C 74 351 114 219 224 277 C 139 160 345 195 251 175 C 123 149 177 90 213 29 C 205 17 171 49 100 60 C 138 22 181 -40 155 -30 C 87 -21 85 34 -3 -42 Z",
              "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 45 447 C 37 322 76 261 99 217 C 147 186 253 229 192 199 C 123 149 177 90 255 79 C 322 63 153 60 182 46 C 225 39 452 -31 323 -16 C 64 1 -66 -102 -3 -42 Z",
              "M 1 -7 C -3 27 -55 17 -52 79 C -39 101 -42 113 -44 134 C -43.2067 157.1873 -30.9661 153.9204 6 163 C 28 173 -44.0318 209.9403 -29 249 C 29 331 54 344 50 320 C 31 230 121 205 108 170 C 52 128 245 76 162 69 C 69 71 197 23 184 4 C 168 -15 114 60 57 -16 Z"
            ]
          })}
          style={{
            fill: x.to({
              range: [0, 100, 200, 300, 400, 500],
              output: [
                "#fdeae7",
                "rgba(178, 166, 255, 1)",
                "rgba(195, 235, 188, 1)",
                useDark ? "rgba(252, 255, 199, 1)" : "rgba(247, 255, 92, 1)",
                useDark ? "rgba(255, 208, 213, 1)" : "rgba(251, 126, 168, 1)"
              ]
            })
          }}
        />
      </HeroSvg>
    </div>
  );
};

export default observer(HeroBackground);
