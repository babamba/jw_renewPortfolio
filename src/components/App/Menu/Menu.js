import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Typography, Card } from 'antd';
import { Link, withRouter, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindow';
import styled, { keyframes } from 'styled-components';
import useStores from '../../../hooks/useStores';
import Deck from './Deck';

const MenuList = props => {
  const {
    common: { useDark }
  } = useStores();

  return (
    <div className="deck-area">
      <Deck />
    </div>
  );
};

export default withRouter(MenuList);
