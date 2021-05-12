import { useEffect, useState } from "react";
import { Grid, Row, Col } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { ContainerStyle, ItemStyle } from "@interfaces/Motion";
import { motion } from "framer-motion";
import ThemeModeSelector from "../ThemeMode/ThemeModeSelector";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { useAppSelector } from "@store/useAppStore";

interface CustomColProps {
  selected?: string;
  current?: string;
}

const CustomCol = styled(Col)<CustomColProps>`
  text-align: center;
  @media only screen and (min-width: 100px) and (max-width: 991px) {
    text-align: center;
    transform: ${props => (props.selected === props.current ? "scale( 1.1 )" : "scale( 1 )")};
    text-decoration: ${props => (props.selected === props.current ? "underline" : "unset")};
    transition: 0.2s;
    padding: 4;
  }
`;

interface MotionMenuBox extends CustomColProps {
  isDark: boolean;
}
const MotionMenuBox = styled(motion.div)<MotionMenuBox>`
  cursor: pointer;

  @media only screen and (min-width: 100px) and (max-width: 767px) {
    background-color: ${props =>
      props.selected === props.current
        ? props.isDark
          ? "rgba(152, 44, 255, 1)"
          : "white"
        : "transparent"};
    border-radius: 12px;
    padding: 0px 8px;
    margin: 0px 4px;
    transition: background 0.6s box-shadow 0.3s ease-in-out;
    box-shadow: ${props =>
      props.selected === props.current ? "0 1px 13px 4px rgba(0, 0, 0, 0.04)" : "none"};
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    transition: background 0.6s;
  }
`;

const MenuButtonBox = styled.div<CustomColProps>`
  @media only screen and (min-width: 200px) and (max-width: 773px) {
    padding: 4px;
  }

  @media only screen and (min-width: 767px) and (max-width: 991px) {
    display: inline-block;
    padding: ${props => (props.selected === props.current ? "4px 8px" : "4px 0px")};
    background: ${props =>
      props.selected === props.current
        ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 40%, transparent 30%)"
        : "transparent"};
    transition: all 0.5s ease-out;

    &:hover {
      transition: all 0.5s ease;
      background: linear-gradient(to top, rgba(152, 44, 255, 0.4) 40%, transparent 30%);
    }
  }

  /* mobile */
  @media only screen and (min-width: 100px) and (max-width: 767px) {
    display: inline-block;
    padding: 4px;
  }
`;

const IconMenu = () => {
  const { useDark } = useAppSelector(state => state.appStore);
  const history = useHistory();
  const location = useLocation();
  const screens = Grid.useBreakpoint();
  const [selected, setSelected] = useState("/");
  useEffect(() => {
    const path = location.pathname.split("/");
    const temp = `/${path[1]}`;
    setSelected(temp);
  }, [location.pathname]);

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
        gutter={screens.lg ? [0, 32] : [0, 0]}
        style={
          screens.lg
            ? {
                // paddingTop: 30,
                // paddingLeft: 8,
                // marginTop: "-28px",
              }
            : {
                padding: "6px 8px"
                // margin: "auto 1rem"
              }
        }
      >
        <Col
          span={screens.lg ? 24 : 4}
          style={{
            textAlign: "center",
            paddingBottom: screens.lg ? 12 : 0
          }}
        >
          <motion.div variants={ItemStyle}>
            <ThemeModeSelector size={screens.lg ? 2.3 : 1.7} />
          </motion.div>
        </Col>

        <CustomCol span={screens.lg ? 24 : 4} onClick={() => history.push("/about")}>
          <MotionMenuBox variants={ItemStyle} selected="/about" current={selected} isDark={useDark}>
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

        <CustomCol span={screens.lg ? 24 : 4} onClick={() => history.push("/portfolio")}>
          <MotionMenuBox
            variants={ItemStyle}
            selected="/portfolio"
            current={selected}
            isDark={useDark}
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
        <CustomCol span={screens.lg ? 24 : 4} onClick={() => history.push("/resume")}>
          <MotionMenuBox
            variants={ItemStyle}
            selected="/resume"
            current={selected}
            isDark={useDark}
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
        <CustomCol span={screens.lg ? 24 : 4} onClick={() => history.push("/blog")}>
          <MotionMenuBox variants={ItemStyle} selected="/blog" current={selected} isDark={useDark}>
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
          span={screens.lg ? 24 : 4}
          onClick={() => history.push("/contact")}
          style={{ display: screens.lg ? "none" : "block" }}
        >
          <MotionMenuBox
            variants={ItemStyle}
            selected="/contact"
            current={selected}
            isDark={useDark}
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
