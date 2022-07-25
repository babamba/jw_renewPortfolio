import { useEffect } from "react";
import { Timeline, Row, Col, Card, Grid } from "antd";
import { motion } from "framer-motion";
import ReactGA from "react-ga";
import { useRouter } from "@hooks/useRouter";
import { pageTransition, pageVariants } from "@interfaces/Motion";

import HeadMeta from "@components/Helmet/HeadMeta";
import ResumeContent from "@components/App/Resume/ResumeContent";
import { useAppSelector } from "@store/useAppStore";
import COLOR from "@core/colors";
const History = () => {
  const router = useRouter();
  const screens = Grid.useBreakpoint();
  const { useDark } = useAppSelector(state => state.appStore);

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
        height: "100%",
        padding: screens.lg ? "0px" : "20px"
      }}
    >
      <HeadMeta
        title="JW Resume"
        text="JW Resume"
        keywords="FrontEnd Developer React"
        description="JW Resume"
        url="resume"
      />
      <Card
        className="glass"
        style={{
          padding: "6px 0px",
          borderRadius: 12,
          margin: screens.xs ? 0 : 20,
          transition: "box-shadow .3s",
          boxShadow: useDark ? "none" : `0px 0px 20px 1px ${COLOR.RESUME_CARD_SHADOW}`
        }}
        bodyStyle={{ padding: screens.md ? "24px" : "12px" }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Timeline>
              <ResumeContent />
            </Timeline>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default History;
