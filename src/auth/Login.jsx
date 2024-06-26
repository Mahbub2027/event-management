import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import { AwesomeButton } from "react-awesome-button";

const Login = () => {
    const {loginUser, googleLogin} = useContext(AuthContext);
    const [loginPassError, setLoginPassError] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userLogin = {email, password};
        console.log(userLogin);

        loginUser(email, password)
        .then(res=>{
            console.log(res.user);
            navigate(location?.state ? location?.state : '/')
            Swal.fire({
                title: 'Success',
                text: 'Login Successfull',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            
        })
        .catch(error=>{
            console.log(error.message)
            setLoginPassError(" *Please provide valid email & password")
        })


    }
    const handleGoogleLogin= ()=>{

        googleLogin()
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location?.state : '/')
            Swal.fire({
                title: 'Success',
                text: 'Login Successfull',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-md bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <p className="text-3xl font-bold">Please Log in here</p>
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
                            {
                                loginPassError && <p className="text-red-500 mt-1">{loginPassError}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                        <AwesomeButton  type="primary">Login</AwesomeButton>
                            
                        </div>
                        <div className="form-control mt-6">
                        {/* <AwesomeButton onClick={handleGoogleLogin} className="nav-btn"  type="primary">Login with Google</AwesomeButton> */}
                            <button onClick={handleGoogleLogin} className="p-2 bg-[#FC3916] rounded-lg text-white font-bold normal-case">Login with Google</button>
                           
                        </div>
                        <p>New here! Please <Link to='/signup' className="text-blue-500 underline font-bold">Register</Link></p>
                       
                    </form>
                    
                </div>
            </div> 
        </div>
    );
};

export default Login;