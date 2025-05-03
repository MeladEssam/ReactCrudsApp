import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AddProduct.css";

function AddProduct() {
  let Navigate = useNavigate();
  let Title = useRef();
  let Price = useRef();
  let Description = useRef();
  let addNewProduct = () => {
    // console.log("title: " + Title.current.value);
    // console.log("Des: " + Description.current.value);
    let productTitle = Title.current.value;
    let productDesc = Description.current.value;
    let productPrice = Price.current.value;
    console.log(productTitle);
    console.log(productDesc);
    console.log(productPrice);

    if (productTitle === "" || productDesc === "" || productPrice === "") {
      Swal.fire({
        title: "All Inputs Are Required !",
      });
    } else {
      let url = "http://localhost:9000/products";

      fetch(url)
        .then((response) => response.json())
        .then((products) => {
          let idList = [];
          for (let i = 0; i < products.length; i++) {
            idList.push(products[i].id);
          }
          let maxId = Math.max(...idList);
          console.log(maxId);
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: `${maxId + 1}`,
              title: productTitle,
              description: productDesc,
              price: productPrice,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              Navigate("/products");
            });
        });
    }
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3 fw-bold add-title">
          Add Your Product From Here{" "}
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
                  addNewProduct();
                }}
                type="submit"
                className="btn btn-primary"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
