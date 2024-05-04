import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
  };
  return (
    <div>
      <AuthContext.Provider value={shareTools}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
