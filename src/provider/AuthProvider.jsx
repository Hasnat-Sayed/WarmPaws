import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerWithEmailAndPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)

    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
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
        signInWithGoogle,

    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;