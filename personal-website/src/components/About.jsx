import { motion } from 'framer-motion';

function About() {
    return (
        <div className='flex justify-center'>
            <motion.div className="text-3xl fixed w-3/5" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
                <p className='mt-20'>about</p>
            </motion.div>
        </div>
    );
}

export default About;