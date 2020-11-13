import React, { FC, useEffect, useState } from "react";
import { Grid, Row, Col } from "antd";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ContainerStyle, ItemStyle } from "interfaces/Motion";
import { motion } from "framer-motion";
import ThemeModeSelector from "../ThemeMode/ThemeModeSelector";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { useStore } from "hooks/useStore";

const CustomCol = styled(Col)`
  text-align: center;
  @media only screen and (min-width: 100px) and (max-width: 1199px) {
    text-align: center;
    transform: ${(props) =>
      props.selected === props.current ? "scale( 1.1 )" : "scale( 1 )"};
    text-decoration: ${(props) =>
      props.selected === props.current ? "underline" : "unset"};
    transition: 0.2s;
    padding: 4;
  }
`;

const MotionMenuBox = styled(motion.div)`
  cursor: pointer;

  @media only screen and (min-width: 100px) and (max-width: 767px) {
    background-color: ${(props) =>
      props.selected === props.current
        ? "rgba(152, 44, 255, 0.3)"
        : "transparent"};
    border-radius: 12px;
    padding: 0px 8px;
    margin: 0px 4px;
    transition: background 0.6s;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    transition: background 0.6s;
  }
`;

const MenuButtonBox = styled.div`
  @media only screen and (min-width: 200px) and (max-width: 773px) {
    padding: 4px;
  }

  @media only screen and (min-width: 767px) and (max-width: 1199px) {
    display: inline-block;
    padding: ${(props) =>
      props.selected === props.current ? "4px 8px" : "4px 0px"};
    background: ${(props) =>
      props.selected === props.current
        ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 40%, transparent 30%)"
        : "transparent"};
    transition: all 0.5s ease-out;

    &:hover {
      transition: all 0.5s ease;
      background: linear-gradient(
        to top,
        rgba(152, 44, 255, 0.4) 40%,
        transparent 30%
      );
    }
  }

  /* mobile */
  @media only screen and (min-width: 100px) and (max-width: 767px) {
    display: inline-block;
    padding: 4px;
  }
`;

interface Props {
  useBackground: boolean;
}
const IconMenu: FC<Props> = (props: Props) => {
  const { useDark } = useStore("common");
  const { useBackground } = props;

  const match = useRouteMatch();
  const history = useHistory();
  const screens = Grid.useBreakpoint();
  const [selected, setSelected] = useState("/");
  useEffect(() => setSelected(location.pathname), [match]);

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{
        transition: "background 0.5s ease",
        backgroundColor: useBackground
          ? useDark
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(0, 0, 0, 0.15)"
          : "transparent",
      }}
    >
      <Row
        justify="center"
        align="middle"
        gutter={screens.xl ? [0, 32] : [0, 0]}
        style={
          screens.xl
            ? {
                // paddingTop: 30,
                // paddingLeft: 8,
                // marginTop: "-28px",
              }
            : {
                padding: "6px 8px",
                margin: "auto 1.5rem",
              }
        }
      >
        <Col
          span={screens.xl ? 24 : 4}
          style={{
            textAlign: "center",
            paddingTop: screens.xl ? 0 : 6,
            paddingBottom: screens.xl ? 12 : 0,
          }}
        >
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={screens.xl ? 2.3 : 1.6} />
          </motion.div>
        </Col>

        <CustomCol
          span={screens.xl ? 24 : 4}
          onClick={() => history.push("/about")}
        >
          <MotionMenuBox
            variants={ItemStyle}
            selected="/about"
            current={selected}
          >
            <MenuButtonBox selected="/about" current={selected}>
              <MenuItem
                url="/about"
                title="About JW"
                selected={selected}
                icon="IdcardOutlined"
                subTitle="About"
                // isMobile={!screens.md}
              />
            </MenuButtonBox>
          </MotionMenuBox>
        </CustomCol>

        <CustomCol
          span={screens.xl ? 24 : 4}
          onClick={() => history.push("/portfolio")}
        >
          <MotionMenuBox
            variants={ItemStyle}
            selected="/portfolio"
            current={selected}
          >
            <MenuButtonBox selected="/portfolio" current={selected}>
              <MenuItem
                url="/portfolio"
                title="JW PortFolio"
                selected={selected}
                icon="PictureOutlined"
                subTitle="Folio"
              />
            </MenuButtonBox>
          </MotionMenuBox>
        </CustomCol>
        <CustomCol
          span={screens.xl ? 24 : 4}
          onClick={() => history.push("/resume")}
        >
          <MotionMenuBox
            variants={ItemStyle}
            selected="/resume"
            current={selected}
          >
            <MenuButtonBox selected="/resume" current={selected}>
              <MenuItem
                url="/resume"
                title="JW Resume"
                selected={selected}
                icon="ReadOutlined"
                subTitle="Resume"
              />
            </MenuButtonBox>
          </MotionMenuBox>
        </CustomCol>
        <CustomCol
          span={screens.xl ? 24 : 4}
          onClick={() => history.push("/blog")}
        >
          <MotionMenuBox
            variants={ItemStyle}
            selected="/blog"
            current={selected}
          >
            <MenuButtonBox selected="/blog" current={selected}>
              <MenuItem
                url="/blog"
                title="Blog"
                selected={selected}
                icon="CoffeeOutlined"
                subTitle="Blog"
              />
            </MenuButtonBox>
          </MotionMenuBox>
        </CustomCol>
        <CustomCol
          span={screens.xl ? 24 : 4}
          onClick={() => history.push("/contact")}
          style={{ display: screens.xl ? "none" : "block" }}
        >
          <MotionMenuBox
            variants={ItemStyle}
            selected="/contact"
            current={selected}
          >
            <MenuButtonBox selected="/contact" current={selected}>
              <MenuItem
                url="/contact"
                title="Contact"
                selected={selected}
                icon="SmileOutlined"
                subTitle="Contact"
              />
            </MenuButtonBox>
          </MotionMenuBox>
        </CustomCol>
      </Row>
    </motion.div>
  );
};

export default IconMenu;
