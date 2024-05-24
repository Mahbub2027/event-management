import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { motion } from "framer-motion";

const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([])
    useEffect(() => {
        fetch('upcomingEvents.json')
            .then(res => res.json())
            .then(data => setUpcomingEvents(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <motion.h2  
            initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 2}}
             className="text-4xl font-bold text-center my-10 text-[#FC3916] ">Upcoming Events</motion.h2>
            <motion.div  initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 2}} 
                        className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                upcomingEvents.map(upcoming => <p
                    key={upcoming.id}>
                    <div>
                        <div className="card card-compact h-[440px] bg-base-100 shadow-lg my-10">
                            <figure><img className="w-full h-48" src={upcoming.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="font-bold text-2xl">{upcoming.name}</h2>
                                <p>{upcoming.short_description}</p>
                                <p><span className="font-bold">Date: </span> {upcoming.date}</p>
                                <p><span className="font-bold">Time: </span>{upcoming.time}</p>
                                <p><span className="font-bold">Location: </span>{upcoming.location}</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </p>)
            }
            </motion.div>
            <Footer></Footer>
        </div>
    );
};

export default Events;