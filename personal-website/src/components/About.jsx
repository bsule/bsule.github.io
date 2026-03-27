import { useState } from 'react';
import { motion } from 'motion/react';
import { Glow } from '@codaworks/react-glow';
import BaldyPic from '../assets/images/about-pics/baldy.jpg';
import ThunderMountain from '../assets/images/about-pics/thunder-mountain.jpg';
import EiffelTower from '../assets/images/about-pics/eiffel-tower.jpg';

const pics = [BaldyPic, ThunderMountain, EiffelTower];

function About() {
    const [picIndex] = useState(() => Math.floor(Math.random() * 3));

    return (
        <motion.div
            className="flex flex-col lg:flex-row items-start gap-8 mt-16 px-4 pb-20 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.6 }}
        >
            {/* Photo */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
                <img
                    src={pics[picIndex]}
                    alt="Bilal"
                    className="rounded-2xl w-full lg:w-[320px] object-cover"
                />
            </div>

            {/* Bio glass card */}
            <Glow color="rgb(99, 102, 241)">
            <div className="glass-card glow:bg-glow/10 p-8 text-base sm:text-lg text-white/80 leading-relaxed flex-1">
                <p>
                    In recent years, I've been working on my skills trying to learn different technologies that can transform
                    my ideas into well-designed products. Some of these technologies include React, Node.js, Django,
                    AWS, and much more. I enjoy working on full-stack projects that allow me to have full customization over
                    the whole product, whether it's the frontend or backend.
                </p>
                <br />
                <p>
                    My journey with learning stems from an interest in the amazing technologies that are continuously being
                    developed. I love to explore and understand the latest trends to become a better overall programmer.
                    This curiosity drives me to stay updated and adapt to the newest available solutions to problems that I
                    may face.
                </p>
                <br />
                <p>
                    I've been interning at{' '}
                    <a href="https://msasosoftware.com/" target="_blank">
                        <span className="link link-underline font-semibold text-white">MSASO Software</span>
                    </a>
                    , where I gained a great amount of software engineering experience. I learned how to lead a team, work
                    effectively with others, and how to approach difficult problems. At my time there, I engineered many
                    product updates that collectively led to a 120% increase in sales.
                </p>
                <br />
                <p>
                    When I&apos;m not at my computer, I enjoy hiking, playing soccer, and traveling the world.
                </p>
            </div>
            </Glow>
        </motion.div>
    );
}

export default About;
