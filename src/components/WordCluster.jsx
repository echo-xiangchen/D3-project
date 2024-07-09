import React from 'react'
import ReactWordcloud from 'react-wordcloud';
import { wordData } from '../constant';
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion"

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [20, 100],
    padding: 2,
    deterministic : true,
    randomSeed: 777,
};

const callbacks = {
    getWordTooltip: word => `${word.text} (${word.value}) `,
}

const WordCluster = () => {
    return (
        <div className='mt-16 w-full flex flex-col justify-center gap-10'>
            <div className='w-full flex flex-col items-center justify-start gap-10'>
                <h1 className='text-3xl font-bold text-font-color '>Word Cluster of Female Concepts</h1>
                <p className='text-xl'>This word cluster highlights the predominant concepts and topics female researchers have pursued in the Software Engineering domain over the past decade.</p>
            </div>
            <div className='w-full flex justify-center'>
            <motion.div variants={fadeIn("", "", 0.3, 1)}>
                <ReactWordcloud callbacks={callbacks} size={[1000,800]} options={options} words={wordData} />
            </motion.div>
            </div>
        </div>
    )
}

//export default WordCluster
export default SectionWrapper(WordCluster,'wordCluster');
