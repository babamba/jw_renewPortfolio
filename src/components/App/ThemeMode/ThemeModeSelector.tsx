import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "hooks/useStore";
import { useTheme } from "antd-theme";
import { motion } from "framer-motion";
import styled from "styled-components";
import CustomIcon from "components/Common/CustomIcon";

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
  const { useDark, setUseDark } = useStore("common");
  const [{ name, variables }, setTheme] = useTheme();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const body = document.body.classList;
    const mainLayout = document.getElementsByClassName("main-layout")[0].classList;
    if (useDark) {
      mainLayout.remove("light");
      body.remove("light");
      mainLayout.add("dark");
      body.add("dark");
    } else {
      mainLayout.remove("dark");
      body.remove("dark");
      mainLayout.add("light");
      body.add("light");
    }
    init();
  }, [useDark]);

  const init = async () => {
    if (useDark) {
      setTheme({
        name: "dark"
      });
    } else {
      setTheme({
        name: "default"
      });
    }
  };

  const handleChange = async () => {
    if (useDark) {
      await setUseDark(false);
      setTheme({
        name: "default"
      });
    } else {
      await setUseDark(true);
      setTheme({
        name: "dark"
      });
    }
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
        onClick={handleChange}
        style={{
          margin: 0,
          color: useDark ? "#f0d74a" : "#000000",
          fontSize: `${size}rem`,
          cursor: "pointer"
        }}
        type={useDark ? "icon-night" : "icon-brightness"}
      />
    </MotionBox>
  );
};

export default observer(ThemeModeSelector);
