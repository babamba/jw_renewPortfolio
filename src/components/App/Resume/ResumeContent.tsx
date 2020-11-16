import React, { FC } from "react";
import {
  Grid,
  Timeline,
  Typography,
  Badge,
  Avatar,
  Card,
  Row,
  Col,
  Tag,
  Divider,
} from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FastContainerStyle, ItemStyle } from "interfaces/Motion";
import ResumeStory from "./ResumeStory";
import { Resume } from "interfaces/resume";

const { Text } = Typography;
const PositionText = styled.span`
  font-weight: 300;
`;
const CustomDivider = styled(Divider)`
  margin: 12px 0px;
`;
const ProjectBox = styled.div`
  padding: 2em 0.5em;
  padding-bottom: 0px;
`;
const HeadDiv = styled.div`
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
const TimeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

const ContentBox = styled.div`
  padding: 8px 8px 0px;
  @media only screen and (min-width: 100px) and (max-width: 1199px) {
    padding: 8px 0px;
  }
`;
const DescBox = styled.div`
  padding-left: 12px;
`;
const CompanyText = styled.span`
  padding-right: 4px;
  font-weight: 400;
  font-size: 1.3em;
`;

interface Props {
  resumeData: Resume;
}

const ResumeContent: FC<Props> = (props: Props) => {
  const { resumeData } = props;
  const screens = Grid.useBreakpoint();

  return (
    <Timeline.Item color="green">
      <Card
        style={{ borderRadius: 12 }}
        bodyStyle={{
          padding: screens.md ? 24 : 18,
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <TimeText>{resumeData.period}</TimeText>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{ textAlign: "right" }}
          >
            <Tag
              color={
                resumeData.tag.type === "process" ? "processing" : "magenta"
              }
              style={{
                margin: 0,
                fontWeight: 300,
                borderRadius: 8,
                padding: "2px 6px",
                background: "transparent",
              }}
            >
              {resumeData.tag.text}
            </Tag>
          </Col>
        </Row>

        <ContentBox>
          <motion.div
            className="container"
            variants={FastContainerStyle}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <HeadDiv>
              <motion.div variants={ItemStyle}>
                <Avatar
                  shape="circle"
                  size={50}
                  src={require("../../../assets/images/company/" +
                    resumeData.companyImg)}
                />
              </motion.div>

              <DescBox>
                <motion.div variants={ItemStyle}>
                  <CompanyText>{resumeData.companyName}</CompanyText>
                </motion.div>
                <motion.div variants={ItemStyle}>
                  {resumeData.usedRank && (
                    <>
                      <Text strong>직책 :</Text>
                      <PositionText>{resumeData.rank}</PositionText>
                    </>
                  )}

                  {screens.xl == false && <br />}
                  {resumeData.usedRank &&
                    resumeData.usedPosition &&
                    screens.xl && (
                      <Divider style={{ borderWidth: 3 }} type="vertical" />
                    )}

                  {resumeData.usedPosition && (
                    <>
                      <Text strong>포지션 :</Text>
                      <PositionText>{resumeData.position}</PositionText>
                    </>
                  )}
                </motion.div>
              </DescBox>
            </HeadDiv>
            <Row>
              <Col span={24}>
                <ProjectBox>
                  {resumeData.resumeStory.map((item, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <ResumeStory story={item} />
                        {resumeData.resumeStory.length - 1 !== idx && (
                          <CustomDivider />
                        )}
                      </React.Fragment>
                    );
                  })}
                </ProjectBox>
              </Col>
            </Row>
          </motion.div>
        </ContentBox>
      </Card>
    </Timeline.Item>
  );
};

export default ResumeContent;
