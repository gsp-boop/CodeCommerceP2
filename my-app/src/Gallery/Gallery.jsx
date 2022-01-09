import React from "react";
import { galleryCode } from "./GalleryItems";
import './galleryStyle.css'
import Item from "./Item";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
        cart: [],
        cartCount: 0,
    }
  }

  addToCart = (x) => {
    const { cartCount, cart } = this.state;
    this.setState((state) => ({
        cart: [...state.cart, x],
        cartCount: cartCount + 1
    }), this.props.itemList(x))

    this.props.quantity(cartCount + 1)

  }


  render() {
      const {removeBtn, cartCount} = this.state
    return (
      <div className="galleryContainer">
        {galleryCode.map((item) => (
            <Item 
            key={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            id={item.id}
            img={item.img}
            addToCart={this.addToCart}
            />
        ))}
      </div>
    );
  }
}
export default Gallery;
