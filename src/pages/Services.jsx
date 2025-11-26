import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Loading from '../components/Loading';
import { Link } from 'react-router';
import { motion } from "motion/react"


const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div className='container mx-auto mt-8 mb-16 px-4 lg:px-20 min-h-screen'>
            <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-center text-primary">Our Services</h3>
            </div>
            {
                loading ? (<Loading></Loading>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            services.map(service => (
                                <motion.div initial={{ scale: 0.9 }} animate={{
                                    scale: 1,
                                    transition: { duration: 0.4 }
                                }} key={service.serviceId} className="card bg-base-200 shadow-sm hover:shadow-2xl transition-shadow duration-300">
                                    <figure>
                                        <img
                                            src={service?.image}
                                            className="h-80 w-full object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">{service?.serviceName}</h2>
                                        <div className='flex justify-between items-center w-full py-2'>
                                            <div className='flex gap-1 items-center font-semibold text-accent text-lg '>
                                                <FaStar className='text-yellow-500' />
                                                Rating:
                                                <span className='text-primary'> {service?.rating}</span>
                                            </div>
                                            <div className='font-semibold text-accent text-lg' >
                                                Price:
                                                <span className='text-primary'> ${service?.price}</span></div>
                                        </div>

                                        <div className="card-actions w-full">
                                            <Link to={`/details/${service?.serviceId}`} className="w-full"><button className="btn btn-primary w-full rounded-lg">View Details</button></Link>

                                        </div>
                                    </div>
                                </motion.div>
                            )
                            )
                        }
                    </div>
                )
            }


        </div>
    );
};

export default Services;