import React from 'react'

import { StackChartIntroduction } from '../constant'
import Stacked from './Charts/Stacked'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant,fadeIn } from "../utils/motion"

const StackChartPart = () => {
  return (
    <div className='mt-16 w-full flex flex-col gap-16'>
      <motion.h2 variants={textVariant(0.5)} className="text-2xl font-bold text-center">Stack Chart of Researcher Gender</motion.h2>
      <motion.div 
          variants={fadeIn("", "", 0.8, 1)}
          className="text-left text-xl">
          {StackChartIntroduction[0]}
      </motion.div>
      <div className='flex justify-center'>
      <Stacked width="640px" height="360px" />
      </div>
    </div>
  )
}

//export default StackChartPart;
export default SectionWrapper(StackChartPart,'stackChart');
