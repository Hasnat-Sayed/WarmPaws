import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';
import { MdEventAvailable } from 'react-icons/md';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const { id } = useParams()
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))

    }, [])

    const result = services.find(service => service.serviceId == id)

    const handleBook = (e) => {
         e.preventDefault();
        toast.success("Service Booked")
         e.target.reset();
    }

    return (
        <div className='bg-base-100 px-4 lg:px-20 py-4 md:py-8 lg:py-16'>
            <div className='md:flex gap-x-10 border-b border- pb-10'>

                <div className='bg-base-300/50 p-6 rounded-2xl shadow-2xl'>
                    <img src={result?.image} className='rounded-xl h-96 w-96 object-cover' alt="" />
                </div>

                <div className='flex-1'>
                    <div className='border-b pb-5 border-accent'>
                        <h1 className='text-4xl text-primary text-center md:text-left font-bold mt-8 md:mt-0'>
                            {result?.serviceName}
                        </h1>
                        <p className='mt-4 text-center md:text-left text-2xl font-semibold text-primary '>Category: <span className='bg-primary text-white px-3 py-1 rounded-xl shadow-5xl'>{result?.category}</span></p>
                    </div>

                    <div className='border-b pb-4 border-accent'>

                        <p className='mt-4 mb-4 text-center md:text-left text-2xl font-semibold text-orange-400'>
                            <span className='text-accent'>Provided by </span>
                            {result?.providerName}
                        </p>
                        <p className='text-center md:text-left text-2xl font-semibold text-orange-400'>
                            <span className='text-accent'>Provider Email: </span>
                            {result?.providerEmail}
                        </p>
                    </div>

                    <div className='md:flex md:justify-between md:items-center my-5 md:max-w-md'>

                        <div className='text-center md:text-left md:mt-0 mt-8'>
                            <GiPriceTag className='mx-auto md:m-0 text-4xl' />
                            <p className='mt-2 font-semibold text-accent'>Price</p>
                            <h2 className='text-3xl text-primary font-extrabold'>${result?.price}</h2>
                        </div>

                        <div className='text-center md:text-left md:mt-0 mt-8'>
                            <FaRegStar className='mx-auto md:m-0 text-4xl' />
                            <p className='mt-2 font-semibold text-accent'>Rating</p>
                            <h2 className='text-3xl text-primary font-extrabold'>{result?.rating}</h2>
                        </div>

                        <div className='text-center md:text-left md:mt-0 mt-8'>
                            <MdEventAvailable className='mx-auto md:m-0 text-4xl' />
                            <p className='mt-2 font-semibold text-accent'>Slots Available</p>
                            <h2 className='text-3xl text-primary font-extrabold'>{result?.slotsAvailable}</h2>
                        </div>



                    </div>

                    <p className='pt-4 border-t border-accent text-center md:text-left text-2xl font-semibold text-primary'>
                        Description

                    </p>
                    <p className='text-center md:text-left font-medium'>{result?.description}</p>

                </div>
            </div>

    
            <div className="hero bg-base-100 pt-8">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="animate__animated animate__bounce text-5xl text-primary font-bold">Book Service</h1>
                        
                    </div>
                    <div className="card bg-base-200 w-full max-w-lg rounded-2xl shrink-0 shadow-2xl">
                        <div className="card-body rounded-2xl border border-secondary/20">
                            <form onSubmit={handleBook}>
                                <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Enter Your Email" />
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Enter Your name" />
                                <button className="btn btn-secondary mt-4">Login</button>
                            </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;