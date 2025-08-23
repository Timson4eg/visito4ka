import { motion } from "framer-motion";

const LearnBtn = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-start">
      <div className="relative">
        <motion.button
          onClick={handleClick}
          initial={{ width: 48, height: 48 }}
          animate={{ width: 160, height: 48 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 bg-gray-700 text-white overflow-hidden px-6 py-2 rounded-lg borderBtn"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="font-normal font-thin"
          >
            Learn More
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default LearnBtn;
