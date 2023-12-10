import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Title = ({ title }) => {
  // Animation settings
  const fadeVariants = {
    hidden: { opacity: 0, y: 0 }, // Adjusted y value to 0 as per distance="0px"
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.3 }}
      variants={fadeVariants}
    >
      <h2 className="section-title">{title}</h2>
    </motion.div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
