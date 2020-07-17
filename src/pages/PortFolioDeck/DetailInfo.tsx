import React, { FC, useState, useEffect } from 'react';
import { Typography } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { ContainerStyle, ItemStyle } from '../../interfaces/Motion';

interface Props {
  data: {
    name: string;
    age: string;
    distance: string;
    position: string;
  };
}

const Card: FC<Props> = (props: Props) => {
  const { name, age, distance, position } = props.data;
  const controls = useAnimation();

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div variants={ItemStyle}>
        <Typography.Text
          style={{ fontSize: 30, marginBottom: 14, fontWeight: 600, letterSpacing: -2 }}
        >
          {name}
        </Typography.Text>
      </motion.div>
      <motion.div variants={ItemStyle}>
        <Typography.Text style={{ margin: 0, fontWeight: 300 }}>{age}</Typography.Text>
      </motion.div>
      <motion.div variants={ItemStyle}>
        <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 14 }}>
          {distance}
        </Typography.Text>
      </motion.div>
      <motion.div variants={ItemStyle}>
        <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 14 }}>
          {position}
        </Typography.Text>
      </motion.div>
    </motion.div>
  );
};

export default Card;
