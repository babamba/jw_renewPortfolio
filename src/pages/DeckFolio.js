import React, { useEffect, useState, useRef } from "react";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Deck from "./PortFolioDeck/Deck";
import { motion, useAnimation } from "framer-motion";
import {
  pageOpacityVariants,
  pageOpacityTransition,
} from "../interfaces/Motion";
import PortfolioData from "../core/folioData";
import DetailInfo from "./PortFolioDeck/FolioInfo";
import { ForwardOutlined, RetweetOutlined } from "@ant-design/icons";
import { Grid, Progress, Row, Col, Tooltip } from "antd";
import ReactGA from "react-ga";
import { useStore } from "hooks/useStore";
import useMount from "../hooks/useMount";
import HeadMeta from "../components/Helmet/HeadMeta";
import { useRouter } from "../hooks/useRouter";

const DeckFolio = (props) => {
  const { useDark } = useStore("common");
  const screens = Grid.useBreakpoint();
  const isMount = useMount();
  const router = useRouter();
  const DeckRef = useRef();
  const controls = useAnimation();
  const [animating, setAnimating] = useState(false);
  const [currentIdx, SetCurrentIdx] = useState(PortfolioData.length - 1);
  const [prevIdx, setPrevIdx] = useState(0);

  const [progressBar, setProgressBar] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const [InfoData, setInfoData] = useState({});

  const updatePercentage = () => {
    setTimeout(() => {
      if (isMount.current) setProgressBar(progressBar + 1);
    }, 80);
  };

  useEffect(() => {
    window.dispatchEvent(new Event("scroll"));
  }, []);

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) {
      updatePercentage();
    } else if (progressBar >= 100) {
      gestureTrigger();
      setTimeout(() => {
        setProgressBar(0);
      }, 0);
    }
  }, [progressBar]);

  const callback = (idx) => {
    setPrevIdx(currentIdx);
    if (idx > 0) {
      SetCurrentIdx(idx - 1);
    } else SetCurrentIdx(PortfolioData.length - 1);
  };

  const gestureTrigger = () => {
    DeckRef.current.getNext();
  };

  const ReDeckTrigger = () => {
    DeckRef.current.getRedeck();
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    openAction();
  }, []);

  useEffect(() => {
    if (prevIdx === 0 && currentIdx === PortfolioData.length - 1) {
      closeAction();
      setTimeout(() => {
        if (isMount.current) {
          setInfoData(PortfolioData[currentIdx]);
          openAction();
        }
      }, 1000);
    }

    if (prevIdx !== currentIdx) {
      closeAction();
      setTimeout(() => {
        if (isMount.current) {
          setInfoData(PortfolioData[currentIdx]);
          openAction();
        }
      }, 600);
    }
  }, [currentIdx]);

  const closeAction = () => {
    setAnimating(false);
  };

  const openAction = () => {
    setAnimating(true);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageOpacityVariants}
      transition={pageOpacityTransition}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      // style={pageStyle}
    >
      <HeadMeta
        title="JW Project PortFolio"
        text="JW Project PortFolio"
        keywords="FrontEnd Developer React Project"
        description="Project PortFolio"
      />
      <Row
        align="middle"
        justify={screens.xl ? "start" : "center"}
        style={{
          overflowX: screens.xl ? "inherit" : "hidden",
          padding: screens.md ? "20px 80px" : "20px 20px 0px",
        }}
      >
        <Col span={24}>
          <div
            style={{
              position: "relative",
              alignItems: "center",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              height: screens.xl ? "75vh" : "60vh",
            }}
          >
            <Deck ref={DeckRef} callback={callback} currentIdx={currentIdx} />
          </div>
        </Col>
        <Col
          span={24}
          style={{
            padding: screens.xxl ? "10px 12%" : "10px",
          }}
        >
          <Row
            justify={screens.xl ? "start" : "center"}
            style={{ paddingBottom: 10 }}
          >
            <Col span={screens.xl ? 1 : 2} onClick={() => gestureTrigger()}>
              <ForwardOutlined style={{ fontSize: 18 }} />
            </Col>
            <Col span={screens.xl ? 1 : 2} onClick={() => ReDeckTrigger()}>
              <RetweetOutlined style={{ fontSize: 18 }} />
            </Col>

            <Col span={screens.xl ? 1 : 2} style={{ textAlign: "center" }}>
              <span>0{PortfolioData.length - currentIdx}</span>
            </Col>
            <Col span={screens.xl ? 2 : 6}>
              <Progress
                style={{
                  borderRadius: 0,
                }}
                percent={progressBar}
                showInfo={false}
                strokeLinecap="square"
                strokeColor={
                  useDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)"
                }
              />
            </Col>
            <Col span={screens.xl ? 1 : 2} style={{ textAlign: "center" }}>
              <span>0{PortfolioData.length}</span>
            </Col>

            <Col offset={1} span={screens.xl ? 8 : 2}>
              {screens.xl && (
                <span style={{ paddingRight: 12 }}>Swipe Left and Right</span>
              )}

              <Tooltip placement="topLeft" title={"You Can Try Swipe To Card"}>
                <img
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  src={require("../assets/images/swipe-light.png")}
                />
              </Tooltip>
            </Col>
          </Row>
          <Row justify={screens.xl ? "center" : "start"}>
            <Col span={24}>
              <motion.div animate={controls}>
                <DetailInfo data={InfoData} animating={animating} />
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </div>
      </div> */}
    </motion.div>
  );
};

export default withRouter(DeckFolio);
