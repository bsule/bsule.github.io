import { motion } from 'framer-motion';
import ecommercePic from '../assets/images/ecommerce-pic.png';

function Projects(){
    return (
        <div className='flex justify-center'>
            <motion.div className="text-3xl fixed" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}} whileHover={{x: 6, y: -6}}>
                <div className='mt-20 border-2 rounded-lg max-w-screen-xl flex justify-center shadow-md shadow-slate-500'>
                    <motion.div className='flex flex-col md:flex-row items-center md:items-start gap-8 p-5'>
                        <motion.div className='relative' whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
                            <a href="https://github.com/bsule/ecommerce-app" target='blank'><img src={ecommercePic} alt="" className='rounded-xl drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]' width="400px" height="300px"/></a>
                        </motion.div>
                        <div className='text-center md:text-left items-center mt-4'>
                            <h3 className='font-bold text-2xl' id='project-title'>Ecommerce Shop</h3>
                            <p className='text-base mt-2'>Full-stack Django Rest Framework and React Ecommerce website. Utilized REST APIs for the backend with JWT Token Authentication for secure data protection.</p>
                            <p className='text-base font-bold mt-2'><a href="https://github.com/bsule/ecommerce-app" target="blank" className='link link-underline'>Github</a></p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;