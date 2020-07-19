import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Typography } from "antd";
import { Link } from "react-router-dom";

interface Props {
  toggle: Function;
  item: {
    text: string;
    link: string;
    icon: any;
  };
}

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
`;

const TextPlaceholder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
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

const MenuItems = ({ i, item, toggle }) => {
  const { text, link, icon } = item;
  return (
    <List
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconPlaceholder>{icon} </IconPlaceholder>
      <Link to={link} onClick={() => toggle()}>
        <TextPlaceholder>
          <Typography.Title level={3}>{text}</Typography.Title>
        </TextPlaceholder>
      </Link>
    </List>
  );
};

export default MenuItems;
