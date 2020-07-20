import React, { FC, useEffect, useState } from 'react';
import { Card, Typography, Badge, Divider, PageHeader } from 'antd';
import styled from 'styled-components';
import { pageTransition, pageVariants, ContainerStyle, ItemLeftStyle } from '../interfaces/Motion';
import { motion } from 'framer-motion';
import HeadMeta from '../components/Helmet/HeadMeta';
import ReactGA from 'react-ga';
import useWindowSize from '../hooks/useWindow';
import PortfolioData from './PortFolioDeck/PortfolioData';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ContentBox = styled.div`
  padding: 12px;
`;

const FolioContainer = styled.div`
  margin: 40px;
  padding: 0px 20px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    padding: 0px 20px;
    margin: 0px;
  }
`;

const FolioInTitleContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 16px;
`;

const FolioTitle = styled(Typography.Text)`
  letter-spacing: -1.2px;
  font-weight: 600;
  font-size: 1.6rem;
`;

const FolioImageBox = styled.div`
  position: relative;
`;

const FolioDate = styled(Typography.Text)`
  letter-spacing: -1.2px;
  font-weight: 300;
  font-size: 1rem;
`;

const StackText = styled(Typography.Title)``;
const SubscriptionText = styled(Typography.Text)`
  line-height: 32px;
  font-weight: 300;
`;
const TextContentBox = styled.div`
  padding: 0px 12px;
`;

const ProductLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

type Props = {};
interface MatchParams {
  id: string;
}
type State = {
  id: string;
  name: string;
  age: string;
  distance: string;
  position: string;
  titleDetail: string;
  subDescriptions: any;
  stack: string;
  pics: string;
  link: string;
};

const PortfolioDetail: FC<RouteComponentProps<MatchParams>> = ({ history, match }) => {
  const size = useWindowSize();
  const [folio, setFolio] = useState<State | undefined>(undefined);
  const cardBGStyles = {
    backgroundSize: 'cover',
    height: '40vh',
    borderRadius: 12,
    background: `linear-gradient(45deg,  rgba(18, 40, 76, 0.56), rgba(89, 89, 89, 0.3)) , url(${
      folio ? folio.pics : 'empty'
    }) no-repeat center center`
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(location.pathname + location.search);
    }
    findPortFolio();
  }, []);

  const findPortFolio = () => {
    const find: any = PortfolioData.find(item => {
      return item.id === match.params.id;
    });
    console.log('find data : ', find);
    setFolio(find);
  };

  const renderDescText = data => (
    <>
      <SubscriptionText>- {data}</SubscriptionText>
      <br />
    </>
  );

  const DescVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      x: -10,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'absolute', width: '100%' }}
    >
      <FolioContainer>
        <HeadMeta text={`Portfolio | ${folio ? folio.id : 'empty'}`} />
        <motion.button
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.99 }}
          onClick={e => {
            e.preventDefault();
            history.goBack();
          }}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <PageHeader
            onBack={() => console.log('')}
            className="site-page-header"
            title="이전 페이지"
            style={{ background: 'transparent', padding: '12px 0px' }}
            // subTitle="이전 페이지"
          />
        </motion.button>
        <Card
          style={{
            textAlign: 'center'
          }}
        >
          <motion.div
            className="container"
            variants={ContainerStyle}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ textAlign: 'left', marginBottom: 20, borderRadius: 12 }}
          >
            <ContentBox>
              <FolioImageBox>
                <div style={cardBGStyles}>
                  <FolioInTitleContainer>
                    <motion.div variants={ItemLeftStyle}>
                      <FolioTitle>{folio && folio.titleDetail}</FolioTitle>
                    </motion.div>
                    <motion.div variants={ItemLeftStyle}>
                      <FolioDate>{folio && folio.age}</FolioDate>
                    </motion.div>
                  </FolioInTitleContainer>
                </div>
              </FolioImageBox>
              <Divider />
              {/* <img src={folio && folio.pics} /> */}
              <TextContentBox>
                <motion.div variants={ItemLeftStyle}>
                  <StackText level={4}>{folio && folio.stack}</StackText>
                </motion.div>

                <br />
                <motion.div variants={ItemLeftStyle}>
                  {folio !== undefined && folio.link !== '' && (
                    <ProductLink href={folio.link} target="_blank">
                      실제서비스 URL{' '}
                    </ProductLink>
                  )}
                </motion.div>

                <motion.div variants={ItemLeftStyle}>
                  {folio !== undefined &&
                    folio.subDescriptions.map((item, index) => {
                      return renderDescText(item);
                    })}
                </motion.div>
                {/* {renderDescText(folio !== undefined && folio.subDescriptions)} */}
              </TextContentBox>
            </ContentBox>
          </motion.div>
        </Card>
      </FolioContainer>
    </motion.div>
  );
};

export default withRouter(PortfolioDetail);
