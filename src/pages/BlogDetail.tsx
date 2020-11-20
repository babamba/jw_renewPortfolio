import React, { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import styled from "styled-components";
import ReactGA from "react-ga";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Typography, PageHeader, Layout, Skeleton, Grid, Card } from "antd";

import { pageVariants, pageTransition, ContainerStyle } from "interfaces/Motion";
import { BlogPost } from "interfaces/post";
import { ContentfulService } from "core/contentful";
import COLOR from "core/colors";
import HeadMeta from "components/Helmet/HeadMeta";
import { useRouter } from "hooks/useRouter";
import { useStore } from "hooks/useStore";

const PostContainer = styled.div`
  padding: 18px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    padding: 0px 20px;
    margin: 0px;
  }
`;

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  out: { y: 20, opacity: 0, transition: { duration: 0.6, ease: easing } },
  in: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  out: {
    x: -5,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  in: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};
interface MatchParams {
  id: string;
}

const PostPage: FC<RouteComponentProps<MatchParams>> = ({ history, match, location }) => {
  const { useDark } = useStore("common");
  const router = useRouter();
  const screens = Grid.useBreakpoint();
  const contentfulService = new ContentfulService();
  const [article, setArticle] = useState<BlogPost | undefined>();

  useEffect(() => {
    getPost(match.params.id);
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  const getPost = async postId => {
    const getArticle: any = await contentfulService.getPostById(postId);
    setArticle(getArticle);
  };

  return (
    <Layout.Content>
      <HeadMeta
        title={`${article?.title}`}
        text={`${article?.title}`}
        keywords={`${article?.title}`}
        description="JW BLOG"
        url={`blog/${article?.title}`}
      />

      <motion.div
        className="container"
        variants={ContainerStyle}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          style={{
            position: "absolute",
            width: "100%",
            padding: screens.xl ? "0px" : "20px"
          }}
        >
          <PostContainer className="post">
            {article === undefined ? (
              <>
                <motion.button
                  variants={backVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => history.push("/blog")}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    cursor: "pointer"
                  }}
                >
                  <PageHeader
                    onBack={() => history.push("/blog")}
                    className="site-page-header"
                    title="이전 페이지"
                    style={{ background: "transparent", padding: "12px 0px" }}
                    // subTitle="이전 페이지"
                  />
                </motion.button>
                <Skeleton active paragraph={{ rows: 1 }} />
                <Skeleton.Avatar active size={24} shape="square" />
                <Skeleton active paragraph={{ rows: 10 }} />
              </>
            ) : (
              <>
                <motion.button
                  variants={backVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => history.push("/blog")}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    cursor: "pointer"
                  }}
                >
                  <PageHeader
                    onBack={() => history.push("/blog")}
                    className="site-page-header"
                    title="이전 페이지"
                    style={{ background: "transparent", padding: "12px 0px" }}
                    // subTitle="이전 페이지"
                  />
                </motion.button>
                {/* </motion.div> */}
                <Card
                  style={{
                    textAlign: "center",
                    borderRadius: 12,
                    border: 0,
                    transition: "box-shadow .3s",
                    boxShadow: useDark ? "none" : `0px 0px 20px 1px ${COLOR.BLOG_CARD_SHADOW}`
                  }}
                  bodyStyle={{
                    padding: 24
                  }}
                >
                  <motion.div variants={textVariants} style={{ textAlign: "left" }}>
                    <Typography.Title
                      style={{ fontFamily: "NEXON Lv2 Gothic Bold", letterSpacing: -1.8 }}
                    >
                      {article?.title}
                    </Typography.Title>
                    <div className="author">
                      <p>Written by {article?.author.name}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={textVariants}>
                    <ReactMarkdown className="markdown" source={article?.body} />
                  </motion.div>
                </Card>
              </>
            )}
          </PostContainer>
        </motion.div>
      </motion.div>
    </Layout.Content>
  );
};

export default withRouter(observer(PostPage));
