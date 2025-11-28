import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const WinCard = ({
  index,
  achievement,
  name,
  event,
  school,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='cursor-pointer'
  >
    <div className='surface-card p-5 rounded-2xl sm:w-[330px] w-full h-full flex flex-col'>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full flex-grow flex flex-col'
      >
        {/* Larger Image Section */}
        <div className='relative w-full h-[120px] cursor-pointer hover:opacity-90 transition'>
          <img
            src={image}
            alt='event image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        {/* Expanded Content Section */}
        <div className='mt-4 flex-grow flex flex-col justify-between'>
          <div className='flex-1'>
            <p className='font-bold text-[20px] text-accent mb-2'>
              {name}
            </p>
            <p className='text-secondary text-[10px] mb-3'>
              <span className='blue-text-gradient'>@</span> {event} of {school}
            </p>
            <p className='text-[14px] text-secondary mt-2'>
              {achievement}
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  </motion.div>
);

const Wins = () => {
  return (
    <div className={`mt-5 rounded-[20px]`}>
      <div className={`${styles.padding} min-h-[300px]`} style={{ background: 'transparent' }}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Moments to remember</p>
          <h2 className={styles.sectionHeadText}><span className='accent-text'>Wins.</span></h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 items-center justify-center`}>
        {achievements.map((achievement, index) => (
          <WinCard key={achievement.name} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Wins, "");
