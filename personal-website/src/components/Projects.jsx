import { motion } from 'framer-motion';
import ecommercePic from '../assets/images/ecommerce-pic.png';

function Projects(){
    return (
        <div className='flex justify-center'>
            <motion.div className="text-3xl fixed w-3/5" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
                <div className='mt-20 flex flex-col md:flex-row items-center md:items-start gap-8'>
                    <motion.div className='relative' whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
                        <a href="https://github.com/bsule/ecommerce-app" target='blank'><img src={ecommercePic} alt="" className='rounded shadow-lg shadow-slate-500' width="400px" height="300px"/></a>
                    </motion.div>
                    <div className='text-center md:text-left items-center'>
                        <h2 className='font-semibold'>Ecommerce Shop</h2>
                        <p className='text-base mt-2'>Full-stack Django Rest Framework and React Ecommerce website. Utilized REST APIs for the backend with JWT Token Authentication for secure data protection.</p>
                        <p className='text-base font-bold'><a href="https://github.com/bsule/ecommerce-app" target="blank" className='link link-underline'>Github</a></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;