import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <div className="w-10/12 mx-auto my-20">
            <h2 className="text-4xl font-bold text-center text-[#FC3916] mb-14">About Us</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="md:w-1/2 relative col-span-1" data-aos="fade-right">
                    <div><img className="w-3/4" src="https://i.ibb.co/8Khtgb2/Workshop-Ideas-Image-Man-1024x576.jpg" alt="" /></div>
                    <div className=""><img className="w-2/5 absolute right-10 md:right-28 -bottom-10 border-4 border-gray-100" src="https://i.ibb.co/TWTj5k7/Adobe-Stock-283020417.webp" alt="" /></div>
                </div>
                <div className="md:w-1/2" data-aos="fade-up">
                    <p>At EduSpark, we believe in the transformative power of education. 
                        Our mission is to cultivate knowledge, inspire growth, and empower 
                        individuals to reach their full potential. Through our dynamic and 
                        innovative education and training events, we create an immersive 
                        learning experience that goes beyond traditional boundaries. <br /> <br />
                        Our events are crafted with a focus on the latest trends, technologies, 
                        and best practices, ensuring participants stay ahead in their fields.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;