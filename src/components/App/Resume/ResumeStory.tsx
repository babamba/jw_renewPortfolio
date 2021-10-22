import { motion } from "framer-motion";
import styled from "styled-components";
import { ItemStyle } from "@interfaces/Motion";
import { Badge, Typography, Divider, Grid } from "antd";
import { ToolOutlined } from "@ant-design/icons";
import { Story } from "@interfaces/resume";
import { Fragment } from "react";

const { Text, Link } = Typography;
const JobMainText = styled(Typography.Title)`
  font-weight: 800;
  letter-spacing: -0.4px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 1.4em;
  }
`;

const JobText = styled(Typography.Paragraph)`
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

interface Props {
  story: Story;
}

const ResumeStory = (props: Props) => {
  const { story } = props;
  const screens = Grid.useBreakpoint();

  return (
    <>
      <motion.div variants={ItemStyle}>
        <JobMainText level={4}>
          <StatusBadge status={story.type === "process" ? "processing" : "success"} />
          {story.title}
        </JobMainText>
        <JobText>
          {story.isDeveloperPosition && (
            <>
              {story.link && (
                <>
                  <Link href={story.link} target="_blank">
                    - 실제 서비스 or Demo
                  </Link>
                  <br />
                </>
              )}
              <ToolOutlined style={{ paddingRight: 8, fontSize: 14 }} />

              <Text strong>
                개발언어 :{" "}
                <Text strong code>
                  {story.programLanguage}
                </Text>
              </Text>
              <br />
            </>
          )}
          {story.desc.map((item, idx) => (
            <Fragment key={idx}>
              <Text>- {item}</Text> <br />
              {screens.xs === true && <Divider />}
            </Fragment>
          ))}
          {/* {story.desc.map((item, idx) => generateText(idx, item.type, item.title))} */}
        </JobText>
      </motion.div>
    </>
  );
};

export default ResumeStory;
