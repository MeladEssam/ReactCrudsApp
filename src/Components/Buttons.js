import { Link } from "react-router-dom";
import "./Buttons.css";
import Swal from "sweetalert2";
function Buttons(props) {
  let product = props.product;
  let updateState = props.updateState;

  // let products=props.products;

  return (
    <>
      <Link
        to={`/products/${product.id}`}
        className="btn me-3 view-btn text-white operation-btn fw-bold"
      >
        View
      </Link>
      <Link
        to={`/products/edit/${product.id}`}
        className="btn me-3 edit-btn text-white operation-btn fw-bold"
      >
        Edit
      </Link>
      <button
        onClick={() => {
          Swal.fire({
            title: "Do Sure To Delete This Product?",
            showCancelButton: true,
          }).then((data) => {
            if (data.isConfirmed === true) {
              // want delete product
              fetch(`http://localhost:9000/products/${product.id}`, {
                method: "DELETE",
              }).then((response) => {
                if (response.status === 200) {
                  updateState();
                }
              });
            }
          });
        }}
        className="btn delete-btn text-white operation-btn fw-bold"
      >
        Delete
      </button>
    </>
  );
}

export default Buttons;
