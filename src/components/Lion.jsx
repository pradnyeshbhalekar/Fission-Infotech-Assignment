import { useEffect, useRef } from "react";
import lottie from "lottie-web";

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

  return (
    <div className="min-h-screen flex items-center justify-center gap-16 p-10">

      <div ref={container} className="w-[400px] h-[400px]" />


      <div className="font-satoshi">
        <h1 className="text-[5rem] font-black leading-[0.9]">Design</h1>
        <h1 className="text-[5rem] font-black leading-[0.9]">Transform</h1>
        <h1 className="text-[5rem] flex flex-col gap-y-12 font-black leading-[0.9]">Accelerate</h1>

        <p className="mt-6 text-2xl font-normal text-gray-700 dark:text-gray-900">
          Redefining user experiences through <br />
          <span className="font-medium">Behavioural Science & AI</span>
        </p>
      </div>
    </div>
  );
}
