import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import { AuthContext } from '../../../../Context/AuthProvider';

const Header = () => {

    const { logOut, user,setUser } = useContext(AuthContext);

    const handleSignOut = () => {
        setUser(null);
        logOut()
            .then(() => { console.log(user,"SS") })
            .catch((error) => { })
    }

    const menuItems = <>
        <li><Link className='font-semibold text-lg' to={'/'}>Home</Link></li>
        {user?.uid ? <li><Link className='font-semibold text-lg'><button onClick={handleSignOut}>Logout</button></Link></li> :
            <li><Link className='font-semibold text-lg' to={'/login'}>Login</Link></li>}
        <li><Link className='font-semibold text-lg' to={'/orders'}>Orders</Link></li>

    </>

    return (
        <div className='py-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to={'/'} className=" normal-case text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn btn-outline btn-warning' to={'/'}>Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;