import React, { FunctionComponent, useEffect, useState } from "react";
import { Row, Col, Typography, Grid } from "antd";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import {
  ReadOutlined,
  PictureOutlined,
  IdcardOutlined,
  CoffeeOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { ContainerStyle, ItemStyle } from "../../../interfaces/Motion";
import { motion } from "framer-motion";
import ThemeModeSelector from "../ThemeMode/ThemeModeSelector";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useStore } from "hooks/useStore";

const MotionMenuBox = styled(motion.div)`
  cursor: pointer;
  background-color: ${(props) =>
    props.isMobile && props.selected === props.current
      ? "rgba(152, 44, 255, 0.3)"
      : "transparent"};
  border-radius: 12px;
  margin: 0px 12px;
  transition: background 0.6s;
`;

const MenuBttonBox = styled.div`
  display: inline-block;
  padding: ${(props) =>
    props.selected === props.current && !props.isMobile
      ? "4px 8px"
      : "4px 0px"};

  background: ${(props) =>
    props.selected === props.current && !props.isMobile
      ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 40%, transparent 30%)"
      : "transparent"};
  transition: all 0.5s ease-out;

  &:hover {
    transition: all 0.5s ease;
    background: ${(props) =>
      !props.isMobile &&
      "linear-gradient(to top, rgba(152, 44, 255, 0.4) 40%, transparent 30%)"};
  }

  @media only screen and (min-width: 200px) and (max-width: 773px) {
    padding: 4px;
  }
`;

const CustomColumn = styled(Col)`
  text-align: center;
  transform: ${(props) =>
    props.selected === props.current ? "scale( 1.1 )" : "scale( 1 )"};
  text-decoration: ${(props) =>
    props.selected === props.current ? "underline" : "unset"};
  transition: 0.2s;
  padding: 4;
`;

const MenuText = styled(Typography.Text)`
  padding-left: 4px;
  font-weight: ${(props) => (props.selected === props.current ? 600 : 300)};
  font-size: 16px;
  color: ${(props) =>
    props.selected === props.current &&
    (props.usedark === "true"
      ? "rgba(255, 255, 255, 0.95) !important"
      : "rgba(0, 0, 0, 0.95) !important")};
  @media only screen and (min-width: 200px) and (max-width: 773px) {
    padding-left: 2px;
    font-size: 14px;
    letter-spacing: -0.3px;
  }
`;

interface Props extends RouteComponentProps<any> {}
const IconMobileMenu: FunctionComponent<Props> = (props: Props) => {
  const [selected, setSelected] = useState("/");
  const screens = Grid.useBreakpoint();
  const { history, match } = props;
  const { useDark } = useStore("common");

  useEffect(() => {
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
        style={{ padding: "6px 8px", margin: "auto 1.5rem" }}
      >
        <Col span={4} style={{ textAlign: "center" }}>
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={1.6} />
          </motion.div>
        </Col>
        <CustomColumn
          span={4}
          onClick={() => history.push("/about")}
          selected={"about"}
          current={selected}
        >
          <Link to="/about" />
          <MotionMenuBox
            variants={ItemStyle}
            selected={"about"}
            isMobile={!screens.md}
            current={selected}
          >
            <MenuBttonBox
              selected={"about"}
              isMobile={!screens.md}
              current={selected}
            >
              <IdcardOutlined />
              {screens.md && (
                <MenuText
                  selected={"about"}
                  current={selected}
                  usedark={useDark ? "true" : "false"}
                >
                  About
                </MenuText>
              )}
            </MenuBttonBox>
            {/* </div> */}
          </MotionMenuBox>
        </CustomColumn>

        <CustomColumn
          span={4}
          onClick={() => history.push("/portfolio")}
          selected={"portfolio"}
          current={selected}
        >
          <Link to="/portfolio" />
          <MotionMenuBox
            variants={ItemStyle}
            selected={"portfolio"}
            isMobile={!screens.md}
            current={selected}
          >
            <MenuBttonBox
              selected={"portfolio"}
              isMobile={!screens.md}
              current={selected}
            >
              <PictureOutlined />
              {screens.md && (
                <MenuText
                  selected={"portfolio"}
                  current={selected}
                  usedark={useDark ? "true" : "false"}
                >
                  Folio
                </MenuText>
              )}
            </MenuBttonBox>
          </MotionMenuBox>
        </CustomColumn>

        <CustomColumn
          span={4}
          onClick={() => history.push("/resume")}
          selected={"resume"}
          current={selected}
        >
          <Link to="/resume" />
          <MotionMenuBox
            variants={ItemStyle}
            selected={"resume"}
            isMobile={!screens.md}
            current={selected}
          >
            <MenuBttonBox
              selected={"resume"}
              isMobile={!screens.md}
              current={selected}
            >
              <ReadOutlined />
              {screens.md && (
                <MenuText
                  selected={"resume"}
                  current={selected}
                  usedark={useDark ? "true" : "false"}
                >
                  Resume
                </MenuText>
              )}
            </MenuBttonBox>
          </MotionMenuBox>
        </CustomColumn>
        <CustomColumn
          span={4}
          onClick={() => history.push("/blog")}
          selected={"blog"}
          current={selected}
        >
          <Link to="/blog" />
          <MotionMenuBox
            variants={ItemStyle}
            selected={"blog"}
            isMobile={!screens.md}
            current={selected}
          >
            <MenuBttonBox
              selected={"blog"}
              isMobile={!screens.md}
              current={selected}
            >
              <CoffeeOutlined />
              {screens.md && (
                <MenuText
                  selected={"blog"}
                  current={selected}
                  usedark={useDark ? "true" : "false"}
                >
                  Blog
                </MenuText>
              )}
            </MenuBttonBox>
          </MotionMenuBox>
        </CustomColumn>
        <CustomColumn
          span={4}
          onClick={() => history.push("/contact")}
          selected={"contact"}
          current={selected}
        >
          <Link to="/contact" />
          <MotionMenuBox
            variants={ItemStyle}
            selected={"contact"}
            isMobile={!screens.md}
            current={selected}
          >
            <MenuBttonBox
              selected={"contact"}
              isMobile={!screens.md}
              current={selected}
            >
              <SmileOutlined />
              {screens.md && (
                <MenuText
                  selected={"contact"}
                  current={selected}
                  usedark={useDark ? "true" : "false"}
                >
                  Contact
                </MenuText>
              )}
            </MenuBttonBox>
          </MotionMenuBox>
        </CustomColumn>
      </Row>
    </motion.div>
  );
};

export default withRouter(observer(IconMobileMenu));
