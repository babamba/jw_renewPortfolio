import React, { FC } from 'react';

import { pageTransition, pageVariants, FastContainerStyle, ItemStyle } from '../interfaces/Motion';
import { motion } from 'framer-motion';

import { Typography } from 'antd';

const LabMain: FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography.Title level={1}>Test ArtWorks Page CommingSoon..</Typography.Title>
    </div>
  );
};

export default LabMain;
