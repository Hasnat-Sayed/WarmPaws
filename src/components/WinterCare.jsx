import React from 'react';

const WinterCareTips = () => {
    const tips = [
        {
            id: 1,
            icon: "https://img.icons8.com/?size=100&id=kkElZUHEAYmL&format=png&color=000000",
            title: "Keep Your Pet Warm Indoors",
            description: "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding and avoid exposing them to cold floors for long periods."
        },
        {
            id: 2,
            icon: "https://img.icons8.com/?size=100&id=JAdy58vqVA4x&format=png&color=000000",
            title: "Moisturize Paws Regularly",
            description: "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation from snow, salt, or ice."
        },
        {
            id: 3,
            icon: "https://img.icons8.com/?size=100&id=Q9y0qG2H9Ar3&format=png&color=000000",
            title: "Limit Outdoor Time",
            description: "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pets. Stay alert to their body language."
        },
        {
            id: 4,
            icon: "https://img.icons8.com/?size=100&id=14270&format=png&color=000000",
            title: "Hydrate & Maintain Nutrition",
            description: "Pets lose moisture faster in winter. Make sure water bowls stay full, and feed a balanced diet to support warmth and their immunity and health."
        }
    ];

    return (
        <div className='bg-base-200 py-16'>
            <div className="container mx-auto mt-10 px-4 lg:px-20">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-center text-primary">
                        Winter Care Tips for Pets
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map(tip => (
                        <div
                            key={tip.id}
                            className="card bg-base-100 ring shadow-sm hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="card-body items-center text-center">
                                <div className="mb-4">
                                    <img src={tip.icon} alt="" />
                                </div>
                                <p className="text-xl font-bold text-primary mb-2">
                                    {tip.title}
                                </p>
                                <p className="text-accent leading-relaxed">
                                    {tip.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WinterCareTips;