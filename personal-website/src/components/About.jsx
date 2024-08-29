import { motion } from 'framer-motion';

function About() {
    return (
        <div className='flex justify-left'>
            <motion.div className="absolute xl:w-3/5 w-1/2 text-lg pl-10" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
                <p className='mt-20'>
                    In recent years, I've been working on my skills trying to learn different technologies that can transform my ideas into well-designed products. Some of these technologies include React, Django REST Framework, AWS, and much more.
                    I enjoy working on full-stack projects that allow me to have full customization over the whole product, whether it's the frontend or backend.

                    <br /> <br />

                    My journey with learning stems from an interest in the amazing technologies that are continuously being developed. I love to explore and understand the latest trends to become a better overall programmer.
                    This curiosity drives me to stay updated and adapt to the newest available solutions to problems that I may face.

                    <br /> <br />

                    Over the last three summers, I've interned at <a href="https://msasosoftware.com/" target='_blank'><span className='link link-underline font-semibold'>MSASO Software and Consulting LLC</span></a>
                    , where I gained a great amount of software engineering experience. I learned how to lead a team, work effectively with others, and how to approach difficult problems. 
                    At my time there, I engineered many product updates that collectively led to a 120% increase in sales.

                    <br /> <br />

                    When I'm not at my computer, I enjoy hiking, playing soccer, and traveling the world.
                    <br /> <br /> <br /> <br />
                </p>
            </motion.div>
        </div>
    );
}

export default About;