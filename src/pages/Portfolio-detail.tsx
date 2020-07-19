import React, { FC, useEffect, useState } from "react";
import { Card, Typography, Badge, Divider, PageHeader } from "antd";
import styled from "styled-components";
import {
  pageTransition,
  pageVariants,
  ContainerStyle,
  ItemLeftStyle,
} from "../interfaces/Motion";
import { motion } from "framer-motion";
import HeadMeta from "../components/Helmet/HeadMeta";
import ReactGA from "react-ga";
import useWindowSize from "../hooks/useWindow";
import PortfolioData from "./PortFolioDeck/PortfolioData";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ContentBox = styled.div`
  padding: 12px;
`;

const Container = styled.div`
  padding: 0px 12px;
`;

type Props = {};
interface MatchParams {
  id: string;
}
type State = {
  id: string;
  name: string;
  age: string;
  distance: string;
  position: string;
  titleDetail: string;
  subDescriptions: any;
  pics: string;
};

const PortfolioDetail: FC<RouteComponentProps<MatchParams>> = ({
  history,
  match,
}) => {
  const size = useWindowSize();
  const [folio, setFolio] = useState<State | undefined>(undefined);
  const cardBGStyles = {
    backgroundSize: "cover",
    height: 300,
    borderRadius: 12,
    background: `linear-gradient(45deg,  rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)) , url(${
      folio ? folio.pics : "empty"
    }) no-repeat center top`,
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(location.pathname + location.search);
    }
    findPortFolio();
  }, []);

  const findPortFolio = () => {
    const find: any = PortfolioData.find((item) => {
      return item.id === match.params.id;
    });
    console.log("find data : ", find);
    setFolio(find);
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      <Container>
        <HeadMeta text={`Portfolio | ${folio ? folio.id : "empty"}`} />
        <motion.button
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.99 }}
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <PageHeader
            onBack={() => console.log("")}
            className="site-page-header"
            title="이전 페이지"
            style={{ background: "transparent", padding: "12px 0px" }}
            // subTitle="이전 페이지"
          />
        </motion.button>
        <Card
          style={{
            textAlign: "center",
          }}
        >
          <motion.div
            className="container"
            variants={ContainerStyle}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ textAlign: "left" }}
          >
            <ContentBox>
              <div style={cardBGStyles} />
              <Divider />
              {/* <img src={folio && folio.pics} /> */}
              <motion.div variants={ItemLeftStyle}>
                <Typography.Text style={{ fontWeight: 500 }}>
                  {folio && folio.titleDetail}
                </Typography.Text>
              </motion.div>
              <br />
              {folio &&
                folio.subDescriptions.map((item, index) => {
                  return (
                    <motion.div key={index} variants={ItemLeftStyle}>
                      <Typography.Text style={{ fontWeight: 300 }}>
                        {" "}
                        - {item}
                      </Typography.Text>
                      <br />
                    </motion.div>
                  );
                })}
            </ContentBox>
          </motion.div>
        </Card>
      </Container>
    </motion.div>
  );
};

export default withRouter(PortfolioDetail);
