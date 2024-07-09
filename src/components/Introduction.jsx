import React from 'react'
import { tableIntroduction } from '../constant'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant,fadeIn } from "../utils/motion"


const Introduction = () => {
  return (
    <div className='my-16 flex flex-col gap-16'>
      <motion.h2
        variants={textVariant()}
        className="text-2xl font-bold text-center">
        Introduction
      </motion.h2>

      <motion.div 
        variants={fadeIn("", "", 0.3, 1)}
        className="text-left text-xl">
        {tableIntroduction[0]}
      </motion.div>
    </div>
  )
}

//export default Introduction;
export default SectionWrapper(Introduction,'introduction');
