import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center my-20">
            <div className="card bg-base-200 w-full max-w-xl shrink-0 shadow-2xl border border-secondary/30 pt-10 pb-3">
                <h2 className="font-semibold text-4xl text-center pb-7 mx-10 border-primary text-primary border-b">
                    Register Your Account
                </h2>
                <form className="card-body">
                    <fieldset className="fieldset md:px-20">

                        <label className="label font-semibold">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full bg-base-100"
                            placeholder="Enter Your Name"
                            required
                        />

                        <label className="label font-semibold">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input w-full bg-base-100"
                            placeholder="Enter Your Photo URL"
                            required
                        />

                        <label className="label font-semibold">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full bg-base-100"
                            placeholder="Enter Your Email"
                            required
                        />

                        <label className="label font-semibold">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-full bg-base-100"
                            placeholder="Enter Your Password"
                            required
                        />



                        <button type="submit" className="btn btn-primary mt-3">
                            Register
                        </button>
                        <p className="font-medium text-lg text-center pt-5">
                            Already Have An Account ?{" "}
                            <Link className="hover:underline hover:text-primary" 
                            to="/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;