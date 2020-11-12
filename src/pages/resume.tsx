import React, { FunctionComponent, useEffect } from "react";
import {
  Timeline,
  Row,
  Col,
  Card,
  Divider,
  Typography,
  Avatar,
  Badge,
  Tag,
  Grid,
} from "antd";
import styled from "styled-components";
import {
  pageTransition,
  pageVariants,
  FastContainerStyle,
  ItemStyle,
} from "../interfaces/Motion";
import { motion } from "framer-motion";
import HeadMeta from "../components/Helmet/HeadMeta";
import { useRouter } from "hooks/useRouter";
import ReactGA from "react-ga";

const { Text, Link } = Typography;

const CustomDivider = styled(Divider)`
  margin: 12px 0px;
`;

const HeadDiv = styled.div`
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
const TimeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

const ContentBox = styled.div`
  padding: 8px 8px 0px;
`;
const DescBox = styled.div`
  padding-left: 12px;
  /* display: inline-block; */
`;
const CompanyText = styled.span`
  padding-right: 4px;
  font-weight: 400;
  font-size: 1.3em;
`;

const DescriptionText = styled.span`
  font-weight: 100;
`;
const PositionText = styled.span`
  font-weight: 300;
`;

const ProjectBox = styled.div`
  padding: 2em 0.5em;
  padding-bottom: 0px;
`;
const JobText = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 2.5;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    line-height: 2;
  }
`;

const StatusBadge = styled(Badge)`
  position: relative;
  top: -3px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    top: 0px;
  }
`;

const JobMainText = styled.h4`
  font-weight: 800;

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 4000px) {
    font-size: 1.4em;
  }
`;

