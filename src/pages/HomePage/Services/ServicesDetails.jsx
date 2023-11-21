import { Link } from "react-router-dom";

const ServicesDetails = ({ event }) => {
    const { id, img, banner_img, name, price, short_description, event_description } = event;
    return (
        <div>
            <div className="card h-[440px] bg-base-100 shadow-xl relative">
                <figure><img className="w-full h-44" src={img} alt="Shoes" /></figure>
                <div className="px-3 space-y-2 ">
                    <h2 className="text-2xl font-bold mt-5 ">{name}</h2>
                    <p><span className="font-bold">Description:</span> {short_description}</p>
                    <p><span className="font-bold">Price:</span> {price}$</p>
                    <div className="card-actions absolute bottom-5 right-5">
                        <Link to={`/servicesDetails/${id}`}><button className="p-3 rounded-lg text-white font-semibold bg-[#FC3916]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;