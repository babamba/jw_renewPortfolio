import { useEffect, useState, useRef } from "react";
import ReactGA from "react-ga";

import { ForwardOutlined, RetweetOutlined } from "@ant-design/icons";
import { Grid, Progress, Row, Col, Space, Typography } from "antd";
import { motion, useAnimation } from "framer-motion";

import { pageVariants, pageTransition } from "@interfaces/Motion";
import PortfolioData from "@core/folioData";
import { useRouter } from "@hooks/useRouter";
import useMount from "@hooks/useMount";

import DeckList from "@components/Deck/DeckList";
import HeadMeta from "@components/Helmet/HeadMeta";
import DetailInfo from "@components/Deck/FolioInfo";
import COLOR from "@core/colors";
import { useAppSelector } from "@store/useAppStore";

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
  detail?: {
    pic: string;
    comment: string;
  }[];
}

const DeckFolio = () => {
  const { useDark } = useAppSelector(state => state.appStore);
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
      if (isMount.current) {
        gestureTrigger();
        setTimeout(() => setProgressBar(0), 0);
      }
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

  const transition = { duration: 0.2 };
  const hoverframeVariants = {
    hover: { scale: 1.2 }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <HeadMeta
        title="JW Project PortFolio"
        text="JW Project PortFolio"
        keywords="FrontEnd Developer React Project"
        description="Project PortFolio"
        url="portfolio"
      />
      <Row
        align="middle"
        justify="start"
        style={{
          overflowX: screens.lg ? "inherit" : "hidden",
          padding: screens.sm ? "20px 10%" : "20px 20px 0px"
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
              height: screens.xl ? "75vh" : screens.lg ? "65vh" : "55vh"
            }}
          >
            <DeckList ref={deckRef} callbackRef={callbackRef} currentIdx={currentIdx} />
          </div>
        </Col>
        <Col
          span={24}
          style={{
            padding: screens.xxl ? "10px 12%" : "10px"
          }}
        >
          <Space align="center" style={{ paddingBottom: 12 }}>
            <motion.div
              className="frame"
              whileHover="hover"
              variants={hoverframeVariants}
              transition={transition}
              style={{ paddingRight: 8, cursor: "pointer" }}
              onClick={() => gestureTrigger()}
            >
              <ForwardOutlined style={{ fontSize: 14 }} />
            </motion.div>
            <motion.div
              className="frame"
              whileHover="hover"
              variants={hoverframeVariants}
              transition={transition}
              style={{ paddingRight: 8, cursor: "pointer" }}
              onClick={() => ReDeckTrigger()}
            >
              <RetweetOutlined style={{ fontSize: 14 }} />
            </motion.div>

            <span>0{PortfolioData.length - currentIdx}</span>

            <Progress
              style={{
                borderRadius: 0
              }}
              percent={progressBar}
              showInfo={false}
              steps={30}
              size="small"
              strokeWidth={10}
              strokeLinecap="square"
              strokeColor={useDark ? COLOR.DECK_PROGRESS_DARK : COLOR.DECK_PROGRESS_LIGHT}
            />

            <Typography.Text>0{PortfolioData.length}</Typography.Text>
          </Space>
          <Row justify="start">
            <Col span={24}>
              <motion.div animate={controls}>
                <DetailInfo data={InfoData} animating={animating} />
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default DeckFolio;
