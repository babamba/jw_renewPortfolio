import { FC, useEffect, useState } from "react";
import { Card, Typography, Grid, Divider, PageHeader, Space, Col, Row, Modal } from "antd";
import { ForwardOutlined, BackwardOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { pageTransition, pageVariants, ContainerStyle, ItemLeftStyle } from "@interfaces/Motion";
import { motion } from "framer-motion";
import HeadMeta from "@components/Helmet/HeadMeta";
import ReactGA from "react-ga";
import PortfolioData from "@core/folioData";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useAppSelector } from "@store/useAppStore";
import COLOR from "@core/colors";
import FolioDetailPics from "@components/Card/FolioDetailPics";
import { FolioItem } from "@interfaces/folio";

const ContentBox = styled.div``;
const FolioContainer = styled.div`
  padding: 20px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    padding: 0px;
  }
`;

const FolioInTitleContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 16px;
  margin-left: 10px;
`;

const FolioTitle = styled(Typography.Text)`
  font-family: "NEXON Lv2 Gothic Bold";
  color: rgba(255, 255, 255, 1) !important;
  letter-spacing: -1.2px;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: underline;
  text-underline-position: under;
`;

const FolioImageBox = styled.div`
  position: relative;
`;

const FolioDate = styled(Typography.Text)`
  letter-spacing: -1.2px;
  font-weight: 300;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85) !important;
`;

const StackText = styled(Typography.Title)`
  font-weight: 800;
  font-size: 18px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 18px;
  }
`;

const SubscriptionText = styled(Typography.Text)`
  /* line-height: 32px; */
  line-height: 2.2;
  font-weight: 300;
  font-size: 16px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
const TextContentBox = styled.div`
  padding: 0px 18px;
`;

const ProductLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

interface MatchParams {
  id: string;
}

const PortfolioDetail: FC<RouteComponentProps<MatchParams>> = ({ history, match }) => {
  const { useDark } = useAppSelector(state => state.appStore);
  const [folio, setFolio] = useState<FolioItem | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const screens = Grid.useBreakpoint();
  const cardBGStyles = {
    height: "40vh",
    borderRadius: 12,
    background: `linear-gradient(45deg,  ${COLOR.DECKCARD_GRADIENT_START},${
      COLOR.DECKCARD_GRADIENT_END
    }) , url(${
      folio ? `${process.env.PUBLIC_URL}/folio/${folio.pics}` : "empty"
    }) no-repeat center center/cover`
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(location.pathname + location.search);
    }
    findPortFolio();
  }, []);

  const findPortFolio = () => {
    const find: any = PortfolioData.find(item => item.id === match.params.id);
    setFolio(find);
  };

  const goNextFolio = () => {
    console.log("next!");

    if (folio) {
      const findIdx = PortfolioData.findIndex(item => item.id === folio.id);

      if (findIdx !== -1 && findIdx > 0) {
        history.push(`/portfolio/${PortfolioData[findIdx - 1].id}`);
      } else {
        history.push(`/portfolio/${PortfolioData[PortfolioData.length - 1].id}`);
      }
      console.log("findIdx : ", findIdx);
    }
  };

  const goPrevFolio = () => {
    console.log("prev!");
    if (folio) {
      const findIdx = PortfolioData.findIndex(item => item.id === folio.id);
      console.log("findIdx: ", findIdx);
      console.log("PortfolioData.length : ", PortfolioData.length);
      if (findIdx !== -1 && findIdx < PortfolioData.length - 1) {
        history.push(`/portfolio/${PortfolioData[findIdx + 1].id}`);
      } else {
        history.push(`/portfolio/${PortfolioData[1].id}`);
      }
    }
  };

  const renderDescText = (data, index) => (
    <div key={index}>
      <SubscriptionText>- {data}</SubscriptionText>
      <br />
    </div>
  );

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  const transition = { duration: 0.2 };
  const hoverframeVariants = {
    hover: { scale: 1.3 }
  };

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
      <FolioContainer>
        <HeadMeta
          title={`Portfolio | ${folio ? folio.id : "empty"}`}
          text={`Portfolio | ${folio ? folio.id : "empty"}`}
          keywords={`Portfolio | ${folio ? folio.id : "empty"}`}
          description={`Portfolio | ${folio ? folio.id : "empty"}`}
          url={`portfolio/${folio ? folio.id : ""}`}
        />
        <Row
          align="middle"
          style={{
            padding: "0px 20px",
            height: 60
          }}
        >
          <Col span={12} style={{ textAlign: "left" }}>
            <motion.button
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.99 }}
              onClick={e => {
                e.preventDefault();
                history.push("/portfolio");
              }}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer"
              }}
            >
              <PageHeader
                onBack={() => history.push("/portfolio")}
                className="site-page-header"
                title="메인 화면"
                style={{ background: "transparent", padding: "12px 0px" }}
              />
            </motion.button>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Space align="center">
              <motion.div
                className="frame"
                whileHover="hover"
                variants={hoverframeVariants}
                transition={transition}
                style={{ padding: 8, cursor: "pointer" }}
                onClick={() => goPrevFolio()}
              >
                <BackwardOutlined />
              </motion.div>
              <Divider type="vertical" />
              <motion.div
                className="frame"
                whileHover="hover"
                variants={hoverframeVariants}
                transition={transition}
                style={{ padding: 8, cursor: "pointer" }}
                onClick={() => goNextFolio()}
              >
                <ForwardOutlined />
              </motion.div>
            </Space>
          </Col>
        </Row>

        <Card
          className="glass"
          style={{
            textAlign: "center",
            borderRadius: 12,
            border: 0,
            transition: "box-shadow .3s",
            boxShadow: useDark ? "none" : `0px 0px 20px 1px ${COLOR.FOLIO_CARD_SHADOW}`
          }}
          bodyStyle={{
            padding: 12
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
                  <StackText level={4}>{folio && folio.stack}</StackText>
                </motion.div>

                <br />
                <motion.div variants={ItemLeftStyle}>
                  {folio !== undefined && folio.detail && (
                    <>
                      <Typography.Link underline onClick={showModal}>
                        프로젝트 상세보기
                      </Typography.Link>
                      <Typography.Text underline onClick={showModal}></Typography.Text>
                      <Modal
                        // title="Basic Modal"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                        width="65%"
                        destroyOnClose={true}
                        bodyStyle={{
                          padding: "50px 20px 30px",
                          minHeight: 500,
                          maxHeight: 800
                        }}
                      >
                        <FolioDetailPics folio={folio} />
                      </Modal>
                    </>
                  )}
                </motion.div>
                <br />
                <motion.div variants={ItemLeftStyle}>
                  {folio !== undefined && folio.link !== "" && (
                    <ProductLink href={folio.link} target="_blank">
                      실제서비스 Or Demo URL{" "}
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
