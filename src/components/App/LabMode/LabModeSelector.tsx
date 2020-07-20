import React, { FC } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../../../hooks/useStores';
import { motion } from 'framer-motion';
import { ExperimentOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useRouter } from '../../../hooks/useRouter';
const Container = styled.div`
  position: relative;
  z-index: 999;
`;

const LabModeSelector: FC = observer(() => {
  const { common } = useStores();
  const router = useRouter();

  const handleChange = async () => {
    common.setUseLabpage(!common.useLabPage);

    if (!common.useLabPage) {
      router.history.push('/about');
    } else {
      router.history.push('lab');
    }
  };

  const rotateVariants = {
    open: { opacity: 1, scale: [1, 1.2, 1.2, 1] },
    closed: { pacity: 1, scale: [1, 1.2, 1.2, 1] }
  };

  return (
    <Container>
      <motion.div animate={common.useLabPage ? 'open' : 'closed'} variants={rotateVariants}>
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
