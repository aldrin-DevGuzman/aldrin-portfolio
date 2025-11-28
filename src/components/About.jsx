import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, onClick }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient service-card-frame p-[1px] rounded-[20px] shadow-card'
      onClick={onClick}
    >
      <div className='bg-tertiary rounded-[20px] service-card-inner py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <motion.img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain'
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'backInOut' }}
        />

        <h3 className='accent text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ onServiceClick }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} `}><span className='accent-text'>Overview.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in HTML, CSS, 
        JavaScript, and PHP, and expertise in frameworks like Laravel, Vue.js, 
        and Ruby on Rails. I’m a quick learner who collaborates closely with 
        clients to create efficient, scalable, and user-friendly web and 
        mobile applications that address real-world needs. 
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            onClick={() => onServiceClick && onServiceClick(service.title)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
