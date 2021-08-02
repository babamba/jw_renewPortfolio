import { useState, useEffect } from "react";
import { Empty } from "antd";
import { motion } from "framer-motion";
import { ContainerStyle, ItemStyle } from "@interfaces/Motion";
import { Resume } from "@interfaces/resume";
// import Loader from "@components/Loader/LazyLoader";
import ResumeCard from "./ResumeCard";
// import { useResumes } from "@api/query/common.query";
import { resumes } from '@core/resumes';

const ResumeContent = () => {
  const [list, setList] = useState<Resume[]>([]);
  // const { isLoading, error: fetchError, data: resumeData } = useResumes();

  useEffect(() => {
    const sorting = resumes.sort(function(a, b) {
      return b.flow - a.flow;
    });
    setList(sorting);
  }, []);

  return (
    <>
    <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {list.map((item, idx) => (
            <motion.div variants={ItemStyle} key={idx}>
              <ResumeCard resumeData={item} key={idx} />
            </motion.div>
          ))}
        </motion.div>
      {/* {isLoading ? (
        <Loader />
      ) : fetchError ? (
        <Empty />
      ) : (
        <motion.div
          className="container"
          variants={ContainerStyle}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {list.map((item, idx) => (
            <motion.div variants={ItemStyle} key={idx}>
              <ResumeCard resumeData={item} key={idx} />
            </motion.div>
          ))}
        </motion.div>
      )} */}
    </>
  );
};

export default ResumeContent;
