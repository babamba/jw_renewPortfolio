import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { Link, withRouter, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';

import useWindowSize from '../../../hooks/useWindow';
import styled, { keyframes } from 'styled-components';
import useStores from '../../../hooks/useStores';

import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../hooks/useDimensions';
// import MenuToggle from './MenuToggle';
import { Navigation } from './Navigation';

interface Props extends RouteComponentProps<any> {}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};
const Container = styled.div`
  position: relative;
  z-index: 999;
`;

const Menu: FunctionComponent<Props> = (props: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );

  const MenuToggle = ({ toggle }) => (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        />
      </svg>
    </button>
  );

  return (
    <motion.nav
      className="navigation-menu-nav"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="navigation-menu-background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default withRouter(Menu);
