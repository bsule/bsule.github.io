import { motion } from 'framer-motion';

function Home() {
    return (
        <div className='flex justify-center'>
            <motion.div className="text-2xl fixed w-3/5" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .5}}}>
                <p className='mt-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deserunt, nam rem reprehenderit natus dicta illum minus eum cum doloremque labore mollitia? Quae voluptate tenetur recusandae facilis provident impedit alias.</p>
            </motion.div>
        </div>
    );
}

export default Home;