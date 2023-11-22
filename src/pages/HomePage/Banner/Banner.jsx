import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/nC7XKY6/pexels-photo-840996.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Elevate Your Skills, Ignite Your Future</h1>
                        <p className="mb-5">Embark on a learning adventure with LearnXperience! Our education and training events are designed to inspire, educate, and propel you towards success.</p>
                        <button className="p-3 rounded-lg text-white font-bold bg-[#FC3916]"><Link to='/login'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;