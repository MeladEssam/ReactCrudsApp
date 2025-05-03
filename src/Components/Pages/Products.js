import "./Products.css";
import Product from "../Product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  let url = "http://localhost:9000/products";
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((prods) => {
        setProducts(prods);
      });
  }, []);
  let updateState = () => {
    // do api request and update the products state
    fetch(url)
      .then((response) => response.json())
      .then((prods) => {
        setProducts(prods);
      });
  };
  let productsElements = products.map((product) => {
    return (
      <Product product={product} key={product.id} updateState={updateState} />
    );
  });

  return (
    <>
      <div className="products container ">
        <h1 className="products-title text-center my-5">All Products</h1>
        <Link to={"/products/add"} className="btn btn-success mb-5">
          Add New Product
        </Link>
        <table className="table products-table table-striped ">
          <thead>
            <tr>
              <th className="align-middle">Product ID</th>
              <th className="align-middle">Product Title</th>
              <th className="align-middle">Price</th>
              <th className="align-middle">Operations</th>
            </tr>
          </thead>
          <tbody>{productsElements}</tbody>
        </table>
      </div>
    </>
  );
}
export default Products;
