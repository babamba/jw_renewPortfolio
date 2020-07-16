import React, { FunctionComponent, useEffect } from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import { ForwardOutlined, BackwardOutlined } from '@ant-design/icons';
import Carousel from 'react-multi-carousel';
import { pageTransition, pageVariants } from '../interfaces/Motion';
import { motion } from 'framer-motion';
import HeadMeta from '../components/Helmet/HeadMeta';
import { useRouter } from '../hooks/useRouter';
import ReactGA from 'react-ga';
import 'react-multi-carousel/lib/styles.css';
const FolioContainer = styled(Card)`
  overflow: hidden;
  border-radius: 12px !important;
`;

const FolioRadius = styled.div`
  border-radius: 20px;
`;
const FolioDiv = styled.div``;

const FolioImg = styled.img`
  width: 100%;
  height: 100%;
`;

type Props = {};
const Portfolio: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  const responsive = {
    superLargeDevice: {
      breakpoint: { max: 4000, min: 1920 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1920, min: 1634 },
      items: 1,
      slidesToSlide: 1
    },
    labtop: {
      breakpoint: { max: 1633, min: 769 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 565 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = (props: any) => {
    return (
      <Button className="carousel-arrow right" onClick={props.onClick}>
        <ForwardOutlined style={{ fontSize: 24 }} />
      </Button>
    );
  };

  const CustomLeftArrow = (props: any) => {
    return (
      <Button className="carousel-arrow left" onClick={props.onClick}>
        <BackwardOutlined style={{ fontSize: 24 }} />
      </Button>
    );
  };

  // const settings = {
  //   // dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   // className: 'center',
  //   // centerMode: true,
  //   // dotPosition: 'left',
  //   beforeChange: function (currentSlide, nextSlide) {
  //     console.log('before change', currentSlide, nextSlide);
  //   },
  //   afterChange: function (currentSlide) {
  //     console.log('after change', currentSlide);
  //   },
  // };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'absolute', width: '100%' }}
      // style={pageStyle}
    >
      <HeadMeta text="Portfolio" />
      <FolioContainer>
        <Carousel
          containerClass="carousel-container"
          centerMode={false}
          // centerMode={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          swipeable={true}
          draggable={true}
          infinite={true}
          responsive={responsive}
          // draggable={true}
          showDots={true}

          // dotListClass="carousel-dot-container"
          // itemClass="search carousel-item"
          // //
          // containerClass="carousel-container"
          // sliderClass="search carousel-slide"
        >
          <FolioDiv>
            <FolioImg alt="텔레매틱스" src={require('../assets/images/folio/tele.png')} />
          </FolioDiv>
          <FolioDiv>
            <FolioImg alt="키즈랜드" src={require('../assets/images/folio/kidsland.png')} />
          </FolioDiv>
          <FolioDiv>
            <FolioImg alt="청약센터" src={require('../assets/images/folio/gicoapart.png')} />
          </FolioDiv>
          <FolioDiv>
            <FolioImg alt="오산백년" src={require('../assets/images/folio/osan.png')} />
          </FolioDiv>
          <FolioDiv>
            <FolioImg alt="충남대동력" src={require('../assets/images/folio/cnuweb.png')} />
          </FolioDiv>
          <FolioDiv>
            <FolioImg alt="봉군웹" src={require('../assets/images/folio/beeweb.png')} />
          </FolioDiv>
          <FolioDiv>
            <FolioImg alt="봉군앱" src={require('../assets/images/folio/beeapp.png')} />
          </FolioDiv>
        </Carousel>
      </FolioContainer>
    </motion.div>
  );
};

export default Portfolio;
