import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerWithEmailAndPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authData = {
        registerWithEmailAndPass,
        setUser,
        user,
        setLoading,
        loading,

    }

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;