import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import styled from "styled-components";
import ReactGA from "react-ga";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Typography, PageHeader, Skeleton, Grid, Card } from "antd";
import { pageVariants, pageTransition } from "@interfaces/Motion";
import { BlogPost } from "@interfaces/post";
import { ContentfulService } from "@core/contentful";
import COLOR from "@core/colors";
import HeadMeta from "@components/Helmet/HeadMeta";
import { useRouter } from "@hooks/useRouter";
import { useAppSelector } from "@store/useAppStore";

const PostContainer = styled.div`
  padding: 20px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    padding: 0px;
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
  const { useDark } = useAppSelector(state => state.appStore);
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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: screens.lg ? "0px" : "20px"
      }}
    >
      <HeadMeta
        title={`${article?.title}`}
        text={`${article?.title}`}
        keywords={`${article?.title}`}
        description="JW BLOG"
        url={`blog/${article?.title}`}
      />

      <PostContainer className="post">
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

        <Card
          style={{
            textAlign: "center",
            borderRadius: 12,
            border: 0,
            transition: "box-shadow .3s",
            boxShadow: useDark ? "none" : `0px 0px 20px 1px ${COLOR.BLOG_CARD_SHADOW}`,
            background: useDark ? "rgba(36, 36, 36, 1)" : "rgba(240, 240, 240, 1)"
          }}
          bodyStyle={{
            padding: 24
          }}
        >
          {article === undefined ? (
            <>
              <Skeleton active paragraph={{ rows: 1 }} />
              <Skeleton.Avatar active size={24} shape="square" />
              <Skeleton active paragraph={{ rows: 10 }} />
            </>
          ) : (
            <>
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
            </>
          )}
        </Card>
      </PostContainer>
    </motion.div>
  );
};

export default withRouter(PostPage);
