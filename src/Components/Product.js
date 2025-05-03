import Buttons from "./Buttons";
function Product(props) {
  let product = props.product;

  let updateState = props.updateState;
  return (
    <>
      <tr>
        <td className="align-middle">{product.id}</td>
        <td className="align-middle">{product.title}</td>
        <td className="align-middle">${product.price}</td>
        <td className="align-middle">
          <Buttons product={product} updateState={updateState} />
        </td>
      </tr>
    </>
  );
}

export default Product;
