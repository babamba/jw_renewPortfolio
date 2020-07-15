import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps, Route, Link } from 'react-router-dom';
import { Button, Card, Col } from 'antd';
import { motion, useMotionValue } from 'framer-motion';

interface Props extends RouteComponentProps {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
}

const BlogCard: FunctionComponent<Props> = ({ info, history, match }) => {
  const cardBGStyles = {
    backgroundSize: 'cover',
    height: 150,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    background: `linear-gradient(45deg,  rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)) , url(https:${info.heroImage}) no-repeat`
    // background: `linear-gradient(45deg, rgba(89, 89, 89, 0.3) , url(https:${info.heroImage}) no-repeat`,
    // background: `linear-gradient(to right top, rgba(89, 255, 201, 0.5), rgba(95, 253, 169, 0.5), rgba(115, 249, 131, 0.5), rgba(140, 243, 87, 0.5), rgba(168, 235, 18, 0.5)), url(https:${info.heroImage}) no-repeat`,
    // background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(https:${info.heroImage}) no-repeat`
  };

  const handleClick = (e, info) => {
    // e.preventDefault();
    console.log('info : ', info);
    history.push(`${match.url}/${info.id}`);
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
        <Card hoverable={true} cover={<div style={cardBGStyles} />} style={{ borderRadius: 12 }}>
          <Card.Meta
            title={info.title}
            description={
              <span
                style={{
                  overflow: 'hidden !important',
                  textOverflow: 'ellipsis',
                  wordWrap: 'break-word',
                  display: '-webkit-box',
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: 'vertical',
                  minHeight: 114
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

export default withRouter(BlogCard);
