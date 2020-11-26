import React, { useLayoutEffect, useState, useEffect, useRef, Suspense, lazy } from "react";
import { observer } from "mobx-react-lite";
import { ThemeProvider } from "antd-theme";
import { Layout, Row, Col, Affix, Grid, BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useWindowHeight } from "@react-hook/window-size";
import ReactGA from "react-ga";
import FolioRoutes from "routes/FolioRoutes";
import LabsRoutes from "routes/LabsRoute";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useStore } from "hooks/useStore";
import { useRouter } from "hooks/useRouter";
import HeroBackground from "components/Common/InkBackground";
import COLOR from "core/colors";
import LazySkeletonLoader from "components/Loader/LazySkeletonLoader";
import LazyIconLoader from "components/Loader/LazyIconLoader";
const MyProfile = lazy(() => import("components/App/Profile/MyProfile"));
const IconMenu = lazy(() => import("components/App/Menu/IconMenu"));
const ContactCard = lazy(() => import("components/Card/ContactCard"));
const Footer = lazy(() => import("components/Common/Footer"));

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
    if (screens.lg) {
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
      setBackColor(COLOR.DARK_BACK_COLOR);
      body.style.backgroundColor = COLOR.DARK_BACK_COLOR;
    } else {
      switch (location.pathname.split("/")[1]) {
        case "about":
          body.style.backgroundColor = COLOR.ABOUT_BACK_COLOR;
          setBackColor(COLOR.ABOUT_BACK_COLOR);
          break;
        case "portfolio":
          body.style.backgroundColor = COLOR.FOLIO_BACK_COLOR;
          setBackColor(COLOR.FOLIO_BACK_COLOR);
          break;
        case "resume":
          body.style.backgroundColor = COLOR.RESUME_BACK_COLOR;
          setBackColor(COLOR.RESUME_BACK_COLOR);
          break;
        case "blog":
          body.style.backgroundColor = COLOR.BLOG_BACK_COLOR;
          setBackColor(COLOR.BLOG_BACK_COLOR);
          break;
        case "contact":
          body.style.backgroundColor = COLOR.CONTACT_BACK_COLOR;
          setBackColor(COLOR.CONTACT_BACK_COLOR);
          break;
        default:
          body.style.backgroundColor = COLOR.DEFAULT_BACK_COLOR;
          setBackColor(COLOR.DEFAULT_BACK_COLOR);
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
                  <Row style={{ height: screens.lg ? "100vh" : "auto" }}>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={8}
                      xl={8}
                      xxl={8}
                      style={{
                        alignSelf: "center",
                        paddingLeft: screens.lg ? 12 : 0
                      }}
                    >
                      <Suspense fallback={<LazySkeletonLoader type="profile" row={2} />}>
                        <MyProfile />
                      </Suspense>
                      <Suspense fallback={<LazySkeletonLoader type="contact" row={10} />}>
                        <ContactCard />
                      </Suspense>
                      <Suspense fallback={<LazySkeletonLoader type="contact" row={1} />}>
                        <Footer />
                      </Suspense>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={1}
                      xl={1}
                      xxl={1}
                      style={{ alignSelf: "center" }}
                    >
                      <Affix
                        onChange={affixed => {
                          if (affixed !== undefined) setAffixed(affixed);
                        }}
                        ref={menuSticky}
                        offsetTop={screens.lg ? 60 : 0}
                        style={{ transition: "background 0.5s ease" }}
                      >
                        <div
                          style={{
                            transition: "background 0.5s ease",
                            background:
                              affixed && screens.lg === false
                                ? useDark
                                  ? COLOR.AFFIX_BACK_COLOR_DARK
                                  : COLOR.AFFIX_BACK_COLOR_LIGHT
                                : "transparent"
                          }}
                        >
                          <Suspense fallback={<LazyIconLoader />}>
                            <IconMenu />
                          </Suspense>
                        </div>
                      </Affix>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                      {/* <Row>
                        <Col span={24}>
                          <TextSwipeMenu />
                        </Col>
                        <Col span={24}> */}
                      <div style={{ position: "relative" }}>
                        <FolioRoutes />
                      </div>
                      {/* </Col>
                      </Row> */}
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
                        backgroundColor: COLOR.PURPLE_POINT_BG,
                        boxShadow: `0px 1px 10px 3px ${COLOR.BTN_LESS_SHADOW}`,
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
