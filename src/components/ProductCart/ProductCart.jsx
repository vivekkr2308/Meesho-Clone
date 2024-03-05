import React from "react";
import "./ProductCart.css";
import { useProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";

const ProductCart = () => {
  
  const { isLoading,products,filteredProducts} = useProductContext();
  // console.log(filteredProducts);

  return (
    <>
      {isLoading ? (
        <>
          <h4>Loading.....</h4>
          <img src="https://shortpixel.com/img/spinner2.gif" alt="" />
        </>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <> 
              <div className="productList">
              {products.map((data) => (
                <Link
                  
                  to={`/Singleproduct/${data.id}`}
                  key={data.id}
                  style={{ textDecoration: "none" }}
                >
                  <div key={data.id} className="cartcontainer1">
                    <img src={data.image} alt="" />
                    <h2 style={{ fontSize: "15px" }}>{data.title}</h2>
                    <div className="flexcontainer1">
                      <span className="card--price"> &#8377; {data.price}</span>
                      <small className="onwards">onwards</small>
                    </div>

                    <div className="flexcontainer1">
                      <div className="rating1">{data.rating.rate}</div>
                      <span className="reviews1">
                        {data.rating.count} Reviews
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              </div>
            </>
          ) : (
            <>
             <div className="productList">
              {filteredProducts.map((data) =>  (
                <Link
                  to={`/Singleproduct/${data.id}`}
                  key={data.id}
                  style={{ textDecoration: "none" }}
                >
                  <div key={data.id} className="cartcontainer1">
                    <img src={data.image} alt="" />
                    <h2 style={{ fontSize: "15px" }}>{data.title}</h2>
                    <div className="flexcontainer1">
                      <span> &#8377; {data.price}</span>
                      <small>onwards</small>
                    </div>

                    <div className="flexcontainer1">
                      <div className="rating1">{data.rating.rate}</div>
                      <span className="reviews1">
                        {data.rating.count} Reviews
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductCart;
