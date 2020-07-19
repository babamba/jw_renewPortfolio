import React, { FunctionComponent, useEffect, useState } from "react";
import { Row, Col, Typography, Avatar } from "antd";
import useWindowSize from "../../../hooks/useWindow";
import ReactRotatingText from "react-rotating-text";
import { GithubOutlined } from "@ant-design/icons";
import styled from "styled-components";
import useStores from "../../../hooks/useStores";

const MainIntroText = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  opacity: 0.5;
  margin: 0;
  line-height: 1.5;
`;

const MainIntroSmallText = styled.h1`
  font-weight: 300;
  font-size: 1.7rem;
  opacity: 0.5;
  margin: 0;
  line-height: 1.5;
`;
const SubIntroSmallText = styled.h1`
  font-weight: 300;
  font-size: 1rem;
  opacity: 0.7;
  margin: 0;
  line-height: 1.5;
  overflow: visible;
  white-space: nowrap;
`;

const SubIntroText = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
  opacity: 0.7;
  margin: 0;
  line-height: 1.5;
  overflow: visible;
  white-space: nowrap;
  padding-left: 6px;
  @media only screen and (min-width: 400px) and (max-width: 799px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 800px) and (max-width: 924px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 925px) and (max-width: 1037px) {
    font-size: 2rem;
  }
`;

type Props = {};
const MyProfile: FunctionComponent<Props> = (props: Props) => {
  const {
    common: { useDark },
  } = useStores();

  const size = useWindowSize();
  const [ResponsiveFlex, setResponsiveFlex] = useState(false);
  useEffect(() => {
    // console.log('size : ', size);
    if (size.width !== undefined) {
      if (size.width < 1201) {
        setResponsiveFlex(true);
      } else {
        setResponsiveFlex(false);
      }
    }
  }, [size]);

  return (
    <>
      <Row
        style={{
          alignItems: "center",
          padding: "1.5rem 2rem",
          paddingBottom: ResponsiveFlex ? "1rem" : "0",
        }}
        align="middle"
        justify={ResponsiveFlex ? "start" : "start"}
      >
        <Col
          style={{
            flexDirection: ResponsiveFlex ? "row" : "column",
            padding: 8,
          }}
        >
          <div>
            <Avatar
              size={ResponsiveFlex ? 50 : 100}
              src={require("../../../assets/images/me.png")}
            />

            <Typography.Title
              style={{
                display: ResponsiveFlex ? "inline" : "block",
                margin: ".5em 0",
                padding: 0,
                fontWeight: 300,
                fontSize:
                  size.width !== undefined && size.width > 480
                    ? "1.4em"
                    : "1em",
                lineHeight: 1.4,
                textAlign: "center",
                marginLeft: ResponsiveFlex ? 15 : 0,
              }}
            >
              JW{" "}
              <Typography.Link
                style={{ color: useDark ? "white" : "black" }}
                href="https://github.com/babamba"
                target="_blank"
              >
                <GithubOutlined />
              </Typography.Link>
            </Typography.Title>
          </div>
          <Typography.Paragraph
            style={{
              fontSize: "1em",
              // margin: '.1em 0 .6em',
              display: "inline-block",
              fontStyle: "italic",
              padding: "6px 10px",
              background: "rgba(152,44,255, .8)",
              color: "#d9d9d9",
              // background: '#faf46a',
              // color: 'rgba(51, 68, 85,.7)',
              borderRadius: 4,
              lineHeight: 1,
              width: "100%",
              textAlign: "center",
              marginTop: ResponsiveFlex ? 10 : 0,
              marginBottom: 0,
            }}
          >
            Js Developer
          </Typography.Paragraph>
        </Col>

        {ResponsiveFlex ? (
          <Col style={{ flexDirection: "column", paddingLeft: "1em" }}>
            <MainIntroSmallText>안녕하세요.</MainIntroSmallText>
            <SubIntroSmallText>개발자 김진원입니다.</SubIntroSmallText>
          </Col>
        ) : (
          <Col
            style={{
              flexDirection: "column",
              paddingLeft:
                size.width !== undefined && size.width > 1513 ? "2.5em" : 0,
            }}
            span={size.width !== undefined && size.width > 1513 ? 17 : 24}
          >
            <MainIntroText>안녕하세요.</MainIntroText>
            <SubIntroText>
              <ReactRotatingText items={["Front"]} />
              {/* <ReactRotatingText items={['Front', 'React', 'UI', 'Back', '진지한', '배고픈']} /> */}
              개발자 김진원입니다.
            </SubIntroText>
          </Col>
        )}
      </Row>
    </>
  );
};

export default MyProfile;
