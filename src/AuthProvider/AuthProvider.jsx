import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

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
    const Unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
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
