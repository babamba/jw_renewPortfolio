import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Avatar, Badge, Grid } from "antd";
import { Stack } from "interfaces/stack";

const TitleBox = styled.div`
  display: block;
  padding-top: 16px;
`;

const StackBox = styled.div`
  text-align: center;
  height: 140px;
`;

const StackText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;

interface Props {
  stack: Stack;
}

const StackAvatar: FC<Props> = (props: Props) => {
  const { stack } = props;
  const screens = Grid.useBreakpoint();

  return (
    <StackBox>
      <Avatar
        alt={`stack-img-${stack.stackTitle}`}
        shape="square"
        size={screens.xs ? 70 : 80}
        src={process.env.REACT_APP_STRAPI_URL + stack.imgUrl.url}
      />

      <TitleBox>
        <StackText>
          <Typography.Paragraph
            ellipsis
            style={{
              fontWeight: 400,
              letterSpacing: -0.2
            }}
          >
            {stack.isUsed && <Badge status="processing" color="green" />}
            {stack.stackTitle}
          </Typography.Paragraph>
        </StackText>
      </TitleBox>
    </StackBox>
  );
};

export default StackAvatar;
