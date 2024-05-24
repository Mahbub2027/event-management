import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-20 space-y-7">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="text-2xl font-medium ">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl font-medium ">Not found</p>
            <p ><Link to='/' ><AwesomeButton type="primary">Go Home</AwesomeButton></Link></p>
            {/* <button className="btn btn-accent btn-active text-white font-semibold text-xl"><Link to='/'>Go Home</Link></button> */}
        </div>
    );
};

export default ErrorPage;