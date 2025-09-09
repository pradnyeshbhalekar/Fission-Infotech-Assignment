import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";

import lightAnim from "../animations/lion-light.json";
import darkAnim from "../animations/lion-dark.json";

export default function ThemedLottie({ isDarkMode }) {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const animationData = isDarkMode ? darkAnim : lightAnim;

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, [isDarkMode]);


  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-6 md:p-10">
      <motion.div
        ref={container}
        className="w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="font-satoshi text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-5xl md:text-[5rem] font-black leading-[0.9]"
          variants={itemVariants}
        >
          Design
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-[5rem] font-black leading-[0.9]"
          variants={itemVariants}
        >
          Transform
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-[5rem] font-black leading-[0.9]"
          variants={itemVariants}
        >
          Accelerate
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl font-normal text-gray-700 dark:text-gray-900"
          variants={itemVariants}
        >
          Redefining user experiences through <br />
          <span className="font-medium">Behavioural Science & AI</span>
        </motion.p>
      </motion.div>
    </div>
  );
}
