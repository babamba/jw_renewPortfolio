import React, { FC, useState, useLayoutEffect } from "react";
import { Col, Empty, Row } from "antd";
import { useStore } from "hooks/useStore";
import Loader from "components/Loader/LazyLoader";
import StackAvatar from "./StackAvatar";
import { motion } from "framer-motion";
import { ContainerStyle, ItemStyle } from "interfaces/Motion";
import { Stack } from "interfaces/stack";
interface Props {
  type: "remote" | "front" | "backend" | "ci" | "infra" | "interest";
}

const StackCard: FC<Props> = (props: Props) => {
  const [list, setList] = useState<Stack[]>([]);
  const [loading, setLoading] = useState(true);
  const { type } = props;

  const { findStack } = useStore("common");

  useLayoutEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await findStack(type);
    if (result.ok && result.response !== undefined) setList(result.response);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : list.length > 0 ? (
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
        </motion.div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default StackCard;
