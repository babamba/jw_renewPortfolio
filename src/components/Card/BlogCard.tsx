import { useRouteMatch, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Grid, Typography } from "antd";
import COLOR from "@core/colors";
import { useAppSelector } from "@store/useAppStore";

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

const BlogCard = (props: Props) => {
  const { info } = props;
  const match = useRouteMatch();
  const { useDark } = useAppSelector(state => state.appStore);

  const screens = Grid.useBreakpoint();
  const cardBGStyles = {
    backgroundSize: "cover",
    height: screens.lg ? 150 : 100,
    borderRadius: 12,
    background: `linear-gradient(45deg,  ${COLOR.DECKCARD_GRADIENT_START}, ${COLOR.DECKCARD_GRADIENT_END}) , url(https:${info.heroImage}) no-repeat`
  };

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const hoverframeVariants = {
    hover: { scale: 0.98 }
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
          className="blog-card-container"
          hoverable={true}
          cover={<div style={cardBGStyles} />}
          bodyStyle={{
            padding: "8px 24px 14px"
          }}
          style={{
            // borderRadius: 8,
            // boxShadow: `0 1px 12px 4px ${COLOR.BTN_LESS_SHADOW}`
            border: "none",
            borderRadius: 12,
            background: useDark ? "rgba(36, 36, 36, 1)" : "rgba(240, 240, 240, 1)",
            boxShadow: useDark
              ? "rgb(29, 29, 29) 5px 10px 10px, rgb(50, 50, 50) -3px -2px 7px"
              : "rgb(210, 210, 210) 10px 10px 15px, rgb(255, 255, 255) -5px -5px 7px"
          }}
        >
          <Card.Meta
            title={info.title}
            description={
              <Typography.Paragraph
                ellipsis={{ rows: 4, expandable: false }}
                style={{
                  overflow: "hidden !important",
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                  display: "-webkit-box",
                  WebkitLineClamp: screens.lg ? 5 : 3,
                  WebkitBoxOrient: "vertical",
                  minHeight: screens.lg ? 114 : 70
                }}
              >
                {info.description}
              </Typography.Paragraph>
            }
          />
        </Card>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
