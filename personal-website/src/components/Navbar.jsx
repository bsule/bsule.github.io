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
            <motion.div className="ml-8 font-bold" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                <p className="text-4xl">Bilal Suleiman</p>
                <p>Software Engineer</p>
            </motion.div>

            <div className="flex justify-end">
                <motion.div className="flex-col p-8 text-right font-bold text-xl" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <motion.p animate={{textDecoration: active==='home' ? 'underline' : 'none'}} whileHover={active !== 'home' ? { color: '#7e7e80' } : {}} style={{ cursor: active === 'home' ? 'default' : 'pointer', pointerEvents: active === 'home' ? 'none' : 'auto' }}><Link to='/'>Home</Link></motion.p>
                    <motion.p animate={{textDecoration: active==='about' ? 'underline' : 'none'}} whileHover={active !== 'about' ? { color: '#7e7e80' } : {}} style={{ cursor: active === 'home' ? 'default' : 'pointer', pointerEvents: active === 'about' ? 'none' : 'auto' }}><Link to='about/'>About</Link></motion.p>
                    <motion.p animate={{textDecoration: active==='projects' ? 'underline' : 'none'}} whileHover={active !== 'projects' ? { color: '#7e7e80' } : {}} style={{ cursor: active === 'home' ? 'default' : 'pointer', pointerEvents: active === 'projects' ? 'none' : 'auto' }}><Link to='projects/'>Project</Link></motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;