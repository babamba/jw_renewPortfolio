import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../../../hooks/useStores';
import { useTheme } from 'antd-theme';
import { motion } from 'framer-motion';
import { ExperimentOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useRouter } from '../../../hooks/useRouter';
const Container = styled.div`
  position: absolute;
  right: 12px;
  top: 60px;
  z-index: 999;
`;

// type Props = {
//   closeAction: Function;
//   openAction: Function;
// };
const LabModeSelector: FC = observer(() => {
  // const LabModeSelector: FC<Props> = observer(({ closeAction, openAction }) => {
  //const { setIsDarkMode } = props;
  const { common } = useStores();
  const router = useRouter();

  const handleChange = async () => {
    common.setUseLabpage(!common.useLabPage);
    //await closeAction();

    if (!common.useLabPage) {
      router.history.push('/about');
    } else {
      router.history.push('lab');
    }

    //await openAction();
  };

  const rotateVariants = {
    open: { opacity: 1, scale: [1, 1.2, 1.2, 1] },
    closed: { pacity: 1, scale: [1, 1.2, 1.2, 1] }
  };

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const hoverframeVariants = {
    hover: { scale: 1.2 }
  };

  return (
    <Container>
      <motion.div
        className="frame"
        whileHover="hover"
        whileTap={{ scale: 0.8 }}
        variants={hoverframeVariants}
        transition={transition}
      >
        {/* <motion.div animate={common.useLabPage ? 'open' : 'closed'} variants={rotateVariants}> */}
        {common.useLabPage ? (
          <LinkedinOutlined
            onClick={handleChange}
            style={{
              color: common.useDark ? '#FFFF' : '#6b6b6b',
              fontSize: 24,
              cursor: 'pointer'
            }}
          />
        ) : (
          <ExperimentOutlined
            onClick={handleChange}
            style={{
              color: common.useDark ? '#FFFF' : '#6b6b6b',
              fontSize: 24,
              cursor: 'pointer'
            }}
          />
        )}
      </motion.div>
    </Container>
  );
});

export default LabModeSelector;
