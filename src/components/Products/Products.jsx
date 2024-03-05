import React, { useState } from "react";

import { useProductContext } from "../../Context/ProductContext";
import ProductCart from "../ProductCart/ProductCart";
import "./Products.css";
const Products = () => {
  
  const { isLoading, OnSearch,searchQuery,GetFilteredProducts } = useProductContext();
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  

 

  const handleCheckboxChange = (event) => {
    GetFilteredProducts(event.target.value,'category');

    setSelectedCheckbox(event.target.value);
  
    console.log(event.target.value);
  };
 
 


 

  return (
    <>
      <h1 className="ProductFU">Products For You</h1>
      {isLoading ? (
        <div>....Loading</div>
      ) : (
        <div class="Product_container_You">
          <div class="product_container_you_content">
            <aside class="product_category_you_aside">
              <h3 className="Category">Category</h3>
              <div class="display_Category_list">
                <label forhtml="all-product">
                  <input
                    name="text"
                    type="radio"
                    value="all-product"
                    checked={selectedCheckbox === "all-product"}
                    onChange={handleCheckboxChange}
                  />
                  <span>all</span>
                </label>

                <label forhtml="men's clothing">
                  <input
                    name="text"
                    type="radio"
                    value="men's clothing"
                    checked={selectedCheckbox === "men's clothing"}
                    onChange={handleCheckboxChange}
                  />
                  <span>men's clothing</span>
                </label>

                <label forhtml="jewelery">
                  <input
                    name="text"
                    type="radio"
                    value="jewelery"
                    checked={selectedCheckbox === "jewelery"}
                    onChange={handleCheckboxChange}
                  />
                  <span>jewelery</span>
                </label>

                <label forhtml="electronics">
                  <input
                    name="text"
                    type="radio"
                    value="electronics"
                    checked={selectedCheckbox === "electronics"}
                    onChange={handleCheckboxChange}
                  />
                  <span>Electronics</span>
                </label>

                <label forhtml="women's clothing">
                  <input
                    name="text"
                    type="radio"
                    value="women's clothing"
                    checked={selectedCheckbox === "women's clothing"}
                    onChange={handleCheckboxChange}
                  />
                  <span>women's clothing</span>
                </label>
              </div>
            </aside>

            <main
              class="product_category_display"
              id="product_category_displayId"
            >
              <ProductCart
                // // inputSearchData={searchwithTitle}
                // filteredProducts={filteredProducts}
                // products={products}
              />
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
