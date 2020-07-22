import React, { FunctionComponent, useState, useEffect } from 'react';
import { ContentfulService } from '../core/contentful';
import { BlogPost } from '../interfaces/post';
import { observer } from 'mobx-react';
import useStores from '../hooks/useStores';
import BlogCard from '../components/Card/BlogCard';
import { Row, Col, List, Pagination, Divider, Card as CardView, Skeleton, Empty } from 'antd';
import useWindowSize from '../hooks/useWindow';
import HeadMeta from '../components/Helmet/HeadMeta';
import { pageTransition, pageVariants, FastContainerStyle, ItemStyle } from '../interfaces/Motion';
import { motion } from 'framer-motion';
import { useRouter } from '../hooks/useRouter';
import ReactGA from 'react-ga';

interface PostPageProps {
  entries: BlogPost[];
  tags: { id: string; name: string }[];
  url: any;
  total: number;
  skip: number;
  limit: number;
  page?: number;
  totalCount: number;
}

const Post: FunctionComponent<any> = observer(() => {
  const router = useRouter();
  const {
    common: { currentPage, setBlogPage }
  } = useStores();
  const windowSize = useWindowSize();

  const [isDeviceSize, SetIsDeviceSize] = useState('desktop');
  useEffect(() => {
    if (windowSize.width !== undefined) {
      if (windowSize.width < 769) {
        SetIsDeviceSize('mobile');
      } else if (windowSize.width < 1201) {
        SetIsDeviceSize('tablet');
      } else {
        SetIsDeviceSize('desktop');
      }
    }
  }, [windowSize]);
  const [selectTag, updateTag] = useState('');
  const [loading, setLoading] = useState(false);

  const [responsivePageSize, setResponsivePageSize] = useState(8);

  const [pagination, setPagination] = useState({
    total: 1,
    page: currentPage,
    pageSize: responsivePageSize
  });

  useEffect(() => {
    console.log('pagination : ', pagination);
    console.log('currentPage : ', currentPage);
  }, []);

  const [content, setContent] = useState({
    page: currentPage,
    tags: [
      {
        id: '',
        name: ''
      }
    ],
    entries: [],
    total: 0,
    skip: 0,
    limit: 0
  });

  useEffect(() => {
    fetch(currentPage, '');
    console.log('currentPage : ', currentPage);
  }, [windowSize.width]);

  useEffect(() => {
    window.dispatchEvent(new Event('scroll'));
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    return () => {
      console.log('unmount');
      setBlogPage(1);
    };
  }, []);

  const setPage = async param => {
    setPagination({
      total: param.totalCount,
      page: param.selectPage,
      pageSize: param.responsivePageSize
    });
  };

  const fetch = async (selectPage: number, selectTag: string = '') => {
    setLoading(true);
    const contentfulService = new ContentfulService();
    // const { tags } = await contentfulService.getAllTags();
    const totalCount = await contentfulService.getAllEntriesCount({
      tag: selectTag ? selectTag.toString() : ''
    });

    await setPage({
      totalCount,
      selectPage,
      responsivePageSize
    });

    const result: any = await contentfulService.getBlogPostEntries({
      tag: selectTag ? selectTag.toString() : '',
      skip: (selectPage - 1) * responsivePageSize,
      limit: responsivePageSize
    });

    if (result) {
      setContent(result);
    }

    setLoading(false);
  };

  const onHandlePaging = (page: number) => {
    setBlogPage(page);
    // updatePage(page);
    fetch(page, selectTag);
  };
  const handleTagChosen = tag => {
    updateTag(tag.id);
    fetch(1, tag.id);
  };

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
      <HeadMeta text="BLOG" />
      <CardView
        style={{
          borderRadius: 12,
          marginBottom: isDeviceSize === 'desktop' ? 0 : 30,
          margin: isDeviceSize === 'desktop' ? '32px' : 0
        }}
        bodyStyle={{
          padding: '18px'
        }}
      >
        <Divider orientation="left" style={{ marginTop: 0 }}>
          Blog
        </Divider>
        <Row>
          <Col span={24}>
            <Row style={{ paddingBottom: 20 }}>
              {/* <Col span={12} style={{ alignSelf: 'center' }}>
                <TagFilters
                  tags={content.tags}
                  updatePage={handleTagChosen}
                  selectedTagId={selectTag}
                />
              </Col> */}
              <Col span={24} style={{ textAlign: 'right', alignSelf: 'center' }}>
                <Pagination
                  {...pagination}
                  onChange={onHandlePaging}
                  size="small"
                  defaultCurrent={pagination.page}
                />
              </Col>
            </Row>
            <motion.div
              className="container"
              variants={FastContainerStyle}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {content.entries === undefined ? (
                <Empty description="포스팅 글이 없네요 :D" />
              ) : content.entries.length > 0 ? (
                <List
                  loading={loading}
                  grid={{
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 4,
                    xl: 4,
                    xxl: 4
                  }}
                  dataSource={content.entries}
                  renderItem={(item: any) => {
                    return (
                      <List.Item>
                        <motion.div variants={ItemStyle}>
                          <BlogCard info={item} />
                        </motion.div>
                      </List.Item>
                    );
                  }}
                />
              ) : (
                <List
                  grid={{
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 4,
                    xl: 4,
                    xxl: 4
                  }}
                >
                  <List.Item>
                    <Skeleton active />
                  </List.Item>
                  <List.Item>
                    <Skeleton active />
                  </List.Item>
                </List>
              )}
            </motion.div>
          </Col>
        </Row>
      </CardView>
    </motion.div>
  );
});

export default Post;
