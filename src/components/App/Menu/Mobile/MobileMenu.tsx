import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../../../hooks/useDimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./NavigationMenu";
import { useRouter } from "../../../../hooks/useRouter";
import useStores from "../../../../hooks/useStores";

const BackgroundBox = styled(motion.div)`
  background: ${(props) => (props.useDark ? "#1b1d21" : "#FFF")};
  width: 100%;
  height: 100vh;
`;

const NavContainer = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 9;
`;

const MobileMenu: FC = ({}) => {
  const { common } = useStores();
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 95% 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 95% 38px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  console.log("height: ", height);

  return (
    <NavContainer
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <BackgroundBox variants={sidebar} useDark={common.useDark} />
      <Navigation />
    </NavContainer>
  );
};

export default MobileMenu;
