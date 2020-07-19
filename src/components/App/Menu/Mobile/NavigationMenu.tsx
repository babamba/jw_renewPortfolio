import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";
import {
  ReadOutlined,
  PictureOutlined,
  IdcardOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

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

const Navigation = ({ toggle }) => {
  const item = [
    {
      text: "About",
      link: "/about",
      icon: <IdcardOutlined />,
    },
    {
      text: "Blog",
      link: "/Blog",
      icon: <IdcardOutlined />,
    },
    {
      text: "Portfolio",
      link: "/portfolio",
      icon: <IdcardOutlined />,
    },
    {
      text: "Resume",
      link: "/resume",
      icon: <IdcardOutlined />,
    },
    {
      text: "Contact",
      link: "/contact",
      icon: <IdcardOutlined />,
    },
  ];

  const itemIds = [0, 1, 2, 3, 4];
  return (
    <ListBox variants={variants}>
      {item.map((item, i) => (
        <MenuItems i={i} key={i} item={item} toggle={toggle} />
      ))}
    </ListBox>
  );
};

export default Navigation;
