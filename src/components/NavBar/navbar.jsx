import "./navbar.css";
import Logo from "../../../public/img/meesho.png";
import Search from "../../../public/img/search.png";
import Mobile from "../../../public/img/mobile.png";
import User from "../../../public/img/user.png";
import Cart from "../../../public/img/cart.png";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import Login from "../Login/Login";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const navbar = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { isLoading, OnSearch, searchQuery, GetFilteredProducts,isUserLogin, user,logout } =
    useProductContext();

  function handleSearch(e) {
    e.preventDefault();
    // OnSearch(input);
    GetFilteredProducts(input);

    setInput("");
  }

 
  const handleLogout = async () => {
    try {
      await logout();
      
        toast.success("Logout successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <header className="header">
      <div className="headerLeft">
        <div className="logoContainer">
          <Link to={"/"}>
            <img src={Logo} alt="Meesho-logo" />
          </Link>
        </div>

        {/* for the search  */}
        <div className="searchInputContainer">
        <div className="searchIcon">
          <img src={Search} alt="" />
        </div>
        <form onSubmit={handleSearch}>
          <input
            id="inputForm"
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            className="inputSearch"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
        <div className="inputCloseSearch">
            <i className="fa-solid fa-xmark" id="closeSearch"></i>
        </div>
        </div>
      </div>

      <div className="headerRight">
        <div className="downloadContainer">
          <div className="mobileIcon">
            <img src={Mobile} alt="" />
          </div>
          <p>Download App</p>

          <div className="downloadHoverBtnContainer">
            <h3>Download From</h3>

            <a href="" className="downloadBtn">
              <img
                src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                alt=""
              />
            </a>
            <a href="" className="downloadBtn">
              <img
                src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="becomeSupplierContainer">
          <a className="bs" href="https://supplier.meesho.com/?">
            <p class="become">Become a Supplier</p>
          </a>
        </div>

        <div className="profileAndCart" style={{ cursor: "pointer" }}>
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img src={User} alt="userlogo" />
            </div>
            {isUserLogin? (
              <>
            <button >{user.name}</button>
            
            <div className="downloadHoverBtnContainer">
              
              <a onClick={handleLogout}>Logout</a>
              {navigate("/")}
              
            </div>
            
            </>
          
              
            ): (
              <button
        
              color="inherit"
              variant="outlined"
              onClick={()=> navigate("/login")}
            >
              Login
            </button>
            )}
          <Link to={"/cart-page"} style={{ textDecoration: "none" }}>
            <div className="CartContainer" style={{ cursor: "pointer" }}>
              <div className="CartIcon">
                <img src={Cart} alt="" />
              </div>
              <p style={{ color: "#333333" }}>Cart </p>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default navbar;
