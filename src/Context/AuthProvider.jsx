import React, { use, useEffect } from "react";
import { AuthContext, LoadingContext } from "./FirebaseAuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const { setLoading } = use(LoadingContext);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);

  const userInfo = {
    createUser,
    setLoading,
  };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
