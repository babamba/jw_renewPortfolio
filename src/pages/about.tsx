import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, Divider, Card, Typography, Avatar, Badge, Tooltip } from 'antd';
import styled from 'styled-components';
import { useRouter } from '../hooks/useRouter';
import useWindowSize from '../hooks/useWindow';
import { motion } from 'framer-motion';
import {
  pageTransition,
  pageVariants,
  ContainerStyle,
  FastContainerStyle,
  ItemStyle
} from '../interfaces/Motion';
import useStores from '../hooks/useStores';
import HeadMeta from '../components/Helmet/HeadMeta';
import ReactGA from 'react-ga';

const IntroText = styled.h2`
  font-weight: 300;
  padding: 0px 32px;
  color: ${(props: any) =>
    props.theme === 'true' ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.65)'};
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 24px;
  }
`;

const StackText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;

const HashTag = styled.p`
  font-weight: 300;
  padding: 0px 32px;
`;

const TitleBox = styled.div`
  display: block;
  padding-top: 16px;
`;

const FrontStackBox = styled.div`
  text-align: center;
  height: 140px;
`;

const BackStackBox = styled.div`
  text-align: center;
  height: 140px;
`;

type Props = {};

const About: FunctionComponent<Props> = (props: Props) => {
  const {
    common: { useDark }
  } = useStores();

  const size = useWindowSize();
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');
  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width < 769) {
        SetIsDeviceSize('mobile');
      } else if (size.width < 1201) {
        SetIsDeviceSize('tablet');
      } else {
        SetIsDeviceSize('desktop');
      }
    }
  }, [size]);

  const RenderTooltip = text => {
    return <Typography.Text>{text}</Typography.Text>;
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      // style={pageStyle}
    >
      <HeadMeta
        title="About Me"
        text="About Me"
        keywords="FrontEnd Developer"
        description="About JW"
      />

      <Card
        style={{
          borderRadius: 12,
          margin: isDeviceSize === 'desktop' ? '40px 40px 30px' : '0px 0px 30px 0px'
        }}
        bodyStyle={{
          padding: '18px 24px'
        }}
      >
        <Row gutter={24}>
          {/*  INTRODUCE */}
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <Divider orientation="left">INTRODUCE</Divider>
            <IntroText theme={useDark ? 'true' : 'false'}>
              안녕하세요. 저는 현재 <Typography.Text underline>FrontEnd</Typography.Text> 직군에서
              프로젝트를 진행하고있습니다. <br />
              Javascript 언어를 가장 좋아합니다. <br />
              FrontEnd 및 BackEnd 직군으로 프로젝트를 진행한 경력이 있습니다. <br />
              기술 트렌드와 실제 프로덕션의 중간에서 효율점을 찾아가며
              <br />
              하루하루 발전해 나가고 있습니다. 잘 부탁드립니다.
              <br />
              {/* 항상 도전하고 배우겠습니다. */}
            </IntroText>
          </Col>
          {/* TAGS */}
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Divider orientation="left">TAGS</Divider>
            <HashTag>
              #React #NextJS #Javascript #Typescript #Node.JS #jQuery #Express #GraphQL #MySQL #AWS
              #Cognito #MySQL #SpringBoot
            </HashTag>
          </Col>
        </Row>
        <Divider orientation="left">
          FrontEnd Stack
          <StackText style={{ paddingLeft: 12, fontSize: 12, fontWeight: 100 }}>
            <Badge status="processing" color="green" />
            {isDeviceSize !== 'mobile'
              ? ': 현재 진행 중인 프로젝트에서 사용중'
              : ': 현재 프로젝트에서 사용중'}
          </StackText>
        </Divider>

        <motion.div
          className="container"
          variants={FastContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row gutter={[0, 16]}>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Tooltip
                        placement="topLeft"
                        title={RenderTooltip(
                          '프론트엔드 개발자로써 Dom 컨트롤 및 데이터 컨트롤을 위한 필수 요소'
                        )}
                      >
                        <Avatar
                          shape="square"
                          size={size.width !== undefined && size.width > 480 ? 80 : 60}
                          src={require('../assets/images/stack/js.png')}
                        />
                      </Tooltip>
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Javascript
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>

                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Tooltip
                        placement="topLeft"
                        title={RenderTooltip('모던 자바스크립트 사용을 위한 필수요소')}
                      >
                        <Avatar
                          shape="square"
                          size={size.width !== undefined && size.width > 480 ? 80 : 60}
                          src={require('../assets/images/stack/jses6.png')}
                        />
                      </Tooltip>
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          ES 6
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Tooltip
                        placement="topLeft"
                        title={RenderTooltip(
                          '런타임에러 방지 및 신용 할 수 있는 코드를 위한 필수 요소'
                        )}
                      >
                        <Avatar
                          shape="square"
                          size={size.width !== undefined && size.width > 480 ? 80 : 60}
                          src={require('../assets/images/stack/typescript.png')}
                        />
                      </Tooltip>
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          TypeScript
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Tooltip
                        placement="topLeft"
                        title={RenderTooltip(
                          '크로스브라우징을 위해 es6문법으로 작성된 js파일을 es5문법으로 작성된 js파일로 만들어 주기 위한 필수요소'
                        )}
                      >
                        <Avatar
                          shape="square"
                          size={size.width !== undefined && size.width > 480 ? 80 : 60}
                          src={require('../assets/images/stack/babel.png')}
                        />
                      </Tooltip>
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Babel
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Tooltip
                        placement="topLeft"
                        title={RenderTooltip(
                          '각 파일로 나뉘어있는 소스들을 하나로묶어(번들링)서 네트워크 비용을 최소화 하는 필수 요소'
                        )}
                      >
                        <Avatar
                          shape="square"
                          size={size.width !== undefined && size.width > 480 ? 80 : 60}
                          src={require('../assets/images/stack/webpack.png')}
                        />
                      </Tooltip>
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Webpack
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/jquery.png')}
                      />
                      <TitleBox>
                        <Typography.Text>Jquery</Typography.Text>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/react.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          React
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/nextjs.png')}
                      />
                      <TitleBox>
                        <StackText>Next.js</StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/RN.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          React
                          <br />
                          Native
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/redux.png')}
                      />
                      <TitleBox>
                        <StackText>Redux</StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/mobx.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Mobx
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/styled-component.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Styled
                          <br />
                          Component
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/ant.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          AntDesign
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/chartjs.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Chart.js
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/lottie.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          Lottie
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <FrontStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/apollo.png')}
                      />
                      <TitleBox>
                        <Badge status="processing" color="green" />
                        <StackText>Apollo</StackText>
                      </TitleBox>
                    </motion.div>
                  </FrontStackBox>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Divider orientation="left">BackEnd Stack</Divider>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/spring.png')}
                      />
                      <TitleBox>
                        <StackText>SpringBoot</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/node.png')}
                      />
                      <TitleBox>
                        <StackText style={{ fontWeight: 100 }}>Node.js</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/express.png')}
                      />
                      <TitleBox>
                        <StackText>Express</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/graphql.png')}
                      />
                      <TitleBox>
                        <StackText>GraphQL</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>

                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/prisma.png')}
                      />
                      <TitleBox>
                        <StackText>Prisma.V2</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>

                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/Appsync.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          AWS.AppSync
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
        {/* 인프라 */}
        <Divider orientation="left">Infra Stack</Divider>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/aws.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          AWS
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/docker.png')}
                      />
                      <TitleBox>
                        <StackText>Docker</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
              </Row>
            </Col>
          </Row>

          <Divider orientation="left">CI & CD</Divider>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/gitlab-runner.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          GitLab-Runner
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
        {/* 형상관리 */}
        <Divider orientation="left">Remote Repository</Divider>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/github.png')}
                      />
                      <TitleBox>
                        <StackText>Github</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>

                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/gitlab.png')}
                      />
                      <TitleBox>
                        <StackText>
                          <Badge status="processing" color="green" />
                          GitLab
                        </StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
        {/* 관심스택 */}
        <Divider orientation="left">Interest Tech</Divider>
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/k8s.png')}
                      />
                      <TitleBox>
                        <StackText>K8s</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                  <BackStackBox>
                    <motion.div variants={ItemStyle}>
                      <Avatar
                        shape="square"
                        size={size.width !== undefined && size.width > 480 ? 80 : 60}
                        src={require('../assets/images/stack/elk.png')}
                      />
                      <TitleBox>
                        <StackText>ELK Stack</StackText>
                      </TitleBox>
                    </motion.div>
                  </BackStackBox>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default About;
