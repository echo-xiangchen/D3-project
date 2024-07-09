import { motion } from 'framer-motion'
import { textVariant,fadeIn } from "../utils/motion"

const Paragraph = ({title, data}) => {
    return (
        <div className='flex flex-col gap-5 mt-16'>

            <motion.h2 
                variants={textVariant()}
                className="text-2xl font-bold text-center">
                {title}
            </motion.h2>
            {data && 
            data.map((item, index) => {
                const delay = 0.8 + 0.2 * index; 
                return (
                <motion.div 
                    variants={fadeIn("", "", delay, 1)}
                    key={index} 
                    className="text-left text-xl">
                    {item}
                </motion.div>
                )
            })
            }
    </div>
    )
}

export default Paragraph