import { useEffect } from "react";
import { useState } from "react";
import ServicesDetails from "./ServicesDetails";

const Services = () => {
    const [eventDetails, setEventDetails] = useState([])

    useEffect(()=>{
        fetch('event.json')
        .then(res=> res.json())
        .then(data=>setEventDetails(data))
    },[])

    return (
        <div className="w-10/12 mx-auto my-40">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#FC3916]">Educational and Training Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {
                eventDetails.map(event=><ServicesDetails key={event.id} event={event}></ServicesDetails>)
            }
            </div>
        </div>
    );
};

export default Services;