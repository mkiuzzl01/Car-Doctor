import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    setLoading(true);
    const Unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
       
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email:userEmail};
        setLoading(false);

        if(currentUser){
          axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
          .then(res=>{
            console.log('current user data',res.data);
          })
        }else{
          axios.post('http://localhost:5000/Logout',loggedUser,{withCredentials:true})
          .then(res=>{
            console.log('token response', res.data);
          })
        }
    })
    return ()=>{
        Unsubscribe();
    }
  },[])

  const shareTools = {
    user,
    loading,
    createUser,
    loginUser,
    setUser,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={shareTools}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
