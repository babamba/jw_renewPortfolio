import React, { FunctionComponent, useEffect } from "react";
import { Timeline, Row, Col, Card, Grid } from "antd";
import { pageTransition, pageVariants } from "interfaces/Motion";
import { motion } from "framer-motion";
import HeadMeta from "components/Helmet/HeadMeta";
import { useRouter } from "hooks/useRouter";
import ReactGA from "react-ga";
import resumeData from "core/resumeData";
import ResumeContent from "components/App/Resume/ResumeContent";
import { Resume } from "interfaces/resume";

type Props = {};
const History: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        padding: screens.xl ? "0px" : "20px",
      }}
    >
      <HeadMeta
        title="JW Resume"
        text="JW Resume"
        keywords="FrontEnd Developer React"
        description="JW Resume"
      />
      <Card
        style={{
          padding: "6px 0px",
          borderRadius: 12,
          margin: screens.xs ? 0 : 20,
        }}
        bodyStyle={{ padding: screens.md ? "24px" : "12px" }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Timeline>
              {resumeData.map((item: Resume, idx: number) => {
                return <ResumeContent resumeData={item} key={idx} />;
              })}
            </Timeline>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default History;