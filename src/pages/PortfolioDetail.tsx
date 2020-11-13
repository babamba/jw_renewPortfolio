import React, { FC, useEffect, useState } from "react";
import { Card, Typography, Grid, Divider, PageHeader } from "antd";
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
import PortfolioData from "../core/folioData";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ContentBox = styled.div`
  padding: 12px;
`;

const FolioContainer = styled.div`
  margin: 40px;
  padding: 0px 20px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    margin: 0px;
  }
`;

const FolioInTitleContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 16px;
`;

const FolioTitle = styled.span`
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -1.2px;
  font-weight: 600;
  font-size: 1.6rem;
`;

const FolioImageBox = styled.div`
  position: relative;
`;

const FolioDate = styled.span`
  letter-spacing: -1.2px;
  font-weight: 300;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
`;

const StackText = styled.h4`
  font-weight: 600;
  font-size: 22px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 18px;
  }
`;

const SubscriptionText = styled(Typography.Text)`
  line-height: 32px;
  font-weight: 300;
  font-size: 16px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
const TextContentBox = styled.div`
  padding: 0px 12px;
`;

const ProductLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

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
  stack: string;
  pics: string;
  link: string;
};

const PortfolioDetail: FC<RouteComponentProps<MatchParams>> = ({
  history,
  match,
}) => {
  const [folio, setFolio] = useState<State | undefined>(undefined);
  const screens = Grid.useBreakpoint();
  const cardBGStyles = {
    height: "40vh",
    borderRadius: 12,
    background: `linear-gradient(45deg,  rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)) , url(${
      folio ? require("../assets/images/folio/" + folio.pics) : "empty"
    }) no-repeat center center/cover`,
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(location.pathname + location.search);
    }
    findPortFolio();
  }, []);

  const findPortFolio = () => {
    const find: any = PortfolioData.find((item) => item.id === match.params.id);
    setFolio(find);
  };

  const renderDescText = (data, index) => (
    <div key={index}>
      <SubscriptionText>- {data}</SubscriptionText>
      <br />
    </div>
  );

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
      <FolioContainer>
        <HeadMeta
          title={`Portfolio | ${folio ? folio.id : "empty"}`}
          text={`Portfolio | ${folio ? folio.id : "empty"}`}
          keywords={`Portfolio | ${folio ? folio.id : "empty"}`}
          description={`Portfolio | ${folio ? folio.id : "empty"}`}
        />

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
            borderRadius: 12,
            border: 0,
          }}
        >
          <motion.div
            className="container"
            variants={ContainerStyle}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ textAlign: "left", marginBottom: 20, borderRadius: 12 }}
          >
            <ContentBox>
              <FolioImageBox>
                <div style={cardBGStyles}>
                  <FolioInTitleContainer>
                    <motion.div variants={ItemLeftStyle}>
                      <FolioTitle>{folio && folio.titleDetail}</FolioTitle>
                    </motion.div>
                    <motion.div variants={ItemLeftStyle}>
                      <FolioDate>{folio && folio.age}</FolioDate>
                    </motion.div>
                  </FolioInTitleContainer>
                </div>
              </FolioImageBox>
              <Divider />
              {/* <img src={folio && folio.pics} /> */}
              <TextContentBox>
                <motion.div variants={ItemLeftStyle}>
                  <StackText>{folio && folio.stack}</StackText>
                </motion.div>

                <br />
                <motion.div variants={ItemLeftStyle}>
                  {folio !== undefined && folio.link !== "" && (
                    <ProductLink href={folio.link} target="_blank">
                      실제서비스 URL{" "}
                    </ProductLink>
                  )}
                </motion.div>

                <motion.div variants={ItemLeftStyle}>
                  {folio !== undefined &&
                    folio.subDescriptions.map((item, index) => {
                      return renderDescText(item, index);
                    })}
                </motion.div>
                {/* {renderDescText(folio !== undefined && folio.subDescriptions)} */}
              </TextContentBox>
            </ContentBox>
          </motion.div>
        </Card>
      </FolioContainer>
    </motion.div>
  );
};

export default withRouter(PortfolioDetail);
