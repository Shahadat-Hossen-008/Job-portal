import React, {  useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

function AuthProvider ({children}) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
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
    createUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider