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
        else if (location.pathname === '/contact/'){
            setActive('contact');
        }
        else if (location.pathname === '/projects/'){
            setActive('projects');
        }
    }, [location.pathname]);

    return (
        <div className="navbar flex justify-between items-center relative">
            <motion.div className="ml-8 font-bold" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                <p className="text-4xl">Bilal Suleiman</p>
                <p>Software Engineer</p>
            </motion.div>

            <div className="flex justify-end">
                <motion.div className="flex-col p-8 text-right font-bold" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <motion.p><Link to='/' style={{ cursor: active === 'home' ? 'default' : 'pointer', pointerEvents: active === 'home' ? 'none' : 'auto' }}><span className={active === 'home' ? "link-clicked-underline" : "link link-underline"}>Home</span></Link></motion.p>
                    <motion.p><Link to='projects/' style={{ cursor: active === 'projects' ? 'default' : 'pointer', pointerEvents: active === 'projects' ? 'none' : 'auto' }}><span className={active === 'projects' ? "link-clicked-underline" : "link link-underline"}>Projects</span></Link></motion.p>
                    <motion.p><Link to='contact/' style={{ cursor: active === 'contact' ? 'default' : 'pointer', pointerEvents: active === 'contact' ? 'none' : 'auto' }}><span className={active === 'contact' ? "link-clicked-underline" : "link link-underline"}>Contact Me</span></Link></motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;