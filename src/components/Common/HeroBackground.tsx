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
              "M 84 -50 C 13 -19 -68 -65 -10 218 C -1 255 11 360 33 244 C 57 268 71 276 61 231 C 56 205 116 260 110 234 C 114 209 73 161 144 198 C 253 255 102 114 320 168 C 371 166 225 76 323 68 C 281 17 443 -5 417 -2 C 296 -1 139 13 211 -75 Z",
              "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 42 285 C 74 351 114 219 224 277 C 139 160 345 195 251 175 C 123 149 177 90 213 29 C 205 17 171 49 100 60 C 138 22 181 -40 155 -30 C 87 -21 85 34 -3 -42 Z",
              "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 41 347 C 37 322 76 234 100 216 C 122 196 244 244 186 198 C 119 152 185 85 260 74 C 333 58 154 70 182 46 C 206 17 452 -31 323 -16 C 64 1 -66 -102 -3 -42 Z",
              "M 1 -7 C -46 -17 -55 17 -11 355 C 7 464 -17 303 43 356 C 140 445 -9 251 95 305 C 162 331 17 197 118 225 C 204 256 218 196 181 190 C 88 162 211 129 152 122 C 84 120 245 76 162 69 C 115 61 183 34 176 6 C 152 -12 133 4 57 -16 Z"
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
