import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';



const PopularServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])
    console.log(services)


    return (
        <div className='container mx-auto mt-16 mb-16 px-4 lg:px-20'>
            <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-center text-primary">Popular Winter Care Services</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => (
                        <div key={service.serviceId} className="card bg-base-200 shadow-sm hover:shadow-2xl transition-shadow duration-300">
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
                                    <button className="btn btn-primary w-full rounded-lg">View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>




        </div>
    );
};

export default PopularServices;