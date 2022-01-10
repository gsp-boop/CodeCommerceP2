import React from "react";
import "./galleryStyle.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeBtn: false,
    };
  }

  removeBtn = () => {
    this.setState({ removeBtn: true });
  };

  render() {
    const { removeBtn } = this.state;
    const { name, price, desc, id, img } = this.props;
    return (
      <div>
        <div key={id} className="galleryItem">
          <div className="imgContainer">
            <img src={process.env.PUBLIC_URL + img} alt="" />
          </div>
          <h3>{name}</h3>
          <p>{price}</p>
          <div onClick={this.removeBtn} className="btnContainer">
            <button
            //   className={removeBtn ? "hide" : ""}
              onClick={() => {
                this.props.addToCart({
                  name: name,
                  price: price,
                  desc: desc,
                  id: id,
                  img: img,
                }, 
                
                );
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Item;
