import { motion } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css';


function Home() {
    return (
        <div className='flex justify-center'>
            <motion.div className="text-lg fixed max-w-7xl ml-4 mr-4" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
                <p className='mt-20'>
                    Hello! I'm a software engineer and former intern at <a href="https://msasosoftware.com/" target='blank'><span className='link link-underline font-semibold'>MSASO Software and Consulting LLC</span></a>.
                    I am a current senior at the University of California, Riverside and am going for my bachelors in Computer Science.
                </p>
                <br />
                <p>
                    In my freetime, I enjoy working on projects that blend engineering with software development, exploring interesting and impactful solutions to difficult problems. 
                    When I'm not at my computer, you can find me hiking, playing soccer, or traveling the world.
                </p>
                <div className='flex justify-center mt-20'>
                    <i class="fa fa-linkedin-in text-blue-500 text-3xl"></i>
                    <i class="fa fa-github text-3xl ml-4 mr-4"></i>
                    <i class="fa fa-envelope text-red-500 text-3xl"></i>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;