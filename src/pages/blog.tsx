import React, { FunctionComponent, useState, useEffect, useRef } from 'react';

import { ContentfulService } from '../core/contentful';
import { BlogPost } from '../interfaces/post';

// import { useRouter } from 'next/router';
// import { BlogPost } from '../../interfaces/post';
import Card from '../components/Card/card.component';
// import TagFilters from '../../shared/components/tag-filters/tag-filters.component';
import { Row, Col, List, Pagination, Divider, Card as CardView, Skeleton } from 'antd';
// import { BookOutlined } from '@ant-design/icons';
import useWindowSize from '../hooks/useWindow';
// type Props = {};
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
//const Post: NextPage<PostPageProps, any> = (props: PostPageProps) => {
//console.log('props : ', props);

const Post: FunctionComponent<any> = () => {
  // const router = useRouter();
  const windowSize = useWindowSize();
  // const { pagename } = router.query;
  //const entries = props.entries && props.entries.length ? props.entries : [];
  //   const tags = props.tags || [];
  // const [isFetch, setIsFetch] = useState(false);
  // const [entries, setEntries] = useState([]);
  // const [tags, setTags] = useState([]);
  const [page, updatePage] = useState(1);
  const [selectTag, updateTag] = useState('');
  // const [totalCount, settotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [responsivePageSize, setResponsivePageSize] = useState(8);

  const [pagination, setPagination] = useState({
    total: 1,
    page: 1,
    pageSize: responsivePageSize
  });

  const [content, setContent] = useState({
    page: 1,
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
    fetch(1, '');
  }, [windowSize]);

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
    const { tags } = await contentfulService.getAllTags();
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

    setContent(result);
    setLoading(false);
  };

  const onHandlePaging = (page: number) => {
    updatePage(page);
    fetch(page, selectTag);
  };
  const handleTagChosen = tag => {
    updateTag(tag.id);
    fetch(1, tag.id);
  };

  return (
    <CardView
      style={{ padding: '10px 0px', borderRadius: 12 }}
      bodyStyle={{
        padding: '18px 24px'
      }}
    >
      <Divider orientation="center">Blog</Divider>
      <Row>
        <Col span={24}>
          <Row style={{ paddingBottom: 20 }}>
            <Col span={12} style={{ alignSelf: 'center' }}>
              {/* <TagFilters
                tags={content.tags}
                updatePage={handleTagChosen}
                selectedTagId={selectTag}
              /> */}
            </Col>
            <Col span={12} style={{ textAlign: 'right', alignSelf: 'center' }}>
              <Pagination
                {...pagination}
                onChange={onHandlePaging}
                size="small"
                defaultCurrent={pagination.page}
              />
            </Col>
          </Row>
          {content.entries.length > 0 ? (
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
                    <Card info={item} />
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
        </Col>
      </Row>
    </CardView>
  );
};

// Post.getInitialProps = async ({ req, query }) => {
//   // Call an external API endpoint to get posts

//   console.log('getInitialProps : ', query.pagename);

//   const contentfulService = new ContentfulService();
//   let page: number = 1;

//   if (query.page) {
//     page = parseInt(query.page + '');
//   }

//   const { entries, total, skip, limit } = await contentfulService.getBlogPostEntries({
//     tag: query.tag ? query.tag.toString() : '',
//     skip: (page - 1) * 8,
//     limit: 8,
//   });

//   const totalCount = await contentfulService.getAllEntriesCount({
//     tag: query.tag ? query.tag.toString() : '',
//   });

//   // TODO: need to move outside
//   const { tags } = await contentfulService.getAllTags();
//   console.log('result : ', page, tags, entries, total, skip, limit, totalCount);

//   return { page, tags, entries, total, skip, limit, totalCount };
// };

export default Post;
