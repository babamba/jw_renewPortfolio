import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const List = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  height: 4px;
  border-radius: 4px 4px 0px 0px;
  background: linear-gradient(0.25turn, #e66465, #9198e5);
  /* border: 2px solid #ff008c, #d309e1, #9c1aff, #7700ff, #4400ff; */
`;

const TextPlaceholder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
  border: 2px solid #ff008c, #d309e1, #9c1aff, #7700ff, #4400ff;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItems = ({ i }) => {
  return (
    <List
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconPlaceholder />
      <TextPlaceholder />
    </List>
  );
};

export default MenuItems;
