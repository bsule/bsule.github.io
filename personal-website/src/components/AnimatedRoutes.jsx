import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home'
import About from './About';
import { AnimatePresence } from 'framer-motion';
import Projects from './Projects';

function AnimatedRoutes(){
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;