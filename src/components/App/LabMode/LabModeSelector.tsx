import styled from "styled-components";
import { motion } from "framer-motion";
import { ExperimentOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useRouter } from "@hooks/useRouter";
import { useAppSelector, useAppDispatch } from "@store/useAppStore";
import { setLabPage } from "@store/appStore";
const Container = styled.div`
  position: relative;
  z-index: 999;
`;

const LabModeSelector = () => {
  const dispatch = useAppDispatch();
  const { useLabPage, useDark } = useAppSelector(state => state.appStore);

  const router = useRouter();

  const handleChange = async () => {
    dispatch(setLabPage(!useLabPage));

    if (!useLabPage) {
      router.history.push("/about");
    } else {
      router.history.push("lab");
    }
  };

  const rotateVariants = {
    open: { opacity: 1, scale: [1, 1.2, 1.2, 1] },
    closed: { pacity: 1, scale: [1, 1.2, 1.2, 1] }
  };

  return (
    <Container>
      <motion.div animate={useLabPage ? "open" : "closed"} variants={rotateVariants}>
        {useLabPage ? (
          <LinkedinOutlined
            onClick={handleChange}
            style={{
              color: useDark ? "#FFFF" : "#6b6b6b",
              fontSize: 24,
              cursor: "pointer"
            }}
          />
        ) : (
          <ExperimentOutlined
            onClick={handleChange}
            style={{
              color: useDark ? "#FFFF" : "#6b6b6b",
              fontSize: 24,
              cursor: "pointer"
            }}
          />
        )}
      </motion.div>
    </Container>
  );
};

export default LabModeSelector;
