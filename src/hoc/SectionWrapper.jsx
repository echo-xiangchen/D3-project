import { motion } from "framer-motion";
//import { pageSetting } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>

function HOC() {
    return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col justify-center items-center'
    >
        <span className='hash-span' id={idName}>&nbsp;</span>
        <Component />
    </motion.section>
    );
};

export default SectionWrapper;