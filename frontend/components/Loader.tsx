import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Loader animation, could be a spinner, bar, etc. */}
      <div className="spinner"></div>
    </motion.div>
  );
};

export default Loader;
