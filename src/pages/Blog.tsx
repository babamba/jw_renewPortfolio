import { useState, useEffect } from "react";
import ReactGA from "react-ga";
import {
  Row,
  Col,
  List,
  Pagination,
  Divider,
  Card as CardView,
  Skeleton,
  Empty,
  Grid,
  Spin
} from "antd";

import { motion } from "framer-motion";

import { useRouter } from "@hooks/useRouter";

import { ContentfulService } from "@core/contentful";
import COLOR from "@core/colors";

import { pageTransition, pageVariants, ItemStyle, ContainerStyle } from "@interfaces/Motion";

import BlogCard from "@components/Card/BlogCard";
import HeadMeta from "@components/Helmet/HeadMeta";
import LottieLoader from "@components/Loader/LottieLoader";
import { useAppSelector, useAppDispatch } from "@store/useAppStore";
import { setCurrentPage } from "@store/appStore";

const Post = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { useDark, currentPage } = useAppSelector(state => state.appStore);

  const screens = Grid.useBreakpoint();
  const [selectTag, updateTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 1,
    page: currentPage,
    pageSize: 12
  });

  const [content, setContent] = useState({
    page: currentPage,
    tags: [
      {
        id: "",
        name: ""
      }
    ],
    entries: [],
    total: 0,
    skip: 0,
    limit: 0
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    return () => {
      dispatch(setCurrentPage(1));
    };
  }, []);

  useEffect(() => {
    if (Object.keys(screens).length > 0) {
      console.log("screens: ", screens);
      if (screens.xl === false) {
        fetch(1, "", 6);
      } else {
        fetch(1, "", 12);
      }
    }
  }, [screens]);

  const setPage = async (param: { totalCount: number; selectPage: number; period: number }) => {
    setPagination({
      total: param.totalCount,
      page: param.selectPage,
      pageSize: param.period
    });
  };

  const fetch = async (selectPage: number, selectTag: string = "", period: number) => {
    setLoading(true);
    const contentfulService = new ContentfulService();
    // const { tags } = await contentfulService.getAllTags();
    const totalCount = await contentfulService.getAllEntriesCount({
      tag: selectTag ? selectTag.toString() : ""
    });

    if (totalCount && totalCount > 0) {
      await setPage({
        totalCount,
        selectPage,
        period
      });

      const result: any = await contentfulService.getBlogPostEntries({
        tag: selectTag ? selectTag.toString() : "",
        skip: (selectPage - 1) * period,
        limit: period
      });

      if (result) setContent(result);
    }

    setLoading(false);
  };

  const Loader = {
    spinning: loading,
    indicator: <LottieLoader text="loading" />
    // tip: '조회 중입니다'
  };

  const onHandlePaging = (page: number) => {
    setCurrentPage(page);
    // updatePage(page);
    fetch(page, selectTag, screens.xl ? 12 : 6);
  };
  const handleTagChosen = tag => {
    updateTag(tag.id);
    fetch(1, tag.id, screens.xl ? 12 : 6);
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
      // style={pageStyle}
    >
      <HeadMeta
        title="JW BLOG"
        text="JW BLOG"
        keywords="JW BLOG"
        description="JW BLOG"
        url="blog"
      />
      <CardView
        style={{
          borderRadius: 12,
          boxShadow: useDark ? "none" : `0px 0px 20px 1px ${COLOR.BLOG_CARD_SHADOW}`,
          border: "none",
          margin: screens.xs ? 0 : 18
        }}
        bodyStyle={{
          padding: 28,
          backgroundColor: useDark ? "rgba(36, 36, 36, 1)" : "rgba(243, 243, 243, 1)",
          borderRadius: 12
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
              <Col span={24} style={{ textAlign: "right", alignSelf: "center" }}>
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
              variants={ContainerStyle}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {content.entries === undefined ? (
                <Empty description="포스팅 글이 없네요 :D" />
              ) : content.entries.length > 0 ? (
                <List
                  loading={Loader}
                  grid={{
                    gutter: 28,
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 4,
                    xxl: 4
                  }}
                  dataSource={content.entries}
                  renderItem={(item: any) => {
                    return (
                      <motion.div variants={ItemStyle} style={{ paddingBottom: 18 }}>
                        <List.Item>
                          <BlogCard info={item} />
                        </List.Item>
                      </motion.div>
                    );
                  }}
                />
              ) : (
                <Spin {...Loader}>
                  <List
                    grid={{
                      gutter: 24,
                      xs: 2,
                      sm: 2,
                      md: 2,
                      lg: 2,
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
                </Spin>
              )}
            </motion.div>
          </Col>
        </Row>
      </CardView>
    </motion.div>
  );
};

export default Post;
