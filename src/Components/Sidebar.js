// import { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import ProductsCategory from "./Pages/ProductsCategory";
function Sidebar() {
  // https://fakestoreapi.com/products/categories

  // let [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   // do api request
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((categories) => {
  //       console.log(categories);
  //       setCategories(categories);
  //     });
  // }, []);

  // let getProductsInCategory = (category) => {
  //   // do api request
  //   fetch(`http://localhost:9000/products`)
  //     .then((res) => res.json())
  //     .then((allProducts) => {
  //       console.log(allProducts);
  //       let productsInCategory = [];
  //       for (let i = 0; i < allProducts.length; i++) {
  //         if (allProducts[i].category === category) {
  //           productsInCategory.push(allProducts[i]);
  //         }
  //       }
  //       console.log(productsInCategory);

  //       // call to productsCategory component and pass for it the productsInCategory
  //     });
  // };

  // let categoriesButtons = [];
  // if (categories.length > 0) {
  //   categoriesButtons = categories.map((category) => {
  //     return (
  //       <li key={category}>
  //         <Link
  //           to={`products/category/${category}`}
  //           className="fs-5 fw-bold link"
  //           onClick={() => {
  //             getProductsInCategory(category);
  //           }}
  //         >
  //           {category}
  //         </Link>
  //       </li>
  //     );
  //   });
  // }

  return (
    <>
      <div className="sidebarLinks">
        <ul>
          <li>
            <Link to={"products"} className="fs-5 fw-bold link">
              Get All Products
            </Link>
          </li>
          {/* {categoriesButtons} */}
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
