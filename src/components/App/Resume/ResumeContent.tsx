import React, { FC, useState, useLayoutEffect } from "react";
import { Empty } from "antd";
import { motion } from "framer-motion";
import { ContainerStyle, ItemStyle } from "interfaces/Motion";
import { Resume } from "interfaces/resume";
import { useStore } from "hooks/useStore";
import Loader from "components/Loader/LazyLoader";
import ResumeCard from "./ResumeCard";
import useIsMounted from "hooks/useMount";

const ResumeContent: FC = () => {
  const isMount = useIsMounted();
  const [list, setList] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);

  const { findResume } = useStore("common");

  useLayoutEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await findResume();
    if (result.ok && result.response !== undefined && isMount.current) setList(result.response);
    if (isMount.current) setLoading(false);
  };

  return (
    <motion.div
      className="container"
      variants={ContainerStyle}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {loading ? (
        <Loader />
      ) : list.length > 0 ? (
        list.map((item, idx) => (
          <motion.div variants={ItemStyle} key={idx}>
            <ResumeCard resumeData={item} key={idx} />
          </motion.div>
        ))
      ) : (
        <Empty />
      )}
    </motion.div>
  );
};

export default ResumeContent;
