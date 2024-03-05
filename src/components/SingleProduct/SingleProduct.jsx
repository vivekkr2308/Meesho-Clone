import "./SingleProduct.css";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/ProductContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const API =
  "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct, products } =
    useContext(AppContext);

  // console.log(singleProduct);

  const {
    id: alias,
    title,
    price,
    description,
    image,
    rating,
    category,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  const handleAddBtn = () => {
    addItem(singleProduct);
    navigate("/cart-page");
  };

  return (
    <>
      {isSingleLoading ? (
        <div>....Loading</div>
      ) : (
        <div class="cartcontainer">
          <div class="top">
            <div class="detailsimgandbtn">
              <img className="image" src={image} alt="single product image" />
              <div class="btns">
                <Link to="/cart-page">
                  <button class="addtocart" onClick={handleAddBtn}>
                    Add to Cart
                  </button>
                </Link>

                <Link to={"/login"}>
                  <button class="buynow">Buy Now</button>
                </Link>
              </div>
            </div>
            <div class="flexcontainer">
              <h3 style={{ marginRight: "300px" }}>{title}</h3>
              <h1 style={{ marginLeft: "-87%" }}> &#8377; {price}</h1>
              <div class="ratingreviews">
                {/* <span>{rating.rate}</span> */}
                {/* <p>{rating.count} Reviews</p> */}
              </div>
              <div class="selectsize">
                <h3>Select Size</h3>
                <small>Free Size</small>
              </div>
              <div class="fulldetails">
                <h3>Product Details</h3>
                <p style={{ fontSize: "15px" }}>Name : {title}</p>
                <p>Brand: {category}</p>
                <p>{description}</p>
                <p>
                  Size : Free Size (Length Size: 30 <span>in</span>)
                </p>
                <a href="https://www.meesho.com/pz15led2pcswith1switch0283/p/2tesrw">
                  More Information
                </a>
              </div>
            </div>
          </div>
          <div class="bottom">
            <h3 class="related">Related Products</h3>

            <div class="relatedproduct">
              {products.map((data) => (
                <>
                  <div key={data.id}>
                    {data.category === products[id - 1].category ? (
                      data.title !== products[id - 1].title ? (
                        <Link
                          to={`/Singleproduct/${data.id}`}
                          key={data.id}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={data.id} class="cartcontainer1">
                            <img src={data.image} alt="" />
                            <h2 style={{ fontSize: "15px" }}>{data.title}</h2>
                            <div class="flexcontainer1">
                              <span> &#8377; {data.price}</span>
                              <small>onwards</small>
                            </div>
                            <div class="flexcontainer1">
                              <div class="rating1">{data.rating.rate}</div>
                              <span class="reviews1">
                                {data.rating.count} Reviews
                              </span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
