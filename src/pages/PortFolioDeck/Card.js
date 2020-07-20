import React, { useState, useEffect } from 'react';
import { string, number } from 'prop-types';
import { animated, to } from 'react-spring';
import useWindowSize from '../../hooks/useWindow';
import CardData from './PortfolioData';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Title = styled.span`
  color: rgba(255, 255, 255, 0.65);
  position: absolute;
  bottom: 10px;
  font-weight: 900;
  letter-spacing: -1.2px;
  line-height: 36px;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Card = props => {
  const { i, x, y, rot, scale, trans, bind, data, history, match } = props;
  const { pics, name, age, distance, position, id } = data;
  //console.log('data : ', data);
  // const { name, age, distance, text, pics } = data;
  const size = useWindowSize();
  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');
  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width < 769) {
        SetIsDeviceSize('mobile');
      } else if (size.width < 1201) {
        SetIsDeviceSize('tablet');
      } else {
        SetIsDeviceSize('desktop');
      }
    }
  }, [size]);

  return (
    <animated.div
      className={isDeviceSize === 'desktop' ? 'card-container-desktop' : 'card-container-mobile'}
      key={i}
      style={{ x, y }}
    >
      <animated.div
        className={isDeviceSize === 'desktop' ? 'card-deck-desktop' : 'card-deck-mobile'}
        {...bind(i)}
        style={{
          transform: to([rot, scale], trans),
          backgroundImage: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)), url(${pics})`
        }}
      >
        <Title
          onClick={() => {
            if (isDeviceSize === 'mobile') history.push(`${match.url}/${id}`);
          }}
        >
          {CardData[i].name}
        </Title>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: string,
  age: number,
  distance: string,
  position: string,
  pics: string
};

export default withRouter(Card);
