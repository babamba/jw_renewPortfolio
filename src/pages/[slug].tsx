import { NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Router from 'next/router';
import LayoutMeta from '../../shared/components/layout/layout.component';
import { ContentfulService } from '../../core/contentful';

import { BlogPost } from '../../interfaces/post';
import { MetaTags, PageType, RobotsContent } from '../../interfaces/meta-tags';
import Card from '../../shared/components/card/card.component';
import { motion } from 'framer-motion';
import { Typography, PageHeader, Layout, List } from 'antd';
import styled from '../components/App/Me/node_modules/styled-components';

const PostContainer = styled.div`
  padding: 40px 200px;

  @media only screen and (min-width: 200px) and (max-width: 992px) {
    padding: 0px 50px;
  }
`;

type Props = {
  article: BlogPost;
  suggestedArticles: BlogPost[];
};

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

// const renderCards = (suggestions) =>
//   suggestions.map((suggestion, index) => <Card key={index} info={suggestion} />);
const PostPage: NextPage<Props, any> = (props: Props) => {
  const postMetaTags: MetaTags = {
    canonical: `${process.env.DOMAIN_PUBLIC}`,
    description: `${props.article.description}`,
    // contentful does not set the http or https before an image link, so we need to add it ourselves
    image: `https:${props.article.heroImage.url}`,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `${props.article.title}`,
    type: PageType.article,
  };

  // console.log('post title : ', props.article);

  return (
    <LayoutMeta metaTags={postMetaTags}>
      <Layout.Content>
        <motion.div initial="exit" animate="enter" exit="exit">
          <PostContainer className="post">
            <motion.div variants={backVariants}>
              <PageHeader
                className="site-page-header"
                onBack={() => Router.back()}
                title="이전 페이지"
                // subTitle="이전 페이지"
              />
            </motion.div>
            <motion.div variants={textVariants}>
              <Typography.Title level={1}>{props.article.title}</Typography.Title>
              <div className="author">
                <p>Written by {props.article.author.name}</p>
              </div>
            </motion.div>
            <motion.div variants={textVariants}>
              <ReactMarkdown className="markdown" source={props.article.body} />
            </motion.div>
          </PostContainer>
          {/* <div className="suggestions">{renderCards(props.suggestedArticles)}</div> */}
        </motion.div>
      </Layout.Content>
      {/* <motion.div variants={imageVariants}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          size="small"
          dataSource={props.suggestedArticles}
          renderItem={(item: any) => {
            return (
              <List.Item>
                <Card info={item} />
              </List.Item>
            );
          }}
        />
      </motion.div> */}
    </LayoutMeta>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const contentfulService = new ContentfulService();

  const { slug } = query;

  const article = await contentfulService.getPostBySlug(slug);

  const tags = article.tags ? article.tags.map((tag) => tag.sys.id) : [];

  const suggestedArticles = await contentfulService.fetchSuggestions(tags, article.slug);

  return { article, suggestedArticles };
};

export default PostPage;
