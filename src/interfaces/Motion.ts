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
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.15,
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
