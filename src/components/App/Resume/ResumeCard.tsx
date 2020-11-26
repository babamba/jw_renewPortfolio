import React, { FC } from "react";
import { Grid, Timeline, Typography, Avatar, Card, Divider, Badge } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ContainerStyle, ItemStyle } from "interfaces/Motion";
import COLOR from "core/colors";
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
  padding: 2em 0em;
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
  padding: 8px 0px;
`;
const DescBox = styled.div`
  padding-left: 12px;
`;
const CompanyText = styled.span`
  padding-right: 4px;
  font-weight: 600;
  font-size: 1.3em;
  font-family: "NEXON Lv2 Gothic Bold";
`;

interface Props {
  resumeData: Resume;
}

const ResumeCard: FC<Props> = (props: Props) => {
  const { resumeData } = props;
  const screens = Grid.useBreakpoint();

  return (
    <Timeline.Item color="green">
      <Badge.Ribbon
        style={{ lineHeight: "20px", marginTop: 8 }}
        text={
          <Typography.Text style={{ fontSize: 12, color: COLOR.RIBBON_TEXT_COLOR }}>
            {resumeData.statusText}
          </Typography.Text>
        }
        color={resumeData.statusType === "process" ? "processing" : "magenta"}
      >
        <Card
          style={{ borderRadius: 12 }}
          bodyStyle={{
            padding: screens.md ? "14px 18px" : 18
          }}
        >
          <TimeText>{resumeData.period}</TimeText>
          <ContentBox>
            <motion.div
              className="container"
              variants={ContainerStyle}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <HeadDiv>
                <motion.div variants={ItemStyle}>
                  <Avatar
                    shape="circle"
                    size={44}
                    src={process.env.REACT_APP_STRAPI_URL + resumeData.companyImg.url}
                  />
                </motion.div>

                <DescBox>
                  <motion.div variants={ItemStyle}>
                    <CompanyText>{resumeData.companyName}</CompanyText>
                  </motion.div>
                  <motion.div variants={ItemStyle}>
                    {resumeData.usedRank && (
                      <>
                        <Text strong>직책 : </Text>
                        <PositionText>{resumeData.rank}</PositionText>
                      </>
                    )}

                    {screens.md == false && <br />}
                    {resumeData.usedRank && resumeData.usedPosition && screens.md && (
                      <Divider style={{ borderWidth: 3 }} type="vertical" />
                    )}

                    {resumeData.usedPosition && (
                      <>
                        <Text strong>포지션 : </Text>
                        <PositionText>{resumeData.position}</PositionText>
                      </>
                    )}
                  </motion.div>
                </DescBox>
              </HeadDiv>
              <ProjectBox>
                {resumeData.resume_stories.map((item, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <ResumeStory story={item} />
                      {resumeData.resume_stories.length - 1 !== idx && <CustomDivider />}
                    </React.Fragment>
                  );
                })}
              </ProjectBox>
            </motion.div>
          </ContentBox>
        </Card>
      </Badge.Ribbon>
    </Timeline.Item>
  );
};

export default ResumeCard;
