import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { ThemeProvider } from "antd-theme";
import { Layout, Row, Col, Affix, Grid, BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useWindowHeight } from "@react-hook/window-size";
import ReactGA from "react-ga";

import FolioRoutes from "routes/FolioRoutes";
import LabsRoutes from "routes/LabsRoute";

import IconMenu from "../App/Menu/IconMenu";
import MyProfile from "./Profile/MyProfile";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useStore } from "hooks/useStore";
import { useRouter } from "hooks/useRouter";
import ContactCard from "components/Card/ContactCard";
import HeroBackground from "components/Common/HeroBackground";

const App = () => {
  const menuSticky = useRef(null);
  const onlyHeight = useWindowHeight();
  const controls = useAnimation();
  const screens = Grid.useBreakpoint();
  const { useLabPage, useDark, checkMode } = useStore("common");
  const [backColor, setBackColor] = useState("");
  const [affixed, setAffixed] = useState(false);
  const router = useRouter();
  const initialTheme = {
    name: "default",
    variables: {}
  };

  useLayoutEffect(() => {
    checkMode();
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
    if (!useDark) getPathVariants();
  }, [router.location.pathname]);

  useEffect(() => {
    if (screens.xl) {
      if (router.location.pathname === "/contact") {
        router.history.push("/about");
      }
    }
  }, [screens]);

  useEffect(() => {
    if (useLabPage) {
      controls.start(() => ({
        opacity: [0, 1],
        scale: [1, 0.98, 0.97, 0.98, 1]
      }));
    }
  }, [useLabPage]);

  const [theme, setInitialTheme] = useState(initialTheme);
  const handleDarkmode = value => setInitialTheme(value);

  useEffect(() => {
    getPathVariants();
  }, [useDark]);

  const getPathVariants = () => {
    console.log('location.pathname.split("/")[0] : ', location.pathname.split("/")[1]);
    const body = document.body;
    if (useDark) {
      setBackColor("#24272b");
      body.style.backgroundColor = "#24272b";
    } else {
      switch (location.pathname.split("/")[1]) {
        case "about":
          body.style.backgroundColor = "rgba(245, 240, 255, 1)";
          setBackColor("rgba(245, 240, 255, 1)");
          // set({ x: 200 });
          break;
        case "portfolio":
          body.style.backgroundColor = "rgba(249, 251, 236, 1)";
          setBackColor("rgba(232, 255, 244, 1)");
          // set({ x: 100 });
          break;
        case "resume":
          body.style.backgroundColor = "rgba(229, 241, 243, 1)";
          setBackColor("rgba(229, 241, 243, 1)");
          // set({ x: 300 });
          break;
        case "blog":
          body.style.backgroundColor = "rgba(255, 234, 196, 1)";
          setBackColor("rgba(255, 234, 196, 1)");
          // set({ x: 400 });
          break;
        case "contact":
          body.style.backgroundColor = "rgba(245, 227, 229, 1)";
          setBackColor("rgba(245, 227, 229, 1)");
          // set({ x: 400 });
          break;
        default:
          // set({ x: 0 });
          break;
      }
    }
  };

  return (
    <ThemeProvider theme={theme} onChange={value => handleDarkmode(value)}>
      <AnimatePresence>
        <Layout
          style={{ transition: "background 0.5s", backgroundColor: backColor }}
          className={`${useDark ? "dark" : "light"} auth main-layout`}
        >
          <Layout.Content style={{ minHeight: screens.md ? onlyHeight : "100vh !important" }}>
            <motion.div animate={controls}>
              {useLabPage ? (
                <div style={{ position: "relative" }}>
                  <LabsRoutes />
                </div>
              ) : (
                <Layout.Content>
                  <HeroBackground />
                  <Row style={{ height: screens.xl ? "100vh" : "auto" }}>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={8}
                      xxl={8}
                      style={{
                        alignSelf: "center",
                        paddingLeft: screens.xl ? 12 : 0
                      }}
                    >
                      <MyProfile />
                      <ContactCard />
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={1}
                      xxl={1}
                      style={{ alignSelf: "center" }}
                    >
                      <Affix
                        onChange={affixed => {
                          if (affixed !== undefined) setAffixed(affixed);
                        }}
                        ref={menuSticky}
                        offsetTop={screens.xl ? 60 : 0}
                        style={{ transition: "background 0.5s ease" }}
                      >
                        <div
                          style={{
                            transition: "background 0.5s ease",
                            background:
                              affixed && screens.xl === false
                                ? useDark
                                  ? "rgba(255, 255, 255, 0.15)"
                                  : "rgba(0, 0, 0, 0.15)"
                                : "transparent"
                          }}
                        >
                          <IconMenu />
                        </div>
                      </Affix>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={15} xxl={15}>
                      <div style={{ position: "relative" }}>
                        <FolioRoutes />
                      </div>
                    </Col>
                  </Row>

                  <BackTop visibilityHeight={400} style={{ bottom: 30, right: 30 }}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        height: 40,
                        width: 40,
                        lineHeight: "40px",
                        borderRadius: 4,
                        backgroundColor: "rgba(152, 44, 255, 0.4)",
                        color: "#fff",
                        textAlign: "center",
                        fontSize: 14
                      }}
                    >
                      <ArrowUpOutlined />
                    </motion.div>
                  </BackTop>
                </Layout.Content>
              )}
            </motion.div>
          </Layout.Content>
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default observer(App);
