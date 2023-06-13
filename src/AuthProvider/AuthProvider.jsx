import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,


    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser);
            if (loggedUser) {
                axios.post('https://broadcast-brilliance-institude-server-side.vercel.app/jwt', {
                    email: loggedUser.email
                })
                    .then(tokenData => {
                        localStorage.setItem('token', tokenData.data.token);
                    })
            }
            else {
                localStorage.removeItem('token');
            }

            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;