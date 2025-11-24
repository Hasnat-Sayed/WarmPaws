import React from 'react';
const vets = [
        {
            id: 1,
            name: "Dr. Alicia Snow",
            specialty: "Winter Dermatology & Paw Care",
            experience: "8 Years Experience",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500"
        },
        {
            id: 2,
            name: "Dr. Kevin Frost",
            specialty: "Cold Weather Nutrition",
            experience: "6 Years Experience",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500"
        },
        {
            id: 3,
            name: "Dr. Scarlett Pine",
            specialty: "Pet Allergies & Dry Skin",
            experience: "5 Years Experience",
            image: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];
    


    const MeetVets = () => {
        return (
            <div className='container mx-auto my-10 px-4 lg:px-20 bg-base-100'>
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-center text-primary">Meet Our Expert Vets</h3>
                </div>

                
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vets.map(vet => (
                            <div
                                key={vet.id}
                                className="card bg-base-200 shadow-sm hover:shadow-2xl transition-shadow duration-300 rounded-xl border border-secondary/20"
                            >
                                <figure className="h-64 overflow-hidden px-5 pt-5">
                                    <img
                                        src={vet.image}
                                        alt={vet.name}
                                        className="w-full h-full object-cover rounded-xl border-2 border-primary"
                                    />
                                </figure>
                                <div className="card-body text-start">
                                    <h3 className="text-2xl font-bold text-primary">
                                        {vet.name}
                                    </h3>
                                    <p className="text-accent font-bold">
                                        {vet.specialty}
                                    </p>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {vet.experience}
                                    </p>
                                    <button className="btn btn-primary w-full rounded-lg">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                

            </div>
        );
    };

    export default MeetVets;