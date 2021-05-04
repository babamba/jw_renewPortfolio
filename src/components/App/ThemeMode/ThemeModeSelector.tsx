import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "hooks/useStore";
import { motion } from "framer-motion";
import styled from "styled-components";
import CustomIcon from "components/Common/CustomIcon";
import COLOR from "core/colors";
import { setColorTheme } from "utils/common.util";

const MotionBox = styled(motion.div)`
  display: flex;
  flex: initial;
  justify-content: center;
  align-items: center;
`;

interface Props {
  size: number;
}
const ThemeModeSelector: FC<Props> = (props: Props) => {
  const { size } = props;
  const { useDark, setUseDark } = useStore("app");

  useEffect(() => {
    console.log("useDark : ", useDark);
    setUseDark(useDark);
    setColorTheme(useDark);
  }, [useDark]);

  const toggleTheme = () => {
    console.log("onChange : ");
    console.log("toggleTheme !");

    setUseDark(!useDark);
    setColorTheme(!useDark);
  };

  const spring = {
    type: "spring",
    bounceDamping: 0,
    bounceStiffness: 0
  };

  const RotateVariants = {
    open: { rotateZ: [90, 0], transition: { spring } },
    closed: { rotateZ: [0, 90], transition: { spring } }
  };

  return (
    <MotionBox animate={useDark ? "open" : "closed"} variants={RotateVariants}>
      <CustomIcon
        onClick={() => toggleTheme()}
        style={{
          margin: 0,
          color: useDark ? COLOR.BTN_THEME_DARK : COLOR.BTN_THEME_LIGTH,
          fontSize: `${size}rem`,
          cursor: "pointer"
        }}
        type={useDark ? "icon-night" : "icon-brightness"}
      />
    </MotionBox>
  );
};

export default observer(ThemeModeSelector);
