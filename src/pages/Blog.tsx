import React, { FunctionComponent, useState, useEffect } from "react";
import { ContentfulService } from "../core/contentful";
import { BlogPost } from "../interfaces/post";
import { observer } from "mobx-react-lite";
import { useStore } from "hooks/useStore";
import BlogCard from "../components/Card/BlogCard";
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
  Spin,
} from "antd";
import HeadMeta from "../components/Helmet/HeadMeta";
import {
  pageTransition,
  pageVariants,
  FastContainerStyle,
  ItemStyle,
} from "../interfaces/Motion";
import { motion } from "framer-motion";
import { useRouter } from "../hooks/useRouter";
import ReactGA from "react-ga";
import LottieLoader from "components/Loader/LottieLoader";

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

const Post: FunctionComponent<any> = () => {
  const period = 8;
  const router = useRouter();
  const { currentPage, setCurrentPage } = useStore("common");
  const screens = Grid.useBreakpoint();
  const [selectTag, updateTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 1,
    page: currentPage,
    pageSize: period,
  });

  const [content, setContent] = useState({
    page: currentPage,
    tags: [
      {
        id: "",
        name: "",
      },
    ],
    entries: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.location.pathname + router.location.search);
    }
    return () => {
      setCurrentPage(1);
    };
  }, []);

  useEffect(() => {
    fetch(currentPage, "");
  }, []);

  const setPage = async (param) => {
    setPagination({
      total: param.totalCount,
      page: param.selectPage,
      pageSize: param.period,
    });
  };

  const fetch = async (selectPage: number, selectTag: string = "") => {
    setLoading(true);
    const contentfulService = new ContentfulService();
    // const { tags } = await contentfulService.getAllTags();
    const totalCount = await contentfulService.getAllEntriesCount({
      tag: selectTag ? selectTag.toString() : "",
    });

    await setPage({
      totalCount,
      selectPage,
      period,
    });

    const result: any = await contentfulService.getBlogPostEntries({
      tag: selectTag ? selectTag.toString() : "",
      skip: (selectPage - 1) * period,
      limit: period,
    });

    if (result) {
      setContent(result);
    }

    setLoading(false);
  };

  const Loader = {
    spinning: loading,
    indicator: <LottieLoader text="loading" />,
    // tip: '조회 중입니다'
  };

  const onHandlePaging = (page: number) => {
    setCurrentPage(page);
    // updatePage(page);
    fetch(page, selectTag);
  };
  const handleTagChosen = (tag) => {
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
      style={{
        position: "absolute",
        width: "100%",
        padding: screens.xl ? "0px" : "20px",
      }}
      // style={pageStyle}
    >
      <HeadMeta
        title="JW BLOG"
        text="JW BLOG"
        keywords="JW BLOG"
        description="JW BLOG"
      />
      <CardView
        style={{
          borderRadius: 12,
          margin: screens.xs ? 0 : 20,
        }}
        bodyStyle={{
          padding: "18px",
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
              <Col
                span={24}
                style={{ textAlign: "right", alignSelf: "center" }}
              >
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
                  loading={Loader}
                  grid={{
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
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
                <Spin {...Loader}>
                  <List
                    grid={{
                      gutter: 16,
                      xs: 2,
                      sm: 2,
                      md: 2,
                      lg: 4,
                      xl: 4,
                      xxl: 4,
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

export default observer(Post);
