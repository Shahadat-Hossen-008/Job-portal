import React, {  useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
const provider = new GoogleAuthProvider();
function AuthProvider ({children}) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo)=>{
        setLoading(true);
        return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log("user",currentUser);
            
        }) 
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
    user,
    setUser,
    loading, 
    createUser,
    signIn,
    updateUserProfile,
    googleSignIn,
    signOutUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider