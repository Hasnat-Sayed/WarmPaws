import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            petName: "Max (Golden Retriever)",
            rating: 4,
            review: "The winter grooming service was fantastic! Max's paws have never been healthier. The team was so caring and professional.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
            date: "2 weeks ago"
        },
        {
            id: 2,
            name: "Michael Chen",
            petName: "Luna (Husky)",
            rating: 5,
            review: "Excellent winter care consultation! They helped us prepare Luna for the cold season. Highly recommend their services!",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
            date: "1 month ago"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            petName: "Whiskers (Persian Cat)",
            rating: 4,
            review: "The cat winter spa was amazing! Whiskers looks and feels great. The staff really knows how to handle anxious cats.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            date: "3 weeks ago"
        },
        {
            id: 4,
            name: "David Thompson",
            petName: "Bella (Beagle)",
            rating: 5,
            review: "Winter coat fitting was perfect! Bella loves her new outfit and stays warm during our walks. Great service!",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
            date: "1 week ago"
        }
    ];

    return (
        <div className='bg-base-200 py-16'>
            <div className="container mx-auto px-4 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        What Our Clients Say
                    </h2>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="card bg-base-100  shadow-lg hover:shadow-2xl hover:-translate-y-2  transition-all duration-300 border border-secondary/30"
                        >
                            <div className="card-body">
                                <div className='flex gap-2'>
                                    {[...Array(testimonial.rating)].map(value => (
                                        <span
                                            key={value}
                                            className=" text-xl text-yellow-500"
                                        ><FaStar></FaStar></span>
                                    ))}
                                </div>

                                <p className="text-accent text-sm leading-relaxed mb-2 ">
                                    "{testimonial.review}"
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-300">
                                    <div className="avatar">
                                        <div className="w-16 h-16 rounded-full ring-3 ring-primary ">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-xl">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-accent">
                                            {testimonial.petName}
                                        </p>
                                        <p className="text-sm text-accent">
                                            {testimonial.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                


            </div>
        </div>
    );
};

export default Testimonial;