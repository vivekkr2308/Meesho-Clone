import React, { useState } from "react";

 import "./Login.css"
 import { useProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, provider } from "../../firebase/firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = ({ props }) => {
  const {login,logout} = useProductContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const tryDispatchToast = () => {
    
    handleClose();
    toast.success("Login successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  const catchErrorToast = () => {
    toast.error("User not found, please register", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const loginWithEmailandPassword = async () => {
    try {
      // Sign in with Firebase authentication
      const response = await signInWithEmailAndPassword(auth,email, password);
      tryDispatchToast();
            // If successful, get user data from the response and call login
      const user = {
              name: response.user.displayName || 'User', // Use display name if available, otherwise default to 'User'
              email: response.user.email,
            };
            // console.log(user.name);
      login(user);  //this login function in productContext, passing user details in it
      
    } catch (err) {
      catchErrorToast();
    }
  };

  const googleLogin = async () => {
    try {
      const response =await signInWithPopup(auth, provider);
      tryDispatchToast();
                 // If successful, get user data from the response and call login
                 const user = {
                  name: response.user.displayName || 'User', // Use display name if available, otherwise default to 'User'
                  email: response.user.email,
                };
                
          login(user);  //this login function in productContext, passing user details in it
    } catch (err) {
      catchErrorToast();
    }
  };

  const handleClick = () => {
    handleClose();
    navigate("/register");
  };

  return (
    <div class="dd--flex--center dd--main--container--100vh">
      <div
        class="dd--flex-direction--column dd--border-radius--5px card"
        open={open}
        onClose={handleClose}
      >
        <h3 class="head-color card-heading">Login</h3>
        <input
          type="email"
          class="dd--outline--none dd--border-radius--8px form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => 
            setEmail(e.target.value)}
        />
        <input
          type="password"
          class="dd--outline--none dd--border-radius--8px form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          class="dd--outline--none dd--border-radius--8px dd--cursor--pointer login-form-button"
          onClick={loginWithEmailandPassword}
        >
          Login
        </button>
        <ToastContainer />
        <button
          class="dd--outline--none dd--border-radius--8px dd--cursor--pointer google-form-button"
          onClick={googleLogin}
        >
          Login with Google
        </button>
        <hr class="hr" />

        <p>You don't have an account ?</p>
        <div class="login-span">
          Click on
          <span
            class="dd--text-decoration--none dd--cursor--pointer login-form-register-button"
            onClick={handleClick}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
