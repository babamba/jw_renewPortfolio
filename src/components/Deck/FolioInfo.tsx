import React, { FC } from "react";
import { Skeleton, Typography } from "antd";
import { motion } from "framer-motion";
import { ItemStyle, FastContainerStyle } from "interfaces/Motion";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { useStore } from "hooks/useStore";

const InfoContainer = styled(motion.div)`
  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  animating: Boolean;
  data:
    | {
        id: string;
        name: string;
        age: string;
        distance: string;
        position: string;
        titleDetail: string;
        subDescriptions: any;
        pics: string;
      }
    | undefined;
}

const Card: FC<Props> = (props: Props) => {
  const { useDark } = useStore("common");
  const match = useRouteMatch();
  const { animating } = props;
  const { data } = props;

  return data ? (
    <Link
      to={`${match.url}/${data.id}`}
      style={{
        color: useDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)"
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
              fontSize: 32,
              marginBottom: 14,
              fontWeight: 800,
              letterSpacing: -2.5
            }}
          >
            {data.name}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 20 }}>
            {data.age}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 18 }}>
            {data.distance}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text style={{ margin: 0, fontWeight: 300, fontSize: 14 }}>
            {data.position}
          </Typography.Text>
        </motion.div>
      </InfoContainer>
    </Link>
  ) : (
    <Skeleton active paragraph={{ rows: 2 }} />
  );
};

export default Card;
