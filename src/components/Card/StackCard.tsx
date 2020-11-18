import React, { FC } from "react";
import { Col, Typography, Avatar, Badge, Tooltip, Grid } from "antd";
import { ItemStyle } from "interfaces/Motion";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  stackTitle: string;
  imgUrl: string;
  tooltipTitle?: string;
  isUsed: boolean;
}

const StackCard: FC<Props> = (props: Props) => {
  const { stackTitle, imgUrl, tooltipTitle, isUsed } = props;
  const screens = Grid.useBreakpoint();
  const RenderTooltip = text => {
    return <Typography.Text>{text}</Typography.Text>;
  };

  return (
    <Col xs={8} sm={8} md={6} lg={4} xl={4}>
      <StackBox>
        <motion.div variants={ItemStyle}>
          <Tooltip placement="topLeft" title={RenderTooltip(tooltipTitle)}>
            <Avatar
              shape="square"
              size={screens.xs ? 70 : 80}
              src={require("../../assets/images/stack/" + imgUrl)}
            />
          </Tooltip>
          <TitleBox>
            <StackText>
              <Typography.Paragraph
                ellipsis
                style={{
                  fontWeight: 400,
                  letterSpacing: -0.2
                }}
              >
                {isUsed && <Badge status="processing" color="green" />}
                {stackTitle}
              </Typography.Paragraph>
            </StackText>
          </TitleBox>
        </motion.div>
      </StackBox>
    </Col>
  );
};

export default StackCard;
