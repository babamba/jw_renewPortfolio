import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Layout, Typography, Divider, Row, Affix, Card, Avatar } from 'antd';
import { Link, withRouter, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';
import Slider from 'react-slick';
import AboutPage from '../../../pages/about';
import BlogPage from '../../../pages/blog';
// import BlogPage from '../blog';
import ContactPage from '../../../pages/contact';
import PortfolioPage from '../../../pages/portfolio';
import HistoryPage from '../../../pages/resume';

// import { defaultMetaTags } from '../../../core/constants';
// import { MetaTags, PageType, RobotsContent } from '../../../interfaces/meta-tags';
// import LayoutMeta from '../../../shared/components/layout/layout.component';

import useWindowSize from '../../../hooks/useWindow';
import styled, { keyframes } from 'styled-components';
import Routes from '../../../route/Routes';

// interface PostPageProps {
//   entries: BlogPost[];
//   tags: { id: string; name: string }[];
//   url: any;
//   total: number;
//   skip: number;
//   limit: number;
//   page?: number;
//   totalCount: number;
// }

const Gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LinkText = styled.span`
  color: ${props => (props.theme === 'default' ? '#345' : 'white')};
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 38px;
  }
`;

const GradientFont = styled.span`
  background: linear-gradient(-60deg, #ebe650, #cfeb50, #23d5ab, #22c1c3, #23a6d5);
  background-size: 200% 200%;
  /* background: linear-gradient(to right, #fbcac9, #8ca6ce); */
  /*  */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 2px;

  animation: ${props => props.isCurrent && `Gradient 5s ease infinite alternate`};
`;

const ContentArea = styled.div`
  opacity: ${props => (props.current ? 1 : 0.3)};
  transition: opacity 1s ease 0s;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    padding: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    padding: 30px;
  }
`;
interface Props extends RouteComponentProps<any> {
  stateTheme: string;
}
//const Dynamic: NextPage<PostPageProps, any> = (props: PostPageProps) => {
const Dynamic: FunctionComponent<Props> = (props: Props) => {
  const { stateTheme, history } = props;
  const size = useWindowSize();
  const slideContentRef = useRef<any>(null);
  const slideTitleRef = useRef<any>(null);
  const [isInit, setIsInit] = useState(false);

  // const [slideIndex, setSlideIndex] = useState(0);

  const getPageIdx = () => {
    console.log('history : ', history.location.pathname);
    if (history.location.pathname === '/portfolio') {
      return 1;
    } else if (history.location.pathname === '/resume') {
      return 2;
    } else if (history.location.pathname === '/contact') {
      return 3;
    } else if (history.location.pathname === '/blog') {
      return 4;
    } else if (history.location.pathname === '/about') {
      return 0;
    }
  };

  const [topNav, setTopNav] = useState(null);
  const [currentPageIdx, setCurrentPageIdx] = useState(getPageIdx());
  const [contentCenterPadding, setContentCenterPadding] = useState(160);
  const [titlePadding, setTitlePadding] = useState(20);
  const [titleCenterPaddingPer, setTitleCenterPaddingPer] = useState(85);

  useEffect(() => {
    // console.log('size : ', size);
    if (size !== null) {
      if (size < 768) {
        setContentCenterPadding(0);
        setTitleCenterPaddingPer(100);
        setTitlePadding(0);
      } else if (size < 1176) {
        setContentCenterPadding(80);
        setTitleCenterPaddingPer(85);
        setTitlePadding(20);
      } else {
        setContentCenterPadding(120);
        setTitleCenterPaddingPer(85);
        setTitlePadding(20);
      }
    }
  }, [size]);

  const sliderContentSettings = {
    className: 'center',
    rtl: false,
    // dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: `${contentCenterPadding}px`,
    slidesToShow: 1,
    speed: 500,
    swipe: false,
    swipeToSlide: false,
    //focusOnSelect: false,
    arrows: false
  };

  // useEffect(() => {
  //   catchPage();
  //   generateMeta();
  // }, []);

  useEffect(() => {
    catchPage();
    setIsInit(true);
  }, [history.location.pathname]);

  const catchPage = async () => {
    const num = await getPageNum();
    handlePage(num);
    slideTitleRef.current.slickGoTo(num);
  };

  const getPageNum = async () => {
    let number = 0;
    if (history.location.pathname === '/portfolio') {
      number = 1;
    } else if (history.location.pathname === '/resume') {
      number = 2;
    } else if (history.location.pathname === '/contact') {
      number = 3;
    } else if (history.location.pathname === '/blog') {
      number = 4;
    } else {
      number = 0;
    }
    await handlePage(number);

    return number;
  };

  const sliderTitleSettings = {
    rtl: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: `${titlePadding}px`,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    swipe: false,
    swipeToSlide: false,
    focusOnSelect: true,
    arrows: false
  };
  const handlePage = async (next: number) => {
    setCurrentPageIdx(next);
  };

  return (
    <>
      <Card
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          opacity: 1
        }}
        bodyStyle={{
          padding: 4
        }}
      >
        {/* {size !== null && size > 768 && (
          <div style={{ float: 'left', paddingTop: 12, paddingLeft: 12 }}>
            <Typography.Paragraph
              style={{
                fontSize: '1em',
                margin: '.1em',
                display: 'inline-block',
                fontStyle: 'italic',
                padding: '6px 10px',
                background: '#faf46a',
                color: 'rgba(51, 68, 85,.7)',
                borderRadius: 4,
                lineHeight: 1,
                width: '100%',
                textAlign: 'center'
              }}
            >
              JW
              <Avatar size={30} src="/static/images/me.png" style={{ marginLeft: 10 }} />
            </Typography.Paragraph>
          </div>
        )} */}

        <Layout.Header
          className="header"
          style={{
            background: 'transparent !important',
            width: `${titleCenterPaddingPer}%`,
            margin: '0 auto'
          }}
        >
          <Slider ref={slideTitleRef} {...sliderTitleSettings}>
            <div onClick={e => history.push('/about')}>
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  letterSpacing: '-2px',

                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '2.7em',
                  opacity: currentPageIdx === 0 ? 1 : 0.5,
                  transition: 'opacity 0.3s ease 0s'
                }}
              >
                <a onClick={e => history.push('/about')}>
                  <LinkText theme={stateTheme}>
                    <GradientFont isCurrent={currentPageIdx === 0}>About</GradientFont>
                  </LinkText>
                </a>
              </Typography.Paragraph>
            </div>
            <div onClick={e => history.push('/portfolio')}>
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  letterSpacing: '-2px',

                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '2.7em',
                  opacity: currentPageIdx === 1 ? 1 : 0.5,
                  transition: 'opacity 0.3s ease 0s'
                }}
              >
                <a onClick={e => history.push('/portfolio')}>
                  <LinkText theme={stateTheme}>
                    <GradientFont isCurrent={currentPageIdx === 1}>Portfolio</GradientFont>
                  </LinkText>
                </a>
              </Typography.Paragraph>
            </div>

            <div onClick={e => history.push('/resume')}>
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  letterSpacing: '-2px',

                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '2.7em',
                  opacity: currentPageIdx === 2 ? 1 : 0.5,
                  transition: 'opacity 0.3s ease 0s'
                }}
              >
                <a onClick={e => history.push('/resume')}>
                  <LinkText theme={stateTheme}>
                    <GradientFont isCurrent={currentPageIdx === 2}>Resume</GradientFont>
                  </LinkText>
                </a>
              </Typography.Paragraph>
            </div>
            <div onClick={e => history.push('/contact')}>
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  letterSpacing: '-2px',

                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '2.7em',
                  opacity: currentPageIdx === 3 ? 1 : 0.5,
                  transition: 'opacity 0.3s ease 0s'
                }}
              >
                <a onClick={e => history.push('/contact')}>
                  <LinkText theme={stateTheme}>
                    <GradientFont isCurrent={currentPageIdx === 3}>Contact</GradientFont>
                  </LinkText>
                </a>
              </Typography.Paragraph>
            </div>

            <div onClick={e => history.push('/blog')}>
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  letterSpacing: '-2px',

                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '2.7em',
                  opacity: currentPageIdx === 4 ? 1 : 0.5,
                  transition: 'opacity 0.3s ease 0s'
                }}
              >
                <a onClick={e => history.push('/blog')}>
                  <LinkText theme={stateTheme}>
                    <GradientFont isCurrent={currentPageIdx === 4}>Blog</GradientFont>
                  </LinkText>
                </a>
              </Typography.Paragraph>
            </div>
          </Slider>
        </Layout.Header>
      </Card>
      <div>
        <Divider style={{ marginTop: 0 }} />
        <Layout.Content style={{ width: '90%', margin: '0 auto' }}>
          <div style={{ position: 'relative' }}>
            <Routes />
          </div>
        </Layout.Content>
      </div>
      {/* <div>
        <Divider style={{ margin: '4px 0px' }} />
        <Layout.Content style={{ width: '95%', margin: '0 auto' }}>
          <Slider {...sliderContentSettings} ref={slideContentRef}>
            <Router>
              <ContentArea current={currentPageIdx === 0}>
                <AboutPage theme={stateTheme} />
              </ContentArea>
              <ContentArea current={currentPageIdx === 1}>
                <PortfolioPage />
              </ContentArea>
              <ContentArea current={currentPageIdx === 2}>
                <HistoryPage />
              </ContentArea>
              <ContentArea current={currentPageIdx === 3}>
                <ContactPage />
              </ContentArea>
              <ContentArea current={currentPageIdx === 4}>
                <BlogPage />
              </ContentArea>
            </Router>
          </Slider>
        </Layout.Content>
      </div> */}
    </>
  );
};

// Dynamic.getInitialProps = async ({ req, query }) => {
//   // Call an external API endpoint to get posts

//   console.log('getInitialProps : ', query.pagename);

//   const contentfulService = new ContentfulService();
//   let page: number = 1;

//   if (query.page) {
//     page = parseInt(query.page + '');
//   }

//   const { entries, total, skip, limit } = await contentfulService.getBlogPostEntries({
//     tag: query.tag ? query.tag.toString() : '',
//     skip: (page - 1) * 8,
//     limit: 8,
//   });

//   const totalCount = await contentfulService.getAllEntriesCount({
//     tag: query.tag ? query.tag.toString() : '',
//   });

//   // TODO: need to move outside
//   const { tags } = await contentfulService.getAllTags();
//   console.log('result : ', page, tags, entries, total, skip, limit, totalCount);

//   return { page, tags, entries, total, skip, limit, totalCount };
// };

export default withRouter(Dynamic);
