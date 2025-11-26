import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdError } from 'react-icons/md';

const ErrorPage = () => {
    return (
        <div className='container mx-auto w-full flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <div className='bg-base-200 min-h-screen flex flex-col justify-center items-center text-center'>

                    <MdError className=" text-6xl text-primary" />
                    <h1 className='text-5xl font-semibold mt-2'>
                        Oops, page not found!
                    </h1>
                    <p className='text-[#627382] text-xl py-4 mb-2'>
                        The page you are looking for is not available.
                    </p>

                    <Link to='/' className="btn btn-primary font-semibold text-white py-3 px-10 rounded-sm ">
                        Go Back!
                    </Link>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;