import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  onClick,
}) => {
  const handleCardClick = () => {
    onClick();
  };

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='cursor-pointer'
      onClick={handleCardClick}
    >
      <div className='surface-card p-5 rounded-2xl sm:w-[360px] w-full h-full'>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='w-full h-full'
        >
          <div className='relative w-full h-[230px] cursor-pointer hover:opacity-90 transition' onClick={handleCardClick}>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='mt-5'>
            <h3 className='font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
};

const Works = ({ onProjectClick }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText} `}><span className='accent-text'>Projects.</span></h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through 
          real-world examples of my work. Each project includes a brief description 
          along with links and live demos. These projects reflect my ability to solve 
          complex problems, work with various technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
