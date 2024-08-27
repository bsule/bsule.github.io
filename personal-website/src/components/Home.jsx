import { motion } from 'framer-motion';
import { Toaster, toast} from 'react-hot-toast';
import 'font-awesome/css/font-awesome.min.css';


function Home() {
    const emailClick = () => {
        navigator.clipboard.writeText('bilal.suleiman@gmail.com');

        toast('Email Copied', { duration: 1500 });
    };

    return (
        <div className='flex justify-center'>
            <Toaster />
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
                    <a href="https://www.linkedin.com/in/bsule" target='blank'><motion.i className="fa fa-linkedin-in text-blue-500 text-3xl" whileHover={{opacity: 0.6}}></motion.i></a>
                    <a href="https://github.com/bsule" target='blank'><motion.i className="fa fa-github text-3xl ml-8 mr-8" whileHover={{opacity: 0.6}}></motion.i></a>
                    <motion.i className="fa fa-envelope-o text-red-500 text-3xl cursor-pointer" whileHover={{opacity: 0.6}} onClick={emailClick}></motion.i>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;