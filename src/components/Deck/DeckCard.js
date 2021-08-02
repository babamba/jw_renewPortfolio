import { Grid, Typography } from "antd";
import { string, number } from "prop-types";
import { animated, to } from "react-spring";
import CardData from "@core/folioData";
import styled from "styled-components";
import { useHistory, useRouteMatch } from "react-router-dom";
import COLOR from "@core/colors";

const Title = styled(Typography.Text)`
  color: rgba(255, 255, 255, 0.85) !important;
  position: absolute;
  bottom: 10px;
  font-weight: 900;
  letter-spacing: -1.2px;
  line-height: 36px;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Card = props => {
  const history = useHistory();
  const match = useRouteMatch();
  const screens = Grid.useBreakpoint();
  const { i, x, y, rot, scale, trans, bind, data } = props;
  const { pics, name, age, distance, position, id } = data;

  return (
    <animated.div
      className={screens.xl ? "card-container-desktop" : "card-container-mobile"}
      key={i}
      style={{ x, y }}
    >
      <animated.div
        className={screens.xl ? "card-deck-desktop" : "card-deck-mobile"}
        {...bind(i)}
        style={{
          cursor: "pointer",
          transform: to([rot, scale], trans),
          backgroundImage: `linear-gradient(45deg, ${COLOR.DECKCARD_GRADIENT_START}, ${
            COLOR.DECKCARD_GRADIENT_END
            // }), url(${require(`../../assets/images/folio/` + pics)})`
          }), url(${process.env.PUBLIC_URL}/folio/${pics})`
        }}
      >
        <Title onClick={() => history.push(`${match.url}/${id}`)}>{CardData[i].name}</Title>
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

export default Card;
