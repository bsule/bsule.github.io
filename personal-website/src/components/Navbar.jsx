import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'motion/react';

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
        <div className="flex justify-between items-center px-4 sm:px-8 py-4">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                <p className="sm:text-3xl text-2xl font-bold" id="name">Bilal Suleiman</p>
                <p className="sm:text-sm text-xs text-white/50 mt-0.5">Software Engineer</p>
            </motion.div>

            <motion.div className="flex gap-6 font-bold sm:text-base text-sm" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <Link to='/' style={{ cursor: active === 'home' ? 'default' : 'pointer', pointerEvents: active === 'home' ? 'none' : 'auto' }}><span className={active === 'home' ? "link-clicked-underline" : "link link-underline"}>Home</span></Link>
                <Link to='about/' style={{ cursor: active === 'about' ? 'default' : 'pointer', pointerEvents: active === 'about' ? 'none' : 'auto' }}><span className={active === 'about' ? "link-clicked-underline" : "link link-underline"}>About</span></Link>
                <Link to='projects/' style={{ cursor: active === 'projects' ? 'default' : 'pointer', pointerEvents: active === 'projects' ? 'none' : 'auto' }}><span className={active === 'projects' ? "link-clicked-underline" : "link link-underline"}>Projects</span></Link>
            </motion.div>
        </div>
    );
}

export default Navbar;
