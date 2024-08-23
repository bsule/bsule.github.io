import { motion } from 'framer-motion';

function Projects(){
    return (
        <motion.div className="text-3xl fixed" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
            <p className='mt-20'>projects</p>
        </motion.div>
    );
}

export default Projects;