const pageVariants = {
  initial: {
    opacity: 0
    // y: "2vw"
  },
  in: {
    opacity: 1
    // y: 0
  },
  out: {
    opacity: 0
    // y: "2vw"
  }
};

const pageStyle = {
  position: "absolute"
};

const pageTransition = {
  type: "tween",
  duration: 1,
  ease: "anticipate"
  // type: 'spring',
  // stiffness: 100
};

const ContainerStyle = {
  hidden: {
    opacity: 1,
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.05,
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerDirection: 1,
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const ItemStyle = {
  hidden: {
    y: -2,
    opacity: 0,
    transition: {
      y: { velocity: 100 }
    }
  },
  visible: {
    y: 0,
    innerHeight: "100%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  }
};

const ItemLeftStyle = {
  hidden: {
    x: -4,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const openSpring = { type: "spring", stiffness: 200, damping: 30 };
const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

export {
  openSpring,
  closeSpring,
  pageVariants,
  ItemLeftStyle,
  pageTransition,
  pageStyle,
  ContainerStyle,
  ItemStyle
};
