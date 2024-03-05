import React from "react";
import Navigation from "../Navigation/Navigation";
import LowestPrice from "../LowestPrice/Lowestprice";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import { useState } from "react";
const Home = () => {
  // const [searchQuery, setSearchQuery]=useState('');
  // function OnSearch(query){
  //   setSearchQuery(query)
  // }
  return (
    <>
      <Navigation />
      <LowestPrice />
      <Categories />
      <Products />

      <Footer />
    </>
  );
};

export default Home;
