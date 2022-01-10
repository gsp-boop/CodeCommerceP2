import React from "react";

class CheckOut extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { cart } = this.props;
    return (
      <div>
        <div className="cartHeader">
          <h3>Product Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Sub Total</h3>
        </div>
        <div className="itemList">
        <div className="nameContainer">
            {cart.map((item) => (
            <p className="productName">{item.name}</p>
            ))}   
        </div>
        </div>

      </div>
    );
  }
}
export default CheckOut;
