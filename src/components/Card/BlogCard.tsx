import React, { FC } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Grid } from "antd";

interface Props {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
}

const BlogCard: FC<Props> = (props: Props) => {
  const { info } = props;
  const match = useRouteMatch();
  const screens = Grid.useBreakpoint();
  const cardBGStyles = {
    backgroundSize: "cover",
    height: screens.xl ? 150 : 100,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    background: `linear-gradient(45deg,  rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)) , url(https:${info.heroImage}) no-repeat`,
  };

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const hoverframeVariants = {
    hover: { scale: 0.98 },
  };

  return (
    <Link to={`${match.url}/${info.id}`}>
      <motion.div
        className="frame"
        whileHover="hover"
        variants={hoverframeVariants}
        transition={transition}
      >
        <Card
          hoverable={true}
          cover={<div style={cardBGStyles} />}
          style={{ borderRadius: 12 }}
        >
          <Card.Meta
            title={info.title}
            description={
              <span
                style={{
                  overflow: "hidden !important",
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                  display: "-webkit-box",
                  WebkitLineClamp: screens.xl ? 5 : 3,
                  WebkitBoxOrient: "vertical",
                  minHeight: screens.xl ? 114 : 70,
                }}
              >
                {info.description}
              </span>
            }
          />
        </Card>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
