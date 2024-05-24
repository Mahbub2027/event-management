// import Aos from "aos";
import 'aos/dist/aos.css';
// import { useEffect } from "react";
import { motion } from "framer-motion";


const EventPhoto = () => {

    // useEffect(()=>{
    //     Aos.init({duration: 2000, once: false});

    // },[])

    return (
        <div className="w-1/2 md:w-8/12 mx-auto my-20">
            <h2 className="text-3xl md:text-4xl text-[#FC3916] font-bold text-center my-10">Events Gallery</h2>
            <div>

                <motion.div
                    animate={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 50, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-start">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/8Khtgb2/Workshop-Ideas-Image-Man-1024x576.jpg" alt="" />
                </motion.div>
                <motion.div
                    animate={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-end">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/kGzHR4D/images-q-tbn-ANd9-Gc-Re-NIdn-L-PA5w7-L-Qv-ZUa-XLG2i-Ykusdhhl-HBw-usqp-CAU.jpg" alt="" />
                </motion.div>


                <motion.div
                    animate={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 50, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-start">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/2kWCyrh/images-q-tbn-ANd9-Gc-Su8-W2-ZS-n-w-TMz-Fo0-NRU7t-HTRVl-Ig3-Ssl-Zr-A-usqp-CAU.jpg" alt="" />
                </motion.div>
                <motion.div
                    animate={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-end">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/Wx2w1Cz/images-q-tbn-ANd9-Gc-Q-t5-Kg-Cr-rf65-Nv-SMf6iv5-Rdj86-H2-WN9y-RMA-usqp-CAU.jpg" alt="" />
                </motion.div>

                <motion.div
                    animate={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 50, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-start">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/SXNHLQH/images-q-tbn-ANd9-Gc-SKDJl-Mnj-TR3rd-W5x-Tw6p-lw-J9305-GMsh-Ux-RQ-usqp-CAU.jpg" alt="" />
                </motion.div>
                <motion.div
                    animate={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-end">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/G0d52sz/images-q-tbn-ANd9-Gc-SXLt-Asd-GC-e5x-CXNFs-PIVl-Ld-N9j-WS3y-Ci4w-usqp-CAU.jpg" alt="" />
                </motion.div>


                <motion.div
                    animate={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 50, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-start">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/8Khtgb2/Workshop-Ideas-Image-Man-1024x576.jpg" alt="" />
                </motion.div>
                <motion.div
                    animate={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="flex justify-center md:justify-end">
                    <img className="w-80 md:w-96 h-48" src="https://i.ibb.co/TWTj5k7/Adobe-Stock-283020417.webp" alt="" />
                </motion.div>


            </div>
        </div>
    );
};

export default EventPhoto;