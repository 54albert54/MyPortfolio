import { motion } from "framer-motion";

const AnimateTxt = ({ text, className }) => {
  return (
    <section className="w-full h-[300px] mx-auto py-2 flex flex-row items-center justify-center text-center overflow-hidden ">
      <motion.p
        className={`inline-block w-full text-dark font-bold capitalize text-8xl  ${className}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {text.map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
};

export default AnimateTxt;
