import React, { FC } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ItemStyle } from "interfaces/Motion";
import { Badge, Typography, Divider, Grid } from "antd";
import { ToolOutlined } from "@ant-design/icons";
import { Story } from "interfaces/resume";

const { Text, Link } = Typography;
const JobMainText = styled.h4`
  font-weight: 800;
  letter-spacing: -0.4px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 1.4em;
  }
`;

const JobText = styled.p`
  padding-left: 12px;
  font-weight: 300;
  font-size: 15px;
  line-height: 2.2;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    line-height: 2;
  }
`;

const StatusBadge = styled(Badge)`
  position: relative;
  top: -3px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    top: 0px;
  }
`;

const CustomDivider = styled(Divider)`
  margin: 12px 0px;
`;

interface Props {
  story: Story;
}

const ResumeStory: FC<Props> = (props: Props) => {
  const { story } = props;
  const screens = Grid.useBreakpoint();
  const generateText = (idx: number, type: "normal" | "strong" | "link", title: string) => {
    switch (type) {
      case "normal":
        return (
          <React.Fragment key={idx}>
            <Text>- {title}</Text> <br />
            {/* {screens.xs === true && <Divider />} */}
          </React.Fragment>
        );
      case "strong":
        return (
          <React.Fragment key={idx}>
            <Text>- {title}</Text> <br />
          </React.Fragment>
        );
      case "link":
        return (
          <React.Fragment key={idx}>
            -{" "}
            <Link href={title} target="_blank">
              실제 서비스
            </Link>
            <br />
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment key={idx}>
            <Text>- {title}</Text> <br />
          </React.Fragment>
        );
    }
  };

  return (
    <>
      <motion.div variants={ItemStyle}>
        <JobMainText>
          <StatusBadge status={story.type === "process" ? "processing" : "success"} />
          {story.title}
        </JobMainText>
        <JobText>
          {story.isDeveloperPosition && (
            <>
              - <ToolOutlined style={{ paddingRight: 8, fontSize: 14 }} />
              <Text strong>
                개발언어 :{" "}
                <Text underline strong code>
                  {story.programLanguage}
                </Text>
              </Text>
              <br />
            </>
          )}

          {story.subDescriptions.map((item, idx) => generateText(idx, item.type, item.title))}
        </JobText>
      </motion.div>
    </>
  );
};

export default ResumeStory;
