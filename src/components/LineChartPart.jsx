import React from 'react'

import LineChart from './Charts/LineChart'
import SynchronizedChart from './Charts/SynchronizedChart'
import { SectionWrapper } from '../hoc'
import { LineChartIntroduction } from '../constant'
import { motion } from 'framer-motion'
import { textVariant,fadeIn,lineChartVariant } from "../utils/motion"

const LineChartPart = () => {
  return (
    <div className='mt-10 flex flex-col w-full gap-5 justify-center'>
      <div className='flex flex-col gap-5 mt-16'>
        <h1 className="text-2xl font-bold text-center">
          Line Chart of Female Researchers (2013-2022)
        </h1>
        <div 
            className="text-left text-xl">
            {LineChartIntroduction[0]}
        </div>
      </div>
        <div className='flex justify-center mt-10'>
          <LineChart />
        </div>
        <div className="w-full flex justify-center">
          <p className='text-xl'>These charts elucidate the yearly percentage of female researchers' contributions to each conference and the field overall, providing insights into the proportional gender representation shifts from 2013 to 2022</p>
        </div>
        <SynchronizedChart />
    </div>
  )
}

//export default LineChartPart;
export default SectionWrapper(LineChartPart,'lineChart');
