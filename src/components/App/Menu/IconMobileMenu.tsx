import React, { FunctionComponent, useEffect, useState } from "react";
import { Row, Col, Typography, Tooltip } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  ReadOutlined,
  PictureOutlined,
  IdcardOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { ContainerStyle, ItemStyle } from "../../../interfaces/Motion";
import { motion } from "framer-motion";
import ThemeModeSelector from "../ThemeMode/ThemeModeSelector";
import useWindowSize from "../../../hooks/useWindow";

interface Props extends RouteComponentProps<any> {}
const Menu: FunctionComponent<Props> = (props: Props) => {
  const [selected, setSelected] = useState("/");
  const [isMobile, setIsMobile] = useState(false);
  const { history, match } = props;
  const size = useWindowSize();

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width < 570) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [size]);

  useEffect(() => {
    console.log("test : ", location.pathname);
    setSelected(location.pathname);
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
        style={{ padding: "0px 8px", margin: "auto 1rem" }}
      >
        <Col span={4} style={{ textAlign: "center" }}>
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={16} />
          </motion.div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: "center",
            transform:
              selected === "/about" || selected === "/"
                ? "scale( 1.2 )"
                : "scale( 1 )",

            transition: ".2s",
          }}
        >
          <motion.div
            variants={ItemStyle}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/about")}
          >
            {isMobile ? (
              <Tooltip placement="bottom" title={"About Me"}>
                <IdcardOutlined />
              </Tooltip>
            ) : (
              <>
                <IdcardOutlined />
                <Tooltip placement="bottom" title={"About Me"}>
                  <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>
                    About
                  </Typography.Text>
                </Tooltip>
              </>
            )}
          </motion.div>
        </Col>

        <Col
          span={5}
          style={{
            textAlign: "center",
            transform:
              selected === "/portfolio" || selected === "/"
                ? "scale( 1.2 )"
                : "scale( 1 )",

            transition: ".2s",
          }}
        >
          <motion.div
            variants={ItemStyle}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/portfolio")}
          >
            {isMobile ? (
              <Tooltip placement="bottom" title={"My PortFolio"}>
                <PictureOutlined />
              </Tooltip>
            ) : (
              <>
                <PictureOutlined />
                <Tooltip placement="bottom" title={"My PortFolio"}>
                  <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>
                    Portfolio
                  </Typography.Text>
                </Tooltip>
              </>
            )}
          </motion.div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: "center",
            transform:
              selected === "/resume" || selected === "/"
                ? "scale( 1.2 )"
                : "scale( 1 )",

            transition: ".2s",
          }}
        >
          <motion.div
            variants={ItemStyle}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/resume")}
          >
            {isMobile ? (
              <Tooltip placement="bottom" title={"My Resume"}>
                <ReadOutlined />
              </Tooltip>
            ) : (
              <>
                <ReadOutlined />
                <Tooltip placement="bottom" title={"Resume"}>
                  <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>
                    Resume
                  </Typography.Text>
                </Tooltip>
              </>
            )}
          </motion.div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: "center",
            transform:
              selected === "/blog" || selected === "/"
                ? "scale( 1.2 )"
                : "scale( 1 )",

            transition: ".2s",
          }}
        >
          <motion.div
            variants={ItemStyle}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/blog")}
          >
            {isMobile ? (
              <Tooltip placement="bottom" title={"My Blog"}>
                <CoffeeOutlined />
              </Tooltip>
            ) : (
              <>
                <ReadOutlined />
                <Tooltip placement="bottom" title={"Blog"}>
                  <Typography.Text style={{ paddingLeft: 4, fontWeight: 300 }}>
                    Blog
                  </Typography.Text>
                </Tooltip>
              </>
            )}
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default withRouter(Menu);
