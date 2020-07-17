import React, { useState, useEffect } from 'react';
import { string, number, array } from 'prop-types';
import { animated, interpolate } from 'react-spring';
import { Card as AntdCard } from 'antd';
import useWindowSize from '../../hooks/useWindow';

const Card = props => {
  const { i, x, y, rot, scale, trans, bind, data } = props;
  const { pics, name, age, distance, position } = data;
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
          transform: interpolate([rot, scale], trans),
          backgroundImage: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)), url(${pics})`
        }}
      />
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

export default Card;
