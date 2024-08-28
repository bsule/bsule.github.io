import { motion } from 'framer-motion';
import ecommercePic from '../assets/images/ecommerce-pic.png';
import workoutTrackerPic from '../assets/images/workout-tracker-pic.png';
import JwayyedLawPic from '../assets/images/jwayyed-law-pic.png';

function Projects(){
    return (
        <div className='absolute flex flex-col items-center justify-center mt-20 left-1/2 transform -translate-x-1/2 w-full pb-20'>
            <motion.div className="text-3xl" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}} whileHover={{x: 6, y: -6}}>
                <div className='max-w-screen-xl flex justify-center'>
                    <motion.div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
                        <motion.div className='relative' whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
                            <a href="https://github.com/bsule/ecommerce-app" target='blank'><img src={ecommercePic} alt="" className='rounded-xl' width="400px" height="300px"/></a>
                        </motion.div>
                        <div className='text-center md:text-left items-center mt-4'>
                            <h3 className='font-bold text-2xl' id='project-title'>Ecommerce Shop</h3>
                            <p className='text-base mt-2'>Full-stack Django Rest and React ecommerce website. Utilized REST APIs for the backend with JWT Token Authentication for secure data protection.</p>
                            <a href="https://github.com/bsule/ecommerce-app" target="blank"><motion.button className='bg-blue-600 text-white font-bold text-base py-2 px-4 rounded mt-4' whileHover={{backgroundColor: "#1D4ED8"}}>Learn more</motion.button></a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="text-3xl pt-10">
                <motion.div className='max-w-screen-xl flex justify-center' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}} whileHover={{x: 6, y: -6}}>
                    <motion.div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
                        <motion.div className='relative' whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
                            <a href="https://github.com/bsule/Workout-Tracker" target='blank'><img src={workoutTrackerPic} alt="" className='rounded-xl' width="400px" height="300px"/></a>
                        </motion.div>
                        <div className='text-center md:text-left items-center mt-4'>
                            <h3 className='font-bold text-2xl' id='project-title'>Workout Tracker</h3>
                            <p className='text-base mt-2'>Full-stack workout tracker website using Django. Users can create an account, create a routine name, and log their weight and reps completed</p>
                            <a href="https://github.com/bsule/Workout-Tracker" target="blank"><motion.button className='bg-blue-600 text-white font-bold text-base py-2 px-4 rounded mt-4' whileHover={{backgroundColor: "#1D4ED8"}}>Learn more</motion.button></a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="text-3xl pt-10">
                <motion.div className='max-w-screen-xl flex justify-center' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}} whileHover={{x: 6, y: -6}}>
                    <motion.div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
                        <motion.div className='relative' whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
                            <a href="https://github.com/bsule/Jwayyed-Law-LLC" target='blank'><img src={JwayyedLawPic} alt="" className='rounded-xl' width="400px" height="300px"/></a>
                        </motion.div>
                        <div className='text-center md:text-left items-center mt-4'>
                            <h3 className='font-bold text-2xl' id='project-title'>Jwayyed Law LLC</h3>
                            <p className='text-base mt-2'>Official website for the law firm based in Columbus, Ohio. Led a team of 3 in the design of the website resulting in a 50% increase in sales.</p>
                            <a href="https://github.com/bsule/Jwayyed-Law-LLC" target="blank"><motion.button className='bg-blue-600 text-white font-bold text-base py-2 px-4 rounded mt-4' whileHover={{backgroundColor: "#1D4ED8"}}>Learn more</motion.button></a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;