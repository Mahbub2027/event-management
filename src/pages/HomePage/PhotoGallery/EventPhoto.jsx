import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const EventPhoto = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    return (
        <div className="w-8/12 mx-auto my-20">
            <h2 className="text-4xl font-bold text-center my-10">Events Gallery</h2>
            <div>
                
                    <div data-aos="zoom-out" className="flex justify-start">
                        <img className="w-96 h-48" src="https://i.ibb.co/8Khtgb2/Workshop-Ideas-Image-Man-1024x576.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left" className="flex justify-end">
                        <img className="w-96 h-48" src="https://i.ibb.co/kGzHR4D/images-q-tbn-ANd9-Gc-Re-NIdn-L-PA5w7-L-Qv-ZUa-XLG2i-Ykusdhhl-HBw-usqp-CAU.jpg" alt="" />
                    </div>
                
                
                    <div data-aos="fade-up" className="flex justify-start">
                        <img className="w-96 h-48" src="https://i.ibb.co/2kWCyrh/images-q-tbn-ANd9-Gc-Su8-W2-ZS-n-w-TMz-Fo0-NRU7t-HTRVl-Ig3-Ssl-Zr-A-usqp-CAU.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-out" className="flex justify-end">
                        <img className="w-96 h-48" src="https://i.ibb.co/Wx2w1Cz/images-q-tbn-ANd9-Gc-Q-t5-Kg-Cr-rf65-Nv-SMf6iv5-Rdj86-H2-WN9y-RMA-usqp-CAU.jpg" alt="" />
                    </div>

                    <div data-aos="fade-right" className="flex justify-start">
                        <img className="w-96 h-48" src="https://i.ibb.co/SXNHLQH/images-q-tbn-ANd9-Gc-SKDJl-Mnj-TR3rd-W5x-Tw6p-lw-J9305-GMsh-Ux-RQ-usqp-CAU.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left" className="flex justify-end">
                        <img className="w-96 h-48" src="https://i.ibb.co/G0d52sz/images-q-tbn-ANd9-Gc-SXLt-Asd-GC-e5x-CXNFs-PIVl-Ld-N9j-WS3y-Ci4w-usqp-CAU.jpg" alt="" />
                    </div>
                
                
                    <div data-aos="fade-up" className="flex justify-start">
                        <img className="w-96 h-48" src="https://i.ibb.co/8Khtgb2/Workshop-Ideas-Image-Man-1024x576.jpg" alt="" />
                    </div>
                    <div data-aos="fade-right" className="flex justify-end">
                        <img className="w-96 h-48" src="https://i.ibb.co/TWTj5k7/Adobe-Stock-283020417.webp" alt="" />
                    </div>
                

            </div>
        </div>
    );
};

export default EventPhoto;