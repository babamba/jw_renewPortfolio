import React, { useEffect, useState, useRef } from "react";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Deck from "./PortFolioDeck/Deck";
import { motion, useAnimation } from "framer-motion";
import {
  pageOpacityVariants,
  pageOpacityTransition,
} from "../interfaces/Motion";
import PortfolioData from "./PortFolioDeck/PortfolioData";
import DetailInfo from "./PortFolioDeck/FolioInfo";
import { ForwardOutlined, RetweetOutlined } from "@ant-design/icons";
import { Progress, Row, Col, Tooltip } from "antd";
import ReactGA from "react-ga";
import { useStore } from "hooks/useStore";
import useMount from "../hooks/useMount";
import HeadMeta from "../components/Helmet/HeadMeta";
import { useRouter } from "../hooks/useRouter";
import { useWindowWidth } from "@react-hook/window-size";

const DeckFolio = (props) => {
  const onlyWidth = useWindowWidth({ wait: 700 });
  const { useDark } = useStore("common");
  const isMount = useMount();
  const router = useRouter();
  const DeckRef = useRef();
  const controls = useAnimation();
  const [animating, setAnimating] = useState(false);
  const [isDeviceSize, SetIsDeviceSize] = useState("desktop");
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
    if (onlyWidth !== undefined) {
      if (onlyWidth < 769) {
        SetIsDeviceSize("mobile");
      } else if (onlyWidth < 1201) {
        SetIsDeviceSize("tablet");
      } else {
        SetIsDeviceSize("desktop");
      }
    }
  }, [onlyWidth]);

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
      {/* <div className={isDeviceSize === 'desktop' ? 'deck-area-desktop' : 'deck-area-mobile'}>
        <div
          style={{
            position: isDeviceSize === 'desktop' ? 'relative' : 'relative',
            textAlign: 'left',
            padding: isDeviceSize === 'desktop' ? '10px 10%' : 0,
            top: isDeviceSize === 'desktop' ? '70%' : '0',
            width: '100%'
          }}
        > */}
      <Row
        align="middle"
        justify={isDeviceSize === "desktop" ? "start" : "center"}
        style={{
          overflowX: isDeviceSize === "desktop" ? "inherit" : "hidden",
          padding: isDeviceSize === "mobile" ? "20px 20px 0px" : "20px 80px",
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
              height:
                isDeviceSize === "desktop"
                  ? "75vh"
                  : onlyWidth > 473
                  ? "55vh"
                  : "45vh",
              // minHeight: isDeviceSize === 'mobile' ? 600 :750
            }}
          >
            <Deck ref={DeckRef} callback={callback} currentIdx={currentIdx} />
          </div>
        </Col>
        <Col
          span={24}
          style={{
            padding: isDeviceSize === "mobile" ? "10px" : "10px 12%",
          }}
        >
          <Row
            justify={isDeviceSize === "desktop" ? "start" : "center"}
            style={{ paddingBottom: 10 }}
          >
            <Col
              span={isDeviceSize === "mobile" ? 2 : 1}
              onClick={() => gestureTrigger()}
            >
              <ForwardOutlined style={{ fontSize: 18 }} />
            </Col>
            <Col
              span={isDeviceSize === "mobile" ? 2 : 1}
              onClick={() => ReDeckTrigger()}
            >
              <RetweetOutlined style={{ fontSize: 18 }} />
            </Col>

            <Col
              span={isDeviceSize === "mobile" ? 2 : 1}
              style={{ textAlign: "center" }}
            >
              <span>0{PortfolioData.length - currentIdx}</span>
            </Col>
            <Col span={isDeviceSize === "mobile" ? 6 : 2}>
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
            <Col
              span={isDeviceSize === "mobile" ? 2 : 1}
              style={{ textAlign: "center" }}
            >
              <span>0{PortfolioData.length}</span>
            </Col>

            <Col offset={1} span={isDeviceSize === "mobile" ? 2 : 8}>
              {isDeviceSize !== "mobile" && (
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
          <Row justify={isDeviceSize === "desktop" ? "center" : "start"}>
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
