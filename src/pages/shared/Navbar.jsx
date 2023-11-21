import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext)
    
    const handleLogOut = () =>{
        logOutUser()
        .then()
        .catch(error=>{
        console.log(error)
        })
    }

    const navLinks = <>
    
        <li className="mr-3 font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 underline' : ''} to='/'>Home</NavLink></li>
        <li className="mr-3 font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 underline' : ''} to='/about'>About</NavLink></li>
        <li className="mr-3 font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 underline' : ''} to='/services'>Services</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Event Man</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                    <>
                        <span>{user?.displayName}</span>
                        {/* <span>{user?.photoURL}</span> */}
                        <button onClick={handleLogOut} className="btn font-bold text-xl ml-2"><Link to='/login'>Logout</Link></button>
                    </> 
                    :
                    <button className="btn font-bold text-xl"><Link to='/login'>Login</Link></button>
                }
                {/* <Link to='/login'><a className="btn font-bold text-xl">Login</a></Link> */}
                
            </div>
        </div>
    );
};

export default Navbar;