import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useParams } from 'react-router';
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const ForgetPass = () => {

    const { email } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formEmail = e.target.email.value;
        sendPasswordResetEmail(auth, formEmail)
            .then(() => {
                window.open('https://mail.google.com/mail/u/0/')
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message)
            });
    }
    return (
        <div className="flex justify-center items-center  min-h-screen">
            <div className="card bg-base-200 w-full max-w-xl shrink-0 shadow-2xl border border-secondary/30 pt-10 pb-3">
                <h2 className="font-bold text-3xl text-center pb-7 mx-10 border-primary text-accent border-b-4">
                    Forgot Your Password?
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset md:px-20">

                        <label className="label font-semibold">Email</label>
                        <input
                            name="email"
                            type="email"
                            defaultValue={email}
                            className="input w-full bg-base-100"
                            placeholder="Enter Your Email"
                            required
                        />



                        <button type="submit" className="btn btn-primary mt-3">
                            Reset Password
                        </button>


                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;