import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/Pages/ProductDetails";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import AddProduct from "./Components/Pages/AddProduct";
import "./App.css";
import EditProduct from "./Components/Pages/EditProduct";
// import ProductsCategory from "./Components/Pages/ProductsCategory";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid ">
        <div className="row">
          <div className="col-2 side-bar p-3 ">
            <Sidebar />
          </div>

          <div className="col-10 main-content p-3">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="products" element={<Outlet />}>
                <Route path="" element={<Products />}></Route>
                <Route path=":productId" element={<ProductDetails />} />
                <Route path="add" element={<AddProduct />} />
                <Route path="edit/:productId" element={<EditProduct />} />
                {/* <Route
                  path="category/:categoryName"
                  element={<ProductsCategory />}
                /> */}
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="products" element={<ProductsList />} />
      </Routes> */}
    </div>
  );
}

export default App;
// export default GetName;
