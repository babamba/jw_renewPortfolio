import { motion } from "framer-motion";
import styled from "styled-components";
import CustomIcon from "@components/Common/CustomIcon";
import COLOR from "@core/colors";
import { useAppDispatch, useAppSelector } from "@store/useAppStore";
import { setUseDark } from "@store/appStore";

const MotionBox = styled(motion.div)`
  display: flex;
  flex: initial;
  justify-content: center;
  align-items: center;
`;

interface Props {
  size: number;
}
const ThemeModeSelector = (props: Props) => {
  const { size } = props;
  const dispatch = useAppDispatch();
  const { useDark } = useAppSelector(state => state.appStore);

  const toggleTheme = () => dispatch(setUseDark(!useDark));

  const spring = {
    type: "spring",
    bounceDamping: 0,
    bounceStiffness: 0
  };

  const RotateVariants = {
    open: { rotateZ: [90, 0], transition: { spring } },
    closed: { rotateZ: [0, 90], transition: { spring } }
  };

  return (
    <MotionBox animate={useDark ? "open" : "closed"} variants={RotateVariants}>
      <CustomIcon
        onClick={() => toggleTheme()}
        style={{
          margin: 0,
          color: useDark ? COLOR.BTN_THEME_DARK : COLOR.BTN_THEME_LIGTH,
          fontSize: `${size}rem`,
          cursor: "pointer"
        }}
        type={useDark ? "icon-night" : "icon-brightness"}
      />
    </MotionBox>
  );
};

export default ThemeModeSelector;
