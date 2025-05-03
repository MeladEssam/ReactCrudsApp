import { useParams } from "react-router-dom";
import { use, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./EditProduct.css";
function EditProduct() {
  let parms = useParams();
  let productId = parms.productId;

  let Navigate = useNavigate();
  let Title = useRef();
  let Price = useRef();
  let Description = useRef();

  console.log(productId);
  let url = `http://localhost:9000/products/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
        Title.current.value = product.title;
        Description.current.value = product.description;
        Price.current.value = product.price;
      });
  }, []);

  let EditProductDetails = () => {
    if (
      Title.current.value === "" ||
      Description.current.value === "" ||
      Price.current.value === ""
    ) {
      Swal.fire({
        title: "All Inputs Are Required !",
      });
    } else {
      // do put request to update product details

      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: Title.current.value,
          description: Description.current.value,
          price: Price.current.value,
        }),
      }).then((response) => {
        if (response.status === 200) {
          Navigate("/products");
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3 fw-bold edit-title">
          Edit Your Product From Here
        </h2>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-10 col-lg-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Product Title
                </label>
                <input
                  ref={Title}
                  placeholder="product title here"
                  type="text"
                  className="form-control "
                  id="title"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Product Description
                </label>
                <input
                  ref={Description}
                  placeholder="product description here"
                  type="text"
                  className="form-control"
                  id="description"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Product Price
                </label>
                <input
                  ref={Price}
                  placeholder="product price here"
                  type="text"
                  className="form-control "
                  id="price"
                  aria-describedby="emailHelp"
                />
              </div>
              <button
                onClick={() => {
                  EditProductDetails();
                }}
                type="submit"
                className="btn btn-primary"
              >
                Edit Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditProduct;
