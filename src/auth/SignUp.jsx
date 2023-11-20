import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister= e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRegister = {name, email, password};
        console.log(userRegister);

        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            alert("Registration successfull")

        })
        .catch(error=>{
            console.log(error);
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-md bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <p className="text-3xl font-bold">Please Register here</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Already have an account? Please <Link to='/login' className="text-blue-500 underline font-bold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;