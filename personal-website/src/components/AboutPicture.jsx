import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BaldyPic from '../assets/images/about-pics/baldy.jpg';
import ThunderMountain from '../assets/images/about-pics/thunder-mountain.jpg';
import EiffelTower from '../assets/images/about-pics/eiffel-tower.jpg';

function AboutPicture() {
    const location = useLocation();

    const picArr = [BaldyPic, ThunderMountain, EiffelTower];
    const [arrLocation, setArrLocation] = useState(0);

    useEffect(() => {
        const preloadImages = () => {
          picArr.forEach((image) => {
            const img = new Image();
            img.src = image;
          });
        };
        preloadImages();
      }, []);

    useEffect(() => {
        setArrLocation(Math.floor(Math.random() * 3));
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {location.pathname === '/about/' && (
            <motion.div className='flex absolute lg:right-0 min-[1026px]:pt-40 xl:pt-24 2xl:pt-16 pt-50' id='about-pic-div' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
                <img src={picArr[arrLocation]} alt="Error loading picture" className='lg:rounded-l-lg xl:w-[400px] lg:w-[460px]' id='about-pic'/>
            </motion.div>
            )}
        </AnimatePresence>
    );
}

export default AboutPicture;