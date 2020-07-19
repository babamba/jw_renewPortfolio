import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import useStores from "../../../../hooks/useStores";

const ToggleButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: relative;
  float: right;
  z-index: 3;
  top: 18px;
  right: 2.5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.useDark ? "hsl(75, 0%, 75%)" : "hsl(0, 0%, 18%)"}
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => {
  const { common } = useStores();
  return (
    <ToggleButton onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          useDark={common.useDark}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          useDark={common.useDark}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          useDark={common.useDark}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </ToggleButton>
  );
};

export default MenuToggle;
