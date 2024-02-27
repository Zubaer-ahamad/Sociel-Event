import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.emailVerified);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out');
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/service'>Service</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    return (
        <div className="bg-gradient-to-r from-indigo-500">
            <div className="navbar text-white container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <NavLink to="/" className="text-xl">Tasnim Event</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.emailVerified ? <>
                            <p className="text-indigo-600 mr-2">{user.email}</p>
                            <button onClick={handleLogOut} className="btn btn-primary px-10">Log Out</button>
                        </>
                            : <NavLink to="/login" className="btn btn-primary px-10">LogIn</NavLink>
                    }
                    {/* <NavLink to="/login" className="btn btn-primary px-10">LogIn</NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default Header;