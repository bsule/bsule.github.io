import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Glow } from '@codaworks/react-glow';
import ecommercePic from '../assets/images/ecommerce-pic.png';
import workoutTrackerPic from '../assets/images/workout-tracker-pic.png';
import JwayyedLawPic from '../assets/images/jjlawohio.png';
import paralegixPic from '../assets/images/paralegix_screenshot.png';

const projects = [
    {
        image: paralegixPic,
        title: 'Paralegix',
        description: 'Full-stack legal practice management platform for law firms. Features document generation, e-signatures, client portals, and billing.',
        link: 'https://github.com/bsule/Paralegix',
        siteLink: 'https://paralegix.com',
        tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Stripe'],
    },
    {
        image: JwayyedLawPic,
        title: 'Jwayyed Law LLC',
        description: 'Official website for the law firm based in Columbus, Ohio. Led a team of 3 in the design of the website resulting in a 50% increase in sales.',
        link: 'https://github.com/EsmailNadir/JwayyedLawLLC-MP',
        siteLink: 'https://jjlawohio.com',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Team Lead'],
    },
    {
        image: ecommercePic,
        title: 'Ecommerce Shop',
        description: 'Full-stack Django Rest and React ecommerce website. Utilized REST APIs for the backend with JWT Token Authentication for secure data protection.',
        link: 'https://github.com/bsule/ecommerce-app',
        tags: ['React', 'Django', 'REST API', 'JWT'],
    },
    {
        image: workoutTrackerPic,
        title: 'Workout Tracker',
        description: 'Full-stack workout tracker website using Django. Users can create an account, create a routine name, and log their weight and reps completed.',
        link: 'https://github.com/bsule/Workout-Tracker',
        tags: ['Django', 'Python', 'HTML', 'CSS'],
    },
];

function Projects() {
    useEffect(() => {
        projects.filter(p => p.image).forEach(({ image }) => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 px-4 pb-20 max-w-4xl mx-auto w-full">
            {projects.map(({ image, title, description, link, siteLink, tags, placeholder }, i) => (
                <Glow key={title} color="rgb(99, 102, 241)">
                    <motion.div
                        className="project-card overflow-hidden flex flex-col h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        {/* Image — no glow: class here so the effect never applies */}
                        {placeholder ? (
                            <div className="w-full h-48 bg-white/5 flex items-center justify-center">
                                <span className="text-white/20 text-4xl">?</span>
                            </div>
                        ) : (
                            <a href={link} target="_blank">
                                <img src={image} alt={title} className="w-full h-64 object-cover object-top" />
                            </a>
                        )}

                        {/* glow:bg-glow/10 only here — content area only */}
                        <div className="p-5 flex flex-col flex-1 gap-2 glow:bg-glow/10">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-lg" id="project-title">{title}</h3>
                                {placeholder && (
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                                        Soon
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-white/60 flex-1">{description}</p>

                            {tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300/80 border border-blue-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {link && (
                                <a href={siteLink ?? link} target="_blank" className="mt-3">
                                    <motion.button
                                        className="w-full py-2 px-4 rounded-lg text-sm font-semibold text-white/80 border border-white/10 bg-white/5"
                                        whileHover={{ backgroundColor: 'rgba(99,102,241,0.2)', borderColor: 'rgba(99,102,241,0.4)', color: 'rgba(255,255,255,1)' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {siteLink ? 'Visit Site →' : 'View on GitHub →'}
                                    </motion.button>
                                </a>
                            )}
                        </div>
                    </motion.div>
                </Glow>
            ))}
        </div>
    );
}

export default Projects;
