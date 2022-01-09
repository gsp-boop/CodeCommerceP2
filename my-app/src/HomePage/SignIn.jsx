import React from "react";
import "../HomePage/Home.css";
import CreacteAcct from "../CreateAcct/CreateAcct";
import Gallery from "../Gallery/Gallery";
import CheckOut from "../CheckOut/CheckOut";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      gallery: false,
      userName: false,
      passwrd: false,
      renderNxtPage: false,
      createAcct: false,
      text: "",
      password: "",
      login1: { name: "peterpark2", pass: "Marvel12!" },
      login2: { name: "dococ23", pass: "Octopus12!" },
      msg: "",
      cartCount: "",
      cart: [],
    };
  }

  checkUser = (e) => {
    const { login1, login2 } = this.state;
    const type = e.target.type;
    const inpt = e.target.value;

    this.setState({ [type]: inpt });

    if (type === "text") {
      if (inpt.toLowerCase() === login1.name || inpt === login2.name) {
        this.setState({ userName: true });
      } else {
        return "";
      }
    }
    if (type === "password") {
      if (inpt === login1.pass || inpt === login2.pass) {
        this.setState({ passwrd: true, msg: "" });
      }
    } else {
      this.setState({ msg: "Username or password not recognized" });
    }
  };

  nextPage = () => {
    const { userName, passwrd } = this.state;

    userName && passwrd
      ? this.setState({ renderNxtPage: true })
      : this.setState({ renderNxtPage: false });
  };

  createAcct = () => {
    this.setState({ createAcct: true });
  };

  signOut = () => {
    this.setState({
      gallery: false,
      userName: false,
      passwrd: false,
      renderNxtPage: false,
      createAcct: false,
      navToCheckout: false,
      text: "",
      password: "",
      cartCount: "",
      cart: [],
    });
  };

  cartCountFunc = (amount) => {
    this.setState({ cartCount: amount });
  };

  addToCart = (item) => {
    this.setState((state) => ({
      cart: [...state.cart, item],
    }));
  };

  navToCart = () => {
    const { cartCount } = this.state;
    cartCount > 0
      ? this.setState({ navToCheckout: true, renderNxtPage: false })
      : this.setState({ navToCheckout: false });
  };

  backToGallery = () => {
    const { navToCheckout } = this.state;
    navToCheckout
      ? this.setState({ navToCheckout: false, renderNxtPage: true })
      : this.setState({ navToCheckOut: true });
  };

  render() {
    const {
      renderNxtPage,
      createAcct,
      cartCount,
      password,
      text,
      navToCheckout,
      cart,
    } = this.state;

    return (
      <div>
        <div className="header">
          <h2>CodeCommerce</h2>
          <ul className="nav">
            <li>
              <a onClick={this.backToGallery}>Home</a>
            </li>
            <li>
              <a onClick={this.navToCart}>Cart</a>
              <span>{cartCount}</span>
            </li>
            <li>
              {renderNxtPage ? (
                <a onClick={this.signOut} className="signOut">
                  Sign Out
                </a>
              ) : (
                <a className="signIn">Sign In</a>
              )}
            </li>
          </ul>
        </div>
        { !renderNxtPage & !navToCheckout ?
          <div className={renderNxtPage || createAcct ? "hide" : "signIn"}>
            <div className="inputContainer">
              <label>User Name</label>
              <input value={text} onChange={this.checkUser} type="text" />
            </div>
            <div className="inputContainer">
              <label>Password</label>
              <input
                value={password}
                onChange={this.checkUser}
                type="password"
              />
            </div>
            <button onClick={this.nextPage}>Sign-in</button>
            <button onClick={this.createAcct}>Create Account</button>
          </div>
          : <div></div>
        }

        {renderNxtPage && (
          <Gallery quantity={this.cartCountFunc} itemList={this.addToCart} />
        )}
        {createAcct && <CreacteAcct />}
        {navToCheckout && 
            <CheckOut cart={cart}/>
}
      </div>
    );
  }
}

export default SignIn;
