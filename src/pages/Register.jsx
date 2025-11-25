import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

    const { registerWithEmailAndPass, setUser, signInWithGoogle, setLoading } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;

        if (pass.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        if (!upperCase.test(pass)) {
            setError("Password must contain at least one Uppercase letter");
            return;
        }
        if (!lowerCase.test(pass)) {
            setError("Password must contain at least one Lowercase letter");
            return;
        }
        setError("");
        

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        registerWithEmailAndPass(email, pass)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    setUser(userCredential.user)
                    toast.success("Registration Successful")
                    navigate("/")
                }).catch((error) => {
                    console.log(error)
                    toast.error(error.message);
                })
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message);

            })

    }
    const handleGoogleUp = () => {
        signInWithGoogle()
            .then((res) => {
                setLoading(false);
                setUser(res.user);
                toast.success("Registration Successful");
                navigate("/")
            })
            .catch((e) => {
                console.log(e);
                toast.error(e.message);
            });

    }

    return (
        <div className="flex justify-center my-20">
            <div className="card bg-base-200 w-full max-w-xl shrink-0 shadow-2xl border border-secondary/30 pt-10 pb-3">
                <h2 className="font-semibold text-4xl text-center pb-7 mx-10 border-primary text-primary border-b-4">
                    Register Your Account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
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

                        {error && (
                            <p className="text-red-500 text-sm mt-1">{error}</p>
                        )}

                        <button type="submit" className="btn btn-primary mt-3">
                            Register
                        </button>

                        <div className="flex items-center justify-center gap-2 my-2">
                            <div className="h-px w-16 bg-base-300"></div>
                            <span className="text-sm">or</span>
                            <div className="h-px w-16 bg-base-300"></div>
                        </div>

                        <button type='button' onClick={handleGoogleUp} className="btn btn-secondary">
                            <FcGoogle className='text-xl' /> Register With Google
                        </button>

                        <p className="font-medium text-lg text-center pt-5">
                            Already Have An Account ?{" "}
                            <Link className="hover:underline text-primary"
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