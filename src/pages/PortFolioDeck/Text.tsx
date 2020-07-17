import React, { FC, useEffect } from 'react';
import { Typography } from 'antd';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  text: string;
}

const Text: FC<Props> = (props: Props) => {
  const control = useAnimation();
  const { text } = props;

  useEffect(() => {
    control.start(() => ({
      opacity: [1, 0.5, 0, 0.5, 1]
    }));
  }, [text]);
  return <Typography.Text>{text}</Typography.Text>;
};

export default Text;
