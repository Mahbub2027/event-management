// import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const ServicesCategory = () => {

    const categories = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const category = categories.find(category => category.id === intId)
    console.log(category)


    return (
        <div>
            <Navbar></Navbar>

            <div className="w-11/12 mx-auto mb-16">
                <img className="w-full h-[80vh]" src={category.banner_img} alt="" />
                <h2 className="text-3xl font-bold my-10">{category.name}</h2>
                <div className="space-y-2">
                    <p className="text-lg"><span className="font-bold">Event Name:</span> {category.eventName}</p>
                    <p className="text-lg"><span className="font-bold">Date:</span> {category.date}</p>
                    <p className="text-lg"><span className="font-bold">Time:</span> {category.time}</p>
                    <p className="text-lg"><span className="font-bold">Location:</span> {category.location}</p>
                    <p className="text-lg"><span className="font-bold">Description:</span> {category.event_description}</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ServicesCategory;