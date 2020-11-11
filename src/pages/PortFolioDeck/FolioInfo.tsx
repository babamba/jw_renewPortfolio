import React, { FC, useState, useEffect } from "react";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { ItemStyle, FastContainerStyle } from "interfaces/Motion";
import styled from "styled-components";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { useStore } from "hooks/useStore";

const InfoContainer = styled(motion.div)`
  &:hover {
    text-decoration: underline;
  }
`;

interface Props extends RouteComponentProps {
  animating: Boolean;
  data: {
    id: string;
    name: string;
    age: string;
    distance: string;
    position: string;
    titleDetail: string;
    subDescriptions: any;
    pics: string;
  };
}

const Card: FC<Props> = (props: Props) => {
  const { useDark } = useStore("common");
  const { history, match, animating } = props;
  const { id, name, age, distance, position } = props.data;

  return (
    <Link
      to={`${match.url}/${id}`}
      style={{
        color: useDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)",
      }}
    >
      <InfoContainer
        className="container"
        variants={FastContainerStyle}
        initial="hidden"
        animate={animating ? "visible" : "hidden"}
      >
        <motion.div variants={ItemStyle}>
          <Typography.Text
            style={{
              fontSize: 28,
              marginBottom: 14,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            {name}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 20 }}>
            {age}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 18 }}>
            {distance}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 14 }}>
            {position}
          </Typography.Text>
        </motion.div>
      </InfoContainer>
    </Link>
  );
};

export default withRouter(Card);
