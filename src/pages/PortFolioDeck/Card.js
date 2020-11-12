import React, { useState, useEffect } from "react";
import { Grid } from "antd";
import { string, number } from "prop-types";
import { animated, to } from "react-spring";
import CardData from "../../core/folioData";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Title = styled.span`
  color: rgba(255, 255, 255, 0.85);
  position: absolute;
  bottom: 10px;
  font-weight: 900;
  letter-spacing: -1.2px;
  line-height: 36px;
  font-size: 1.2rem;
  &:hover {
    text-decoration: ${(props) => (props.isMobile ? "underline" : "none")};
  }
`;

const Card = (props) => {
  const screens = Grid.useBreakpoint();
  const { i, x, y, rot, scale, trans, bind, data, history, match } = props;
  const { pics, name, age, distance, position, id } = data;

  return (
    <animated.div
      className={
        screens.xl ? "card-container-desktop" : "card-container-mobile"
      }
      key={i}
      style={{ x, y }}
    >
      <animated.div
        className={screens.xl ? "card-deck-desktop" : "card-deck-mobile"}
        {...bind(i)}
        style={{
          cursor: "pointer",
          transform: to([rot, scale], trans),
          backgroundImage: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)), url(${require(`../../assets/images/folio/` +
            pics)})`,
        }}
      >
        <Title
          isMobile={screens.xs ? true : false}
          onClick={() => {
            if (screens.xs) history.push(`${match.url}/${id}`);
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
  pics: string,
};

export default withRouter(Card);
