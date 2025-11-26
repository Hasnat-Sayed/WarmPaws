import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext)
    console.log(user)
    const [isOpen, setIsOpen] = useState(false)

    const updateBtn = () => {
        setIsOpen(!isOpen)
        console.log("sdf")
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            setUser({ ...user, photoURL: photoUrl, displayName: name })
            setIsOpen(!isOpen)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="container mx-auto max-w-2xl">

                <div className="bg-primary text-secondary border-2 border-primary rounded-t-2xl p-8">
                    <h1 className="animate__animated animate__bounce text-4xl font-bold text-center">My Profile</h1>
                </div>

                <div className='flex flex-col items-center justify-center border-2 border-primary border-t-0 gap-10 p-10 rounded-b-2xl bg-base-100'>
                    <div className="avatar">
                        <div className="w-36 rounded-full ring-5 ring-offset-8 ring-primary">
                            <img src={user?.photoURL} />
                        </div>
                    </div>

                    <div className='space-y-3 text-center text-secondary'>
                        <p className='font-medium text-xl'><span className='text-primary'>Name: </span> {user?.displayName}</p>
                        <p className='font-medium text-xl'><span className='text-primary'>Email:</span> {user?.email}</p>
                    </div>
                </div>

                {
                    !isOpen && (
                        <div className='flex items-center justify-center my-8'>
                            <button onClick={updateBtn} className='btn btn-secondary p-6 text-xl rounded-xl'>Update Your Profile</button>
                        </div>
                    )
                }



                {
                    isOpen && (
                        <div className="card bg-base-100 w-full shrink-0 shadow-2xl border border-secondary/30 pt-10 pb-3 mt-16">
                            <h2 className="font-semibold text-2xl text-center text-primary">
                                Update Your Profile
                            </h2>
                            <form onSubmit={handleUpdate} className="card-body">
                                <fieldset className="fieldset md:px-20">

                                    <label className="label font-semibold">Name</label>
                                    <input
                                        defaultValue={user?.displayName}
                                        name="name"
                                        type="text"
                                        className="input w-full bg-base-200"
                                        placeholder="Enter Your Name"
                                    />

                                    <label className="label font-semibold">Photo URL</label>
                                    <input
                                        defaultValue={user?.photoURL}
                                        name="photo"
                                        type="text"
                                        className="input w-full bg-base-200"
                                        placeholder="Enter Your Photo URL"
                                    />

                                    <button type="submit" className="btn btn-primary mt-3">
                                        Update
                                    </button>
                                </fieldset>
                            </form>

                        </div>
                    )
                }






            </div>
        </div>
    )
};


export default MyProfile;