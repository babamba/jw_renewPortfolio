import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Typography } from "antd";
import Carousel from "react-multi-carousel";
import { useStore } from "hooks/useStore";
import { observer } from "mobx-react-lite";
import { useHistory, useLocation } from "react-router-dom";

interface RouteTextProps {
  name: string;
  current: string;
  isDark: boolean;
}

const RouteText = styled(Typography.Text)<RouteTextProps>`
  font-size: 80px;
  font-family: "NEXON Lv2 Gothic Bold";
  letter-spacing: -2px;
  transition: all 0.2s;
  color: ${props => (props.name === props.current ? "inherit" : "transparent !important")};
  -webkit-text-stroke: ${props =>
    props.name === props.current ? "inherit" : props.isDark ? "1px white" : "1px black"};
`;
const TextSwipeMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const { useDark } = useStore("app");
  // const [currentSlide, setCurrentSlider] = useState("");
  const [selected, setSelected] = useState("/");
  useEffect(() => {
    const path = location.pathname.split("/");
    const temp = `${path[1]}`;
    console.log("temp : ", temp);
    setSelected(temp);
    // setCurrentSlider(temp);
  }, [location.pathname]);

  const MenuTrigger = (idx: number) => {
    console.log("idx : ", idx);
    switch (idx) {
      case 0:
        setSelected("about");
        history.push("/about");
        break;
      case 1:
        setSelected("portfolio");
        history.push("/portfolio");
        break;
      case 2:
        setSelected("resume");
        history.push("/resume");
        break;
      case 3:
        setSelected("blog");
        history.push("/blog");
        break;
      case 4:
        setSelected("contact");
        history.push("/contact");
        break;

      default:
        break;
    }
  };

  const carousel = useRef<any>(null);
  const responsive = {
    superLargeDevice: {
      breakpoint: { max: 4000, min: 1920 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1920, min: 1520 },
      items: 1
    },
    labtop: {
      breakpoint: { max: 1519, min: 769 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 565 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }
  };

  return (
    // <Container>
    <Carousel
      ref={carousel}
      centerMode={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      arrows={false}
      dotListClass="carousel-dot-container"
      itemClass="menu-carousel-item"
      responsive={responsive}
      containerClass="menu-carousel-container"
      sliderClass="menu-carousel-slide"
      beforeChange={nextSlide => MenuTrigger(nextSlide)}
    >
      <RouteText name="about" current={selected} isDark={useDark}>
        About
      </RouteText>
      <RouteText name="portfolio" current={selected} isDark={useDark}>
        Folio
      </RouteText>
      <RouteText name="resume" current={selected} isDark={useDark}>
        Resume
      </RouteText>
      <RouteText name="blog" current={selected} isDark={useDark}>
        Blog
      </RouteText>
      <RouteText name="contact" current={selected} isDark={useDark}>
        Contact
      </RouteText>
    </Carousel>
    // </Container>
  );
};

export default observer(TextSwipeMenu);
