import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import './Navbar.css';

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
    
        <li className="mr-3 text-lg font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 ' : ''} to='/'>Home</NavLink></li>
        
        {
            user ? 
            <>
            <li className="mr-3 text-lg font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 ' : ''} to='/upcomingEvents'>Events</NavLink></li>
            <li className="mr-3 text-lg font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 ' : ''} to='/blog'>Blog</NavLink></li>
            </> : ' '
        }
        <li className="mr-3 text-lg font-bold"><NavLink className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 ' : ''} to='/contact'>Contact</NavLink></li>

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
                <a className="text-3xl font-bold ">Edu<span className="text-[#FC3916]">S</span>park</a>
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
                        <Link to='/login'><AwesomeButton onClick={handleLogOut} className="nav-btn"  type="primary">Logout</AwesomeButton></Link>
                        {/* <button onClick={handleLogOut} className="py-2 px-3 rounded-lg bg-[#FC3916] text-white font-semibold text-xl ml-2"><Link to='/login'>Logout</Link></button> */}
                    </> 
                    :
                    <Link to='/login'><AwesomeButton className="nav-btn"  type="primary">Login</AwesomeButton></Link>
                    // <button className="px-3 py-2 rounded-lg bg-[#FC3916] text-white font-bold text-xl"><Link to='/login'>Login</Link></button>
                }
                {/* <Link to='/login'><a className="btn font-bold text-xl">Login</a></Link> */}
                
            </div>
        </div>
    );
};

export default Navbar;