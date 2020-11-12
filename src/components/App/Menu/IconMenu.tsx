import React, { FunctionComponent, useEffect, useState } from "react";
import { Grid, Row, Col } from "antd";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import {
  ReadOutlined,
  PictureOutlined,
  IdcardOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { ContainerStyle, ItemStyle } from "../../../interfaces/Motion";
import { motion } from "framer-motion";
import ThemeModeSelector from "../ThemeMode/ThemeModeSelector";
import { useStore } from "hooks/useStore";

interface Props extends RouteComponentProps<any> {}
const IconMenu: FunctionComponent<Props> = (props: Props) => {
  const screens = Grid.useBreakpoint();
  const { useDark } = useStore("common");
  const [selected, setSelected] = useState("/");
  const { history, match } = props;

  useEffect(() => {
    console.log("test : ", location.pathname);
    const pathname = location.pathname.split("/");
    setSelected(pathname[1]);
  }, [match]);

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Row
        justify="center"
        align="middle"
        gutter={[0, 32]}
        style={{
          paddingTop: 30,
          paddingLeft: 8,
          marginTop: screens.xxl ? "-180px" : "-28px",
        }}
      >
        <Col span={24} style={{ textAlign: "center", paddingBottom: 6 }}>
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={2.3} />
          </motion.div>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <motion.div variants={ItemStyle}>
            <Link to="/about" />
            <IdcardOutlined
              style={{
                color:
                  (selected === "about" || selected === "") && useDark
                    ? "rgba(255, 255, 255, 0.95) !important"
                    : "rgba(0, 0, 0, 0.95) !important",
                fontSize: selected === "about" || selected === "" ? 24 : 20,
                background:
                  selected === "about" || selected === ""
                    ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 50%, transparent 30%)"
                    : "transparent",
                padding: selected === "about" || selected === "" ? 8 : 0,
                transition: "0.8s",
              }}
              onClick={() => history.push("/about")}
            />
          </motion.div>
        </Col>

        <Col span={24} style={{ textAlign: "center" }}>
          <motion.div variants={ItemStyle}>
            <Link to="/portfolio" />
            <PictureOutlined
              style={{
                color:
                  selected === "portfolio" && useDark
                    ? "rgba(255, 255, 255, 0.95) !important"
                    : "rgba(0, 0, 0, 0.95) !important",
                fontSize: selected === "portfolio" ? 24 : 20,
                background:
                  selected === "portfolio"
                    ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 50%, transparent 30%)"
                    : "transparent",
                padding: selected === "portfolio" ? 8 : 0,
                transition: "0.8s",
              }}
              onClick={() => history.push("/portfolio")}
            />
          </motion.div>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <motion.div variants={ItemStyle}>
            <Link to="/resume" />
            <ReadOutlined
              style={{
                color:
                  selected === "resume" && useDark
                    ? "rgba(255, 255, 255, 0.95) !important"
                    : "rgba(0, 0, 0, 0.95) !important",
                fontSize: selected === "resume" ? 24 : 20,
                background:
                  selected === "resume"
                    ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 50%, transparent 30%)"
                    : "transparent",
                padding: selected === "resume" ? 8 : 0,
                transition: "0.8s",
              }}
              onClick={() => history.push("/resume")}
            />
          </motion.div>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <motion.div variants={ItemStyle}>
            <Link to="/blog" />
            <CoffeeOutlined
              style={{
                color:
                  selected === "blog"
                    ? useDark
                      ? "rgba(255, 255, 255, 0.95) !important"
                      : "rgba(0, 0, 0, 0.95) !important"
                    : "",
                fontSize: selected === "blog" ? 24 : 20,
                background:
                  selected === "blog"
                    ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 50%, transparent 30%)"
                    : "transparent",
                padding: selected === "blog" ? 8 : 0,
                transition: "0.8s",
              }}
              onClick={() => history.push("/blog")}
            />
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default withRouter(IconMenu);
