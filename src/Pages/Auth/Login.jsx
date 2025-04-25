import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { addUser, getUser, removeUser } from "../../Utilities/Utilites";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        addUser(result);
        const storedUser = getUser();
        if (storedUser) {
          setUser(storedUser.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        removeUser();
        const storedUser = getUser();
        if (!storedUser) {
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const storedUser = getUser(); 
    if (storedUser) {
      setUser(storedUser.user); 
    }
  }, []);
  return (
    <div>
      {user ? (
        <div className="flex gap-x-2 items-center">
          <button className="cursor-pointer" onClick={handleLogOut}>
            <img src={user.photoURL} className=" rounded-full h-10 w-10" />
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleSignup}>
          SingUp
        </button>
      )}
    </div>
  );
};

export default Login;
