import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentfulService } from '../core/contentful';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { BlogPost } from '../interfaces/post';
import { motion } from 'framer-motion';
import { Typography, PageHeader, Layout, List, Skeleton } from 'antd';
import styled from 'styled-components';
import {
  pageDetailVariants,
  pageDetailTransition,
  DetailContainerStyle
} from '../interfaces/Motion';
import HeadMeta from '../components/Helmet/HeadMeta';
import { useRouter } from '../hooks/useRouter';
import ReactGA from 'react-ga';

const PostContainer = styled.div`
  padding: 0px 110px 40px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    padding: 0px 50px 40px;
  }
`;

// type Props = {
//   article: BlogPost;
//   suggestedArticles: BlogPost[];
// };

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  out: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  in: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  out: {
    x: 100,
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

interface Props extends RouteComponentProps {
  //   article: BlogPost;
  //suggestedArticles: BlogPost[];
}

interface MatchParams {
  id: string;
}

// interface PostState {
//   article?: ;
// }

const PostPage: FC<RouteComponentProps<MatchParams>> = ({ history, match, location }) => {
  const router = useRouter();
  const contentfulService = new ContentfulService();
  const [article, setArticle] = useState<BlogPost>();

  useEffect(() => {
    getPost(match.params.id);
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
  }, []);

  const getPost = async postId => {
    const article: any = await contentfulService.getPostById(postId);
    // console.log('new article : ', article);
    setArticle(article);
  };

  return (
    <Layout.Content>
      <HeadMeta text={`${article?.title}`} />
      <motion.div
        className="container"
        variants={DetailContainerStyle}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageDetailVariants}
          transition={pageDetailTransition}
          style={{
            position: 'absolute',
            width: '100%'
          }}
        >
          <PostContainer className="post">
            {article === null && <Skeleton />}
            {/* <motion.div v */}
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() => history.push('/blog')}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none'
              }}
            >
              <PageHeader
                onBack={() => history.push('/blog')}
                className="site-page-header"
                title="이전 페이지"
                style={{ background: 'transparent', padding: '12px 0px' }}
                // subTitle="이전 페이지"
              />
            </motion.button>
            {/* </motion.div> */}
            <motion.div variants={textVariants}>
              <Typography.Title level={1}>{article?.title}</Typography.Title>
              <div className="author">
                <p>Written by {article?.author.name}</p>
              </div>
            </motion.div>
            <motion.div variants={textVariants}>
              <ReactMarkdown className="markdown" source={article?.body} />
            </motion.div>
          </PostContainer>
          {/* <div className="suggestions">{renderCards(props.suggestedArticles)}</div> */}
        </motion.div>
      </motion.div>
    </Layout.Content>
  );
};

export default withRouter(PostPage);
