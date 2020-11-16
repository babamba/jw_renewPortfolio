import React, { useEffect, useState, useRef } from "react";
import ReactGA from "react-ga";

import { ForwardOutlined, RetweetOutlined } from "@ant-design/icons";
import { Grid, Progress, Row, Col, Tooltip, Space } from "antd";
import { motion, useAnimation } from "framer-motion";

import { pageOpacityVariants, pageOpacityTransition } from "interfaces/Motion";
import PortfolioData from "core/folioData";
import { useRouter } from "hooks/useRouter";
import { useStore } from "hooks/useStore";
import useMount from "hooks/useMount";

import DeckList from "components/Deck/DeckList";
import HeadMeta from "components/Helmet/HeadMeta";
import DetailInfo from "components/Deck/FolioInfo";

interface DeckRefObject {
  getNext: () => void;
  getRedeck: () => void;
}

interface InfoData {
  id: string;
  name: string;
  age: string;
  distance: string;
  position: string;
  titleDetail: string;
  subDescriptions: any;
  pics: string;
}

const DeckFolio = () => {
  const { useDark } = useStore("common");
  const screens = Grid.useBreakpoint();
  const isMount = useMount();
  const router = useRouter();
  const deckRef = useRef<DeckRefObject>(null);
  const controls = useAnimation();
  const [animating, setAnimating] = useState(false);
  const [currentIdx, SetCurrentIdx] = useState(PortfolioData.length - 1);
  const [prevIdx, setPrevIdx] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const [InfoData, setInfoData] = useState<InfoData | undefined>(undefined);

  const updatePercentage = () => {
    setTimeout(() => {
      if (isMount.current) setProgressBar(progressBar + 1);
    }, 80);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) {
      updatePercentage();
    } else if (progressBar >= 100) {
      gestureTrigger();
      setTimeout(() => setProgressBar(0), 0);
    }
  }, [progressBar]);

  const callbackRef = (idx: number) => {
    setPrevIdx(currentIdx);
    if (idx > 0) SetCurrentIdx(idx - 1);
    else SetCurrentIdx(PortfolioData.length - 1);
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

  const closeAction = () => setAnimating(false);
  const openAction = () => setAnimating(true);
  const gestureTrigger = () => deckRef.current?.getNext();
  const ReDeckTrigger = () => deckRef.current?.getRedeck();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageOpacityVariants}
      transition={pageOpacityTransition}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <HeadMeta
        title="JW Project PortFolio"
        text="JW Project PortFolio"
        keywords="FrontEnd Developer React Project"
        description="Project PortFolio"
      />
      <Row
        align="middle"
        justify="start"
        style={{
          overflowX: screens.xl ? "inherit" : "hidden",
          padding: screens.sm ? "20px 10%" : "20px 20px 0px",
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
            <DeckList
              ref={deckRef}
              callbackRef={callbackRef}
              currentIdx={currentIdx}
            />
          </div>
        </Col>
        <Col
          span={24}
          style={{
            padding: screens.xxl ? "10px 12%" : "10px",
          }}
        >
          <Space align="center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <ForwardOutlined
                style={{ fontSize: 14 }}
                onClick={() => gestureTrigger()}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <RetweetOutlined
                style={{ fontSize: 14 }}
                onClick={() => ReDeckTrigger()}
              />
            </motion.div>

            <span>0{PortfolioData.length - currentIdx}</span>

            <Progress
              style={{
                borderRadius: 0,
              }}
              percent={progressBar}
              showInfo={false}
              steps={30}
              size="small"
              strokeWidth={10}
              strokeLinecap="square"
              strokeColor={
                useDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)"
              }
            />

            <span>0{PortfolioData.length}</span>

            {/* {screens.xl && (
              <span style={{ paddingRight: 12 }}>Swipe Left and Right</span>
            )}

            <div>
              <Tooltip placement="topLeft" title={"You Can Try Swipe To Card"}>
                <img
                  style={{
                    width: screens.xl ? 18 : 12,
                    height: screens.xl ? 18 : 12,
                  }}
                  src={require("../assets/images/swipe-light.png")}
                />
              </Tooltip>
            </div> */}
          </Space>
          {/* <Row justify="start" style={{ paddingBottom: 10 }}>
            <Col span={1} onClick={() => gestureTrigger()}>
              <ForwardOutlined style={{ fontSize: 18 }} />
            </Col>
            <Col span={1} onClick={() => ReDeckTrigger()}>
              <RetweetOutlined style={{ fontSize: 18 }} />
            </Col>

            <Col span={1} style={{ textAlign: "center" }}>
              <span>0{PortfolioData.length - currentIdx}</span>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Progress
                style={{
                  borderRadius: 0,
                }}
                percent={progressBar}
                showInfo={false}
                steps={20}
                size="small"
                strokeWidth={10}
                strokeLinecap="square"
                strokeColor={
                  useDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)"
                }
              />
            </Col>
            <Col span={1} style={{ textAlign: "center" }}>
              <span>0{PortfolioData.length}</span>
            </Col>

            <Col offset={1} span={screens.xl ? 8 : 2}>
              {screens.xl && (
                <span style={{ paddingRight: 12 }}>Swipe Left and Right</span>
              )}

              <Tooltip placement="topLeft" title={"You Can Try Swipe To Card"}>
                <img
                  style={{
                    width: screens.xl ? 18 : 12,
                    height: screens.xl ? 18 : 12,
                  }}
                  src={require("../assets/images/swipe-light.png")}
                />
              </Tooltip>
            </Col>
          </Row> */}
          <Row justify="start">
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

export default DeckFolio;