type Props = {};
const History: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        padding: screens.xl ? "0px" : "20px",
      }}
      // style={pageStyle}
    >
      <HeadMeta
        title="JW Resume"
        text="JW Resume"
        keywords="FrontEnd Developer React"
        description="JW Resume"
      />
      <Card
        style={{
          padding: "6px 0px",
          borderRadius: 12,
          margin: 20,
          // margin: isDeviceSize === 'desktop' ? '40px' : 0,
          // marginBottom: isDeviceSize === 'desktop' ? 0 : 30
        }}
        bodyStyle={{
          padding: screens.md ? "24px 24px 0px" : "14px 14px 0px",
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Timeline>
              <Timeline.Item color="green">
                <Card
                  style={{ borderRadius: 12 }}
                  bodyStyle={{
                    padding: screens.md ? 24 : 18,
                  }}
                >
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2019.12 ~ 현재</TimeText>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="processing"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: "2px 6px",
                          background: "transparent",
                        }}
                      >
                        재직&이직준비
                      </Tag>
                    </Col>
                  </Row>

                  <ContentBox>
                    <motion.div
                      className="container"
                      variants={FastContainerStyle}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <HeadDiv>
                        <motion.div variants={ItemStyle}>
                          <Avatar
                            shape="circle"
                            size={50}
                            src={require("../assets/images/company/gint.png")}
                          />
                        </motion.div>

                        <DescBox>
                          <motion.div variants={ItemStyle}>
                            <CompanyText>GINT</CompanyText>
                          </motion.div>
                          {/* <DescriptionText>(수원시)</DescriptionText> */}
                          <motion.div variants={ItemStyle}>
                            <Text strong>직책 :</Text>
                            <PositionText>
                              서비스플랫폼 선임 연구원
                            </PositionText>
                            <Divider
                              style={{ borderWidth: 3 }}
                              type="vertical"
                            />
                            <Text strong>포지션 :</Text>
                            <PositionText>
                              {" "}
                              프론트엔드 개발자(Client)
                            </PositionText>
                          </motion.div>
                        </DescBox>
                      </HeadDiv>
                      <Row>
                        <Col span={24}>
                          <ProjectBox>
                            <motion.div variants={ItemStyle}>
                              <JobMainText>
                                <StatusBadge status="processing" /> Gint Connect
                                Telematics 플랫폼 개발 (2019.12 ~ 현재)
                              </JobMainText>
                              <JobText>
                                <Text underline strong>
                                  개발언어 : React(TypeScript) / Mobx /
                                  AntDesign / Appsync(Apollo)
                                </Text>
                                <br />
                                - Gint-Connect 단말기로 쌓여진 트랙터 데이터를
                                이용한 Web Admin 어플리케이션 개발
                                <br />
                                - AWS lambda / Aws DynamoDB를 이용해 개발된 API
                                기준
                                <br /> -{" "}
                                <Text underline strong>
                                  React SPA Application 개발환경 부터 S3 Bucket
                                  Product 환경
                                </Text>
                                까지 구성 및 개발 진행 <br />
                                -TypeScript 적용. 컴파일 단계 타입체크 및 1차적
                                문법에러 처리, 런타임 단계 타입 안정성 보장
                                <br />
                                - React / Amplify / Ant design /
                                styled-components 등 사용 <br />-
                                AppSync(GraphQL) 을 통한 Subscription 기반
                                소켓통신 및 실시간 알림 및 실시간 데이터 변경
                                처리 <br />- AppSync VTL 코드 작성 <br />
                                - Mobx를 이용한 Observer패턴 상태 관리 및
                                비즈니스 로직 분산 개발. <br />- 오픈소스
                                Chart.js를 이용한 통계 관련 Data Visualization{" "}
                                <br />- GitLab CI / CD 를 통한 Docker Container
                                build test / e2e test / Deploy PipeLine 작성 및
                                자동화 구성 <br />- Lottie를 이용한 Animate
                                Loading <br />- AWS S3 / CloudFront를 이용한
                                프로덕션 빌드 결과물 배포 <br />- Cypress를
                                이용한 e2e test code 작성 및 테스트 자동화{" "}
                                <br />- 디자이너의 와이어프레임을 참고하여
                                StoryBook 으로 UX / UI 문서화 진행. <br />-
                                서비스 기획 회의 및 요구사항도출 문서화 <br />
                              </JobText>
                            </motion.div>
                            <CustomDivider />

                            <motion.div variants={ItemStyle}>
                              <JobMainText>
                                <StatusBadge status="success" /> 국립농원과학원
                                봉군형성실 Web Console 개발( 2020.01 ~ 현재 )
                              </JobMainText>
                              <JobText>
                                - {""}
                                <Text underline strong>
                                  개발언어 : React / Material UI
                                </Text>
                                <br />- 국립농업과학원 봉군형성실 iot Project의
                                web console 개발진행 <br />- Flask / mysql 로
                                개발된 서버의 API 를 가지고 클라이언트 개발{" "}
                                <br />- 실시간 데이터 fetching 처리 및 Data
                                Visualization 개발
                              </JobText>
                            </motion.div>
                            <CustomDivider />
                            <motion.div variants={ItemStyle}>
                              <JobMainText>
                                <StatusBadge status="success" /> 국립농원과학원
                                봉군형성실 Mobile App 개발(2020.03 ~ 2020.06)
                              </JobMainText>
                              <JobText>
                                - {""}
                                <Text underline strong>
                                  개발언어 : React Native / NativeBase / Victory
                                  Chart
                                </Text>
                                <br />
                                - 국립 농과원 web project 기반 React Native로
                                App 개발 진행 <br />- Flask / mysql 로 개발된
                                서버의 API 를 가지고 클라이언트 개발
                              </JobText>
                            </motion.div>
                            <CustomDivider />

                            <motion.div variants={ItemStyle}>
                              <JobMainText>
                                <StatusBadge status="success" /> 충남대학교
                                농업동력 테스트 프로젝트(2020.02 ~ 2020.03)
                              </JobMainText>
                              <JobText>
                                - {""}
                                <Text underline strong>
                                  개발언어 : React / AntDesign
                                </Text>
                                <br />- 충남대학교 트랙터 동력 테스트 Web
                                console 개발 <br />- Aws lambda / sqs 서비스를
                                이용해 제작된 API를 가지고 클라이언트 개발{" "}
                                <br />- 위치 데이터 입출력 처리(csv 1만개 이상
                                데이터) 및 이동경로 지도 표시 <br />- 데이터
                                관리 및 실험 관리 개발
                              </JobText>
                            </motion.div>
                          </ProjectBox>
                        </Col>
                      </Row>
                    </motion.div>
                  </ContentBox>
                </Card>
              </Timeline.Item>
              <Timeline.Item>
                <Card style={{ borderRadius: 12 }}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2018.05 ~ 2019.09</TimeText>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="magenta"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: "2px 6px",
                          background: "transparent",
                        }}
                      >
                        계약만료
                      </Tag>
                    </Col>
                  </Row>

                  <ContentBox>
                    <motion.div
                      className="container"
                      variants={FastContainerStyle}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <HeadDiv>
                        <motion.div variants={ItemStyle}>
                          <Avatar
                            shape="circle"
                            size={50}
                            src={require("../assets/images/company/xhift.png")}
                          />
                        </motion.div>
                        <DescBox>
                          <motion.div variants={ItemStyle}>
                            <CompanyText>XHIFT</CompanyText>
                          </motion.div>

                          <motion.div variants={ItemStyle}>
                            <Text strong>직책 :</Text>
                            <PositionText> 개발팀 연구원</PositionText>
                            <Divider
                              style={{ borderWidth: 3 }}
                              type="vertical"
                            />
                            <Text strong>포지션 :</Text>
                            <PositionText>
                              {" "}
                              프론트엔드 개발자(Client)
                            </PositionText>
                          </motion.div>
                        </DescBox>
                      </HeadDiv>

                      <Row>
                        <Col span={24}>
                          <ProjectBox>
                            <JobMainText>
                              <StatusBadge status="success" /> 알티캐스트 & KT
                              셋탑 키즈랜드 2.0 프로젝트 (2018.05~2018.10)
                            </JobMainText>
                            <JobText>
                              -{" "}
                              <Link
                                href="https://www.mk.co.kr/news/special-edition/view/2018/12/777042/"
                                target="_blank"
                              >
                                실제 서비스 관련 기사
                              </Link>
                              <br />- {""}
                              <Text underline strong>
                                개발언어 : Javascript
                              </Text>
                              <br />- 알티캐스트 & KT IPTV ACAP 미들웨어
                              어플리케이션 개발
                              <br />- 셋탑 어플리케이션 모듈 키즈랜드2.0
                              프로젝트 <br />
                              - 전체적인 UI 변경 및 voiceable 로직 추가
                              <br />
                              - QA테스트를 통한 이슈사항 관리 및 송출 전 안정화
                              <br />- 관련 기사
                              https://www.mk.co.kr/news/special-edition/view/2018/12/777042/
                            </JobText>

                            <CustomDivider />

                            <JobMainText>
                              <StatusBadge status="success" /> KT 기가지니
                              "미봇" POC 프로젝트 (2018.05 ~ 2018.10)
                            </JobMainText>
                            <JobText>
                              - {""}
                              <Text underline strong>
                                개발언어 : Javascript
                              </Text>
                              <br />
                              - KT 기가지니 "미봇" 테스트용 프로젝트 진행
                              <br />- KT 셋탑 기가지니의 챗봇 관련 front 단 로직
                              및 UI/UX 적용 개발 진행
                              <br />- 셋탑 사양 대비 애니메이션 추가로 인한
                              효율적 소스 관리
                            </JobText>

                            <CustomDivider />

                            <JobMainText>
                              <StatusBadge status="success" /> 알티캐스트 & KT
                              셋탑 Voice UI 프로젝트(2019.05~2019.09)
                            </JobMainText>
                            <JobText>
                              - {""}
                              <Text underline strong>
                                개발언어 : Javascript
                              </Text>
                              <br />
                              - 알티캐스트 - KT IPTV ACAP 셋탑 어플리케이션 개발
                              <br />
                              - 결제 Voiceable 과 연동하여 자동 추천 및 할인율,
                              쿠폰 여부 에 따른 자동안내 로직 개발
                              <br />- 제플린 UI 가이드를 통한 View 개발
                            </JobText>

                            <CustomDivider />

                            <JobMainText>
                              <StatusBadge status="success" /> 알티캐스트 & KT
                              셋탑 키즈랜드 2.0 고도화 프로젝트(2018.12 ~
                              2019.04)
                            </JobMainText>
                            <JobText>
                              - {""}
                              <Text underline strong>
                                개발언어 : Javascript
                              </Text>
                              <br />
                              - 알티캐스트 - KT IPTV ACAP 셋탑 어플리케이션 모듈
                              키즈랜드 v2.0 안정화 프로젝트
                              <br />- 결제 관련 부분 UI 및 로직 담당
                            </JobText>
                          </ProjectBox>
                        </Col>
                      </Row>
                    </motion.div>
                  </ContentBox>
                </Card>
              </Timeline.Item>
              {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Technical testing 2015-09-01
      </Timeline.Item> */}
              <Timeline.Item>
                <Card style={{ borderRadius: 12 }}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2017.04 ~ 2018.04</TimeText>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="magenta"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: "2px 6px",
                          background: "transparent",
                        }}
                      >
                        계약만료
                      </Tag>
                    </Col>
                  </Row>

                  <ContentBox>
                    <motion.div
                      className="container"
                      variants={FastContainerStyle}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <HeadDiv>
                        <Avatar
                          shape="circle"
                          size={50}
                          src={require("../assets/images/company/nanumict.png")}
                        />
                        <DescBox>
                          <motion.div variants={ItemStyle}>
                            <CompanyText>나눔 ICT </CompanyText>
                          </motion.div>

                          <motion.div variants={ItemStyle}>
                            <Text strong>직책 :</Text>
                            <PositionText>공공SI 개발팀 사원</PositionText>
                            <Divider
                              style={{ borderWidth: 3 }}
                              type="vertical"
                            />
                            <Text strong>포지션 :</Text>
                            <PositionText>
                              {" "}
                              풀스택 개발자(Server & Client)
                            </PositionText>
                          </motion.div>
                        </DescBox>
                      </HeadDiv>
                      <Row>
                        <Col span={24}>
                          <ProjectBox>
                            <JobMainText>
                              <StatusBadge status="success" /> 오산시 공공기관
                              오산백년 시민대학 시스템 구축
                              프로젝트(2017.04~2018.01)
                            </JobMainText>
                            <JobText>
                              -{" "}
                              <Link
                                href="https://www.osan.go.kr/osanedu/"
                                target="_blank"
                              >
                                실제 서비스 링크
                              </Link>{" "}
                              <br />- {""}
                              <Text underline strong>
                                개발언어 : Spring MVC / Ibatis / HTML & CSS &
                                JQuery
                              </Text>
                              <br />
                              - 요구사항 도출 및 화면 설계
                              <br />
                              - 화면 설계를 통한 자료 사전 및 도메인 정의,
                              ERD작성
                              <br />
                              - 관리자 서버 & 사용자 서버 분리 개발.
                              <br />
                              - End 유저(시민) Web Client 개발 (HTML / CSS /
                              JQuery / JSP)
                              <br />
                              - 관리자(배너, 게시물 관리, 사업관리, 권한 관리,
                              통계, 접속 로그, 회원관리, 예약관리, 공통코드관리
                              등) 화면 및 시스템 개발
                              <br />
                              - 형상 관리(SVN), 젠킨스 CI / CD
                              <br />
                              - 리포팅 툴을 통한 관리자 통합 분석 및 보고서
                              제공(ClipReport 솔루션 사용)
                              <br />
                              - 웹표준/웹접근성 관리
                              <br />
                            </JobText>
                            <CustomDivider />

                            <JobMainText>
                              <StatusBadge status="success" /> 경기도시공사
                              인터넷청약시스템 구축 프로젝트(2017.12 ~2018.04)
                            </JobMainText>
                            <JobText>
                              -{" "}
                              <Link
                                href="https://apply.gico.or.kr/"
                                target="_blank"
                              >
                                실제 서비스 링크
                              </Link>{" "}
                              <br />- {""}
                              <Text underline strong>
                                개발언어 : Spring(Java) / Ibatis / HTML & CSS &
                                JQuery
                              </Text>
                              <br />
                              - 경기도 및 경기도시공사에서 성공적으로 진행중인
                              따복하우스 사업을 인터넷시스템으로 구축 <br />
                              - 전자정부프레임워크, Tibero, ibatis,
                              jQuery,Netfunnel,Dguard <br />
                              - 12월 중순 1차 인터넷 청약신청시스템 선 구축 후
                              운영 및 실시간 데이터를 통한
                              <br />
                              - 경쟁률 및 현황 분석을 제공 및 민원사항 수렴 후
                              빠른 조치 제공
                              <br />
                              - 분석단계 SH/LH 컨설팅 및 선진사례도출 &gt; RFP,
                              제안서 기반 요구사항 / 추적표 / 과업대비표 /
                              도메인정의 도출 &gt; 설계단계
                              <br />
                              – 유즈케이스 / 화면UI설계서 자료 도출
                              <br />- UI설계서를 위한 Nexacro를 사용한 화면 설계
                            </JobText>
                          </ProjectBox>
                        </Col>
                      </Row>
                    </motion.div>
                  </ContentBox>
                </Card>
              </Timeline.Item>

              <Timeline.Item>
                <Card style={{ borderRadius: 12 }}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2016.09 ~ 2017.03</TimeText>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="green"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: "2px 6px",
                          background: "transparent",
                        }}
                      >
                        수료
                      </Tag>
                    </Col>
                  </Row>

                  <ContentBox>
                    <motion.div
                      className="container"
                      variants={FastContainerStyle}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <HeadDiv>
                        <Avatar
                          shape="circle"
                          size={50}
                          src={require("../assets/images/company/bit_logo.png")}
                        />
                        <DescBox>
                          <CompanyText>비트 캠프</CompanyText>
                          {/* <DescriptionText>(수원)</DescriptionText> */}
                          <div>
                            <PositionText>
                              JAVA 기반 웹표준/웹프로그래밍 개발자 양성과정
                            </PositionText>
                          </div>
                        </DescBox>
                      </HeadDiv>
                      <Row>
                        <Col span={24}>
                          <ProjectBox>
                            <JobMainText>
                              <StatusBadge status="success" /> 웹 서버 &
                              클라이언트 프로그래밍 과정 수료(2016.09 ~ 2017.03)
                            </JobMainText>

                            <JobText>
                              -{" "}
                              <Link
                                href="https://github.com/babamba/hotdogEx"
                                target="_blank"
                              >
                                Github Link
                              </Link>{" "}
                              <br />- {""}
                              <Text underline strong>
                                개발언어 :Spring / MyBatis / Maria DB / HTML &
                                CSS & JQuery
                              </Text>
                              <br />
                              - 응용 애플리케이션 개발과정 습득
                              <br />
                              - 졸업프로젝트 : HOT DOG(Pet Cam : Raspberry Pi를
                              이용한 웹/앱 스트리밍 및 커뮤니티) <br />
                            </JobText>
                          </ProjectBox>
                        </Col>
                      </Row>
                    </motion.div>
                  </ContentBox>
                </Card>
              </Timeline.Item>

              <Timeline.Item>
                <Card style={{ borderRadius: 12 }}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2014.06 ~ 2016.06</TimeText>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="magenta"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: "2px 6px",
                          background: "transparent",
                        }}
                      >
                        계약만료
                      </Tag>
                    </Col>
                  </Row>

                  <ContentBox>
                    <motion.div
                      className="container"
                      variants={FastContainerStyle}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <HeadDiv>
                        <Avatar
                          shape="circle"
                          size={50}
                          src={require("../assets/images/company/gico.png")}
                        />
                        <DescBox>
                          <motion.div variants={ItemStyle}>
                            <CompanyText>경기도시공사 </CompanyText>
                          </motion.div>

                          <motion.div variants={ItemStyle}>
                            <Text strong>직책 :</Text>
                            <PositionText>홍보실 사원</PositionText>
                          </motion.div>
                        </DescBox>
                      </HeadDiv>
                      <Row>
                        <Col span={24}>
                          <ProjectBox>
                            <JobMainText>
                              <StatusBadge status="success" /> 사내 홈페이지
                              고도화 (2015.08 ~2016.06)
                            </JobMainText>

                            <JobText>
                              - 홈페이지(전자정부기반) 유지보수 및 고도화 보조
                              <br />
                              - Spring / JSP / Servlet / HTML <br />
                            </JobText>

                            <CustomDivider />
                            <JobMainText>
                              <StatusBadge status="success" /> 홍보실 사무
                              (2014.06 ~2015.08)
                            </JobMainText>

                            <JobText>
                              - 온라인 홍보 모니터링
                              <br />
                              - 언론사 광고비 집행 업무 - 언론사 대응 업무
                              <br />
                              - 사회공헌 활동 등 주요 행사 업무지원
                              <br />- 공사 페이스북 SNS컨텐츠관리
                            </JobText>
                          </ProjectBox>
                        </Col>
                      </Row>
                    </motion.div>
                  </ContentBox>
                </Card>
              </Timeline.Item>

              {/* <Timeline.Item>
                <Card style={{ borderRadius: 12 }}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2012.11 ~ 2013.12</TimeText>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'right' }}>
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="magenta"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: '2px 6px',
                          background: 'transparent'
                        }}
                      >
                        계약만료
                      </Tag>
                    </Col>
                  </Row>
                  <ContentBox>
                    <HeadDiv>
                      <Avatar
                        shape="circle"
                        size={50}
                        src={require('../assets/images/company/doja.png')}
                      />
                      <DescBox>
                        <CompanyText>한국도자재단 </CompanyText>
                        <div>
                          <PositionText>전시교육팀 사원</PositionText>
                        </div>
                      </DescBox>
                    </HeadDiv>
                    <Row>
                      <Col span={24}>
                        <ProjectBox>
                          <JobMainText>
                            <StatusBadge status="success" /> 경기도 지원 교육기부사업 진행 및 운영
                          </JobMainText>

                          <JobText>
                            - 국비지원 사업진행
                            <br />
                            - 외부 단체 워크샵 진행 및 운영
                            <br />- 세계 도자비엔날레 행사 운영
                          </JobText>
                        </ProjectBox>
                      </Col>
                    </Row>
                  </ContentBox>
                </Card>
              </Timeline.Item> */}

              {/* <Timeline.Item>
                <Card style={{ borderRadius: 12 }}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TimeText>2007.02 ~ 2013.02</TimeText>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'right' }}>
                      <Tag
                        // icon={<SyncOutlined spin />}
                        color="green"
                        style={{
                          margin: 0,
                          fontWeight: 300,
                          borderRadius: 8,
                          padding: '2px 6px',
                          background: 'transparent'
                        }}
                      >
                        졸업
                      </Tag>
                    </Col>
                  </Row>
                  <ContentBox>
                    <HeadDiv>
                      <Avatar
                        shape="circle"
                        size={50}
                        src={require('../assets/images/company/knu.png')}
                      />
                      <DescBox>
                        <CompanyText>강남대학교 </CompanyText>
                        <DescriptionText>(수원)</DescriptionText> 
                        <div>
                          <PositionText>산업디자인 학부</PositionText>
                        </div>
                      </DescBox>
                    </HeadDiv>
                  </ContentBox>
                </Card>
              </Timeline.Item> */}
            </Timeline>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default History;
