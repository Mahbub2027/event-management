import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('upcomingEvents.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto my-10">
                <div className=""><h2 className="text-3xl font-bold mb-5 text-[#FC3916]">Latest Bolg</h2></div> <hr />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
                    {
                        blogs.map(blog => <p
                            key={blog.id}>
                            <div>
                                <div className="card h-[440px] bg-base-100 border-2">
                                    <figure><img className="w-full h-44" src={blog.banner_img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-2xl font-bold">{blog.name}</h2>
                                        <p>{blog.event_description}</p>
                                        {/* <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </p>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;