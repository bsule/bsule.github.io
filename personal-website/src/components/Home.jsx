import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Glow } from '@codaworks/react-glow';
import { Toaster, toast } from 'react-hot-toast';
import 'font-awesome/css/font-awesome.min.css';

const ROLES = ['Software Engineer', 'Full-Stack Developer', 'CS Graduate'];

function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const target = ROLES[roleIndex];
        let timeout;

        if (!isDeleting && displayed.length < target.length) {
            timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
        } else if (!isDeleting && displayed.length === target.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, roleIndex]);

    const emailClick = () => {
        navigator.clipboard.writeText('bilal.suleiman@gmail.com');
        toast('Email Copied', { duration: 1500 });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-4">
            <Toaster />

            {/* Tier 1: Name */}
            <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    Hi, I&apos;m <span className="gradient-text">Bilal Suleiman</span>
                </h1>
            </motion.div>

            {/* Tier 2: Animated typewriter role */}
            <motion.div
                className="text-xl sm:text-2xl text-white/70 mb-10 h-8 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <span>{displayed}</span>
                <span className="cursor-blink" />
            </motion.div>

            {/* Tier 3: Glass bio card */}
            <Glow color="rgb(99, 102, 241)">
            <motion.div
                className="glass-card glow:bg-glow/10 p-8 max-w-2xl w-full text-base sm:text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                transition={{ delay: 0.6, duration: 0.7 }}
            >
                <p>
                    Hello! I&apos;m an intern at{' '}
                    <a href="https://msasosoftware.com/" target="blank">
                        <span className="link link-underline font-semibold text-white">MSASO Software</span>
                    </a>
                    . I am a graduate of the University of California, Riverside with a Bachelors of Science in Computer Science.
                </p>
                <p className="mt-4">
                    In my freetime, I enjoy working on projects that blend engineering with software development, exploring
                    interesting and impactful solutions to difficult problems. I love to learn new languages and frameworks
                    to push the boundaries of my knowledge and skills.
                </p>

                {/* Social icons */}
                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://www.linkedin.com/in/bsule" target="blank">
                        <motion.div className="social-pill" whileHover={{ scale: 1.05 }}>
                            <i className="fa fa-linkedin-in text-blue-400 text-xl" />
                        </motion.div>
                    </a>
                    <a href="https://github.com/bsule" target="_blank">
                        <motion.div className="social-pill" whileHover={{ scale: 1.05 }}>
                            <i className="fa fa-github text-white text-xl" />
                        </motion.div>
                    </a>
                    <motion.div className="social-pill cursor-pointer" whileHover={{ scale: 1.05 }} onClick={emailClick}>
                        <i className="fa fa-envelope-o text-rose-400 text-xl" />
                    </motion.div>
                </div>
            </motion.div>
            </Glow>
        </div>
    );
}

export default Home;
