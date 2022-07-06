import { useState, useEffect } from "react";
import { Col, Empty, Row } from "antd";
import Loader from "@components/Loader/LazyLoader";
import StackAvatar from "./StackAvatar";
import { motion } from "framer-motion";
import { ContainerStyle, ItemStyle } from "@interfaces/Motion";
import { Stack } from "@interfaces/stack";
import { useStacks } from "@api/query/common.query";

interface Props {
  type: "remote" | "front" | "backend" | "ci" | "infra" | "interest" | "salesforce";
  data: Stack[];
}

const StackCard = (props: Props) => {
  const { type, data } = props;
  const [list, setList] = useState<Stack[]>([]);
  // const { isLoading, error: fetchError, data: stackData } = useStacks(type);

  useEffect(() => {
    setList(data);
  }, []);
  // useEffect(() => {
  //   if (stackData) setList(stackData);
  // }, [stackData]);

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Row>
        {list.map((item, idx) => (
          <Col xs={8} sm={8} md={6} lg={6} xl={4} xxl={3} key={idx}>
            <motion.div variants={ItemStyle} key={idx}>
              <StackAvatar stack={item} />
            </motion.div>
          </Col>
        ))}
      </Row>
      {/* {isLoading ? (
        <Loader />
      ) : fetchError ? (
        <Empty />
      ) : (
        <Row>
          {list.map((item, idx) => (
            <Col xs={8} sm={8} md={6} lg={6} xl={4} xxl={3} key={idx}>
              <motion.div variants={ItemStyle} key={idx}>
                <StackAvatar stack={item} />
              </motion.div>
            </Col>
          ))}
        </Row>
      )} */}
    </motion.div>
  );
};

export default StackCard;
