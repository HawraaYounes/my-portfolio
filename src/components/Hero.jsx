import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto  items-center justify-center">
      <div
        className={`${styles.paddingX}   mt-5 w-full flex flex-row text-center items-stretch`}
      >
        <div
          id="line-div"
          className="flex flex-col justify-center mt-5 items-center"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text div */}
        <div
          id="text-div"
          className="flex flex-col flex-1 w-full items-center justify-center"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
          Turning Innovative Ideas into Dynamic <span className="text-[#915eff]">Full-Stack</span> Solutions
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100 `}>
            Hi, I'm Hawraa. I develop user interfaces and Full Stack Web Apps
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
