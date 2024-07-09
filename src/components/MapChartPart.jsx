import React, { useState } from 'react'
import BubbleMaps from './Charts/BubbleMap'
import {
  ASE,
  FSE,
  ICSE,
  Overall
} from '../constant/map-data/data'

import { SectionWrapper } from '../hoc'

const MapChartPart = () => {
  const [internetUser, setInternetUsers] = useState(Overall);
  const [dataName, setDataName] = useState('Overall');
  const [toggle, setToggle] = useState(false);
    return (
    <div className='mt-16 w-full flex flex-col justify-center gap-10'>
      <div className='w-full flex justify-center flex-col items-center gap-10'>
      <h1 className="font-bold text-2xl"> World Map of Female Researcher Distribution </h1>
          <div className="text-xl">This world map provides a geographical visualization of the global dispersion of female researchers contributing to these key conferences, ranked by the number of female researchers from each country.</div>
          
      </div>
      <div className='w-full flex justify-center'>
        <div className='flex gap-3' >
          <button 
            className={` border rounded-md px-4 py-2 ${dataName === 'Overall' ? 'bg-button-active text-button-active-font' : 'bg-white'}`}
            onClick={() => {
              setInternetUsers(Overall)
              setDataName('Overall')
              setToggle(!toggle)
            }}>
              Overall
          </button>
          <button 
            className={` text-black border rounded-md px-4 py-2 ${dataName === 'ASE' ? 'bg-button-active text-button-active-font' : 'bg-button-color text-font-color'}`}
            onClick={() => {
              setInternetUsers(ASE)
              setDataName('ASE')
              setToggle(!toggle)
            }}>ASE</button>
            <button 
            className={` text-black border rounded-md px-4 py-2 ${dataName === 'FSE' ? 'bg-button-active text-button-active-font' : 'bg-button-color text-font-color'}`}
            onClick={() => {
              setInternetUsers(FSE)
              setDataName('FSE')
              setToggle(!toggle)
            }}>FSE</button>
          <button 
            className={` text-black border rounded-md px-4 py-2 ${dataName === 'ICSE' ? 'bg-button-active text-button-active-font' : 'bg-button-color text-font-color'}`} 
            onClick={() => {
              setDataName('ICSE')
              setInternetUsers(ICSE)
              setToggle(!toggle)
          }}>ICSE</button>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <BubbleMaps toggle={toggle} internetUsers={internetUser}/>
      </div>
    </div>
  )
}

//export default MapChartPart;
export default SectionWrapper(MapChartPart,'map')
