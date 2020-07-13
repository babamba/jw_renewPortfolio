import React, { FunctionComponent } from 'react';

import { Button, Card, Col } from 'antd';

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
};

const CardView: FunctionComponent<Props> = ({ info }) => {
  const cardBGStyles = {
    backgroundSize: 'cover',
    height: 150,
    // background: `linear-gradient(45deg, rgba(89, 89, 89, 0.3) , url(https:${info.heroImage}) no-repeat`,
    // background: `linear-gradient(to right top, rgba(89, 255, 201, 0.5), rgba(95, 253, 169, 0.5), rgba(115, 249, 131, 0.5), rgba(140, 243, 87, 0.5), rgba(168, 235, 18, 0.5)), url(https:${info.heroImage}) no-repeat`,
    background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(https:${info.heroImage}) no-repeat`
  };

  const handleClick = () => {
    // Router.push(getHref(), getNavigationLink(info.slug));
  };

  return (
    <Card onClick={handleClick} hoverable={true} cover={<div style={cardBGStyles} />}>
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
  );
};

export default CardView;
