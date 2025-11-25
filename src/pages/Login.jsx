import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import auth from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const { setUser, setLoading, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user);
                setLoading(false)
                toast.success("Signin successful")
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e);
                toast.error(e.message);
            });
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then((res) => {
                setLoading(false);
                setUser(res.user);
                toast.success("Signin successful");
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e);
                toast.error(e.message);
            });

    }

    const handleForgot = () => {
        navigate(`/forget/${email}`)
    }

    return (
        <div className="flex justify-center my-20">
            <div className="card bg-base-200 w-full max-w-xl shrink-0 shadow-2xl border border-secondary/30 pt-10 pb-3">
                <h2 className="font-semibold text-4xl text-center pb-7 mx-10 border-primary text-primary border-b-4">
                    Login to Your Account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset md:px-20">

                        <label className="label font-semibold">Email</label>
                        <input
                            name="email"
                            type="email"
                            onChange={(e)=>setEmail(e.target.value)}
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
                        <div className="pt-2">
                            <button type='button' onClick={handleForgot} className="link font-semibold link-hover">Forgot password?</button>
                        </div>


                        <button type="submit" className="btn btn-primary mt-3">
                            Login
                        </button>

                        <div className="flex items-center justify-center gap-2 my-2">
                            <div className="h-px w-16 bg-base-300"></div>
                            <span className="text-sm">or</span>
                            <div className="h-px w-16 bg-base-300"></div>
                        </div>

                        <button type='button' onClick={handleGoogle} className="btn btn-secondary">
                            <FcGoogle className='text-xl' /> Login With Google
                        </button>


                        <p className="font-medium text-lg text-center pt-5">
                            Dont’t Have An Account ?{" "}
                            <Link className="hover:underline text-primary"
                                to="/register">
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;