import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

function Navbar() {
    const location = useLocation();
    const [active, setActive] = useState('');

    useEffect(() => {
        if (location.pathname === '/'){
            setActive('home');
        }
        else if (location.pathname === '/about/'){
            setActive('about');
        }
        else if (location.pathname === '/projects/'){
            setActive('projects');
        }
    }, [location.pathname]);

    return (
        <div className="navbar flex justify-between items-center relative">
            <motion.div className="sm:ml-8 ml-4 font-bold" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                <p className="sm:text-3xl text-2xl" id="name">Bilal Suleiman</p>
                <p className="sm:text-base text-sm">Software Engineer</p>
            </motion.div>

            <div className="flex justify-end">
                <motion.div className="flex-col p-8 text-right font-bold sm:text-base text-sm" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <motion.p><Link to='/' style={{ cursor: active === 'home' ? 'default' : 'pointer', pointerEvents: active === 'home' ? 'none' : 'auto' }}><span className={active === 'home' ? "link-clicked-underline" : "link link-underline"}>Home</span></Link></motion.p>
                    <motion.p><Link to='about/' style={{ cursor: active === 'about' ? 'default' : 'pointer', pointerEvents: active === 'about' ? 'none' : 'auto' }}><span className={active === 'about' ? "link-clicked-underline" : "link link-underline"}>About</span></Link></motion.p>
                    <motion.p><Link to='projects/' style={{ cursor: active === 'projects' ? 'default' : 'pointer', pointerEvents: active === 'projects' ? 'none' : 'auto' }}><span className={active === 'projects' ? "link-clicked-underline" : "link link-underline"}>Projects</span></Link></motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;