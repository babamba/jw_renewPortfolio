import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";

const ListBox = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  const itemIds = [0, 1, 2, 3, 4];
  return (
    <ListBox variants={variants}>
      {itemIds.map((i) => (
        <MenuItems i={i} key={i} />
      ))}
    </ListBox>
  );
};

export default Navigation;
