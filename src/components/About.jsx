import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant  } from '../utils/motion'
import { SectionWrapper } from '../hoc'



const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
      


const About = () => {
  return (
      <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

           <motion.p variants={fadeIn("" , 0.2,1)}
                      className='mt-4 text-secondary text-[16px] max-w-3xl 
                                leading-[30px] '>
                    I am a MERN Stack Developer with a background in Electronics and Communication Engineering (8.5 CGPA). I build responsive web applications using React, Node.js, Express.js, and MongoDB, with beginner knowledge of Three.js and Next.js.
                   I gained experience during a 6-month internship at Pumo Technovation and am skilled in Tailwind CSS, GitHub, and video editing with CapCut and DaVinci Resolve.
           </motion.p>

           <div className='mt-20 flex flex-wrap gap-10 '>
                {services.map((service,index) => {
                    return(
                       <ServiceCard key={service.title} index={index} {...service}/>
                    )
                })}
           </div>
            
      </>
  )
}

export default SectionWrapper(About,"about")
 