import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      When: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 exit={{ y: -1000 }}>Thank you for your order :</h2>
      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
