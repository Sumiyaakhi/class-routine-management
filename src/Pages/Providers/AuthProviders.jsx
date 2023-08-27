import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const resetPassword = (email) =>{
        setLoading(true);
       return sendPasswordResetEmail(auth,email)
    }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
         
        
        });
        return () => {
          return unsubscribe();
        };
      }, []);

    const authInfo = {
        user,
        loading,
        signIn,
        createUser,
        resetPassword,
        googleSignIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};


export default AuthProviders;