import React, { FunctionComponent, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import useWindowSize from '../../hooks/useWindow';

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

  const cardBGStyles = {
    backgroundSize: 'cover',
    height: isDeviceSize === 'desktop' ? 150 : 100,
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
                  WebkitLineClamp: isDeviceSize === 'desktop' ? 5 : 3,
                  WebkitBoxOrient: 'vertical',
                  minHeight: isDeviceSize === 'desktop' ? 114 : 70
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
