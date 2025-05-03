import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
function ProductDetails() {
  let [product, setProduct] = useState();
  let parms = useParams();
  let productId = parms.productId;
  let url = `http://localhost:9000/products/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((prod) => {
        setProduct(prod);
      });
  }, []);

  return (
    <>
      {product && (
        <div className="container">
          <h1 className="text-center product-details-title mt-3">
            Product Details Here
          </h1>

          <div className="row d-flex justify-content-center mt-5">
            <div className="col-10">
              <div className="card product-card-details">
                {product.image ? (
                  <div className="product-details-image ">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                ) : null}

                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text lh-lg fs-5">{product.description}</p>
                  <div className="product-info">
                    <div className="price-rating d-flex justify-content-between text-white">
                      <h5 className="product-price d-flex align-items-center">
                        Product Price:
                        <span className="ms-3 fw-bold fs-3">
                          ${product.price}
                        </span>
                      </h5>

                      {product.rating ? (
                        <h5 className="product-rate d-flex align-items-center">
                          Product Rate:
                          <span className="ms-3 fw-bold fs-3">
                            ${product.rating.rate}
                          </span>
                        </h5>
                      ) : null}
                    </div>
                  </div>

                  <button className="btn w-100 mt-4 fw-bold fs-3 buy-product-btn text-white py-3">
                    Buy The Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductDetails;
