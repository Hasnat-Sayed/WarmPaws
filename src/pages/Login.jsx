import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import auth from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {

    const { setUser, user, setLoading } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user);
                setLoading(false)
                // toast.success


            })
            .catch((e) => {
                console.log(e);
                toast.error(e.message);
            });
    }
    console.log(user)

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
                            <a className="link link-hover">Forgot password?</a>
                        </div>


                        <button type="submit" className="btn btn-primary mt-3">
                            Login
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