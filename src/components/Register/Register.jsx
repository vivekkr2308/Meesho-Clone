import React, { useState } from "react";
import "./Register.css"
// import "../Style.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useProductContext } from "../../Context/ProductContext";
const Register = () => {
  const {login} = useProductContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose();
    navigate("/login");
  };

  const handleSignUp = async () => {
    if (!email.includes("@")) {
      toast.error("Please fill correct email id, should contains '@'");
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
   
    }else if (name && email && password) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: name,
          });
          login({
            name: user.displayName || 'user',
            email: user.email,
          })
        }
      );
      
      toast.success("Signed up successfully", {
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
        navigate("/login");
      }, 3000);
    } else {
      toast.error("Please fill all the fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div class="dd--flex--center dd--main--container--100vh">
        <div
          class="dd--flex-direction--column dd--border-radius--5px card"
          open={open}
          onClose={handleClose}
        >
          <h3 class="head-color card-heading">Register</h3>
          <input
            type="text"
            class="dd--outline--none dd--border-radius--8px form-input full-name"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            class="dd--outline--none dd--border-radius--8px form-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            class="dd--outline--none dd--border-radius--8px form-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignUp}
            type="submit"
            class="dd--outline--none dd--border-radius--8px dd--cursor--pointer login-form-button"
          >
            Register
          </button>
          <ToastContainer />
          <hr class="hr" />
          <p>Already have an account ?</p>
          <div class="login-span">
            Click on
            <span
              class="dd--text-decoration--none dd--cursor--pointer login-form-register-button"
              onClick={handleClick}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
