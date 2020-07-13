const pageVariants = {
  initial: {
    opacity: 0,
    y: '-2vw'
    // transition: {
    //   delay: 0
    // },
    // delayChildren: 0.2
  },
  in: {
    opacity: 1,
    y: 0
    // delayChildren: 0.2
  },
  out: {
    opacity: 0,
    y: '2vw'
  }
};

const pageTransition = {
  type: 'tween',
  duration: 1,
  ease: 'anticipate'
  // type: 'spring',
  // stiffness: 100
};

const pageStyle = {
  position: 'absolute'
};

const ContainerStyle = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: 'afterChildren'
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.15,
      staggerDirection: 1
    }
  }
};

const FastContainerStyle = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.01,
      when: 'afterChildren'
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.03,
      when: 'beforeChildren',
      staggerChildren: 0.03,
      staggerDirection: 1
    }
  }
};

const ItemStyle = {
  hidden: {
    y: -10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export { pageVariants, pageTransition, pageStyle, ContainerStyle, FastContainerStyle, ItemStyle };
