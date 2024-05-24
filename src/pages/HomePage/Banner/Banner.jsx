import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/nC7XKY6/pexels-photo-840996.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="mb-5 text-3xl md:text-5xl font-bold">Elevate Your Skills, Ignite Your Future</motion.h1>
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="mb-5">Embark on a learning adventure with LearnXperience! Our education and training events are designed to inspire, educate, and propel you towards success.</motion.p>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2 }}>
                            <Link to='/login'>
                                <AwesomeButton className="nav-btn" type="primary">Get Started</AwesomeButton>
                            </Link>
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;