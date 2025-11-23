import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-2 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <p className="font-bold text-2xl px-0 text-primary">WarmPaws</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn btn-primary">Login</a>
                <a className="btn btn-secondary">Register</a>
            </div>
        </div>
    );
};

export default Navbar;