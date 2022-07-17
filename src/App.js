import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Styles/WhatsappChat.css";
import "./Styles/WidgetIcons.css";

import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import Products from "./pages/products";
import Careers from "./pages/careers";
import Contacted from "./pages/contacted";
import Subscribed from "./pages/subscribed";
import Privacy from "./pages/Privacy";
import Terms from "./components/term";

import Home from "./pages/home";
import "./header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as CloseMenu } from "./assets/image/menu.svg";
import { ReactComponent as MenuIcon } from "./assets/image/menu.svg";
import logo from "./assets/image/kmtec_logo.jpeg";
import { Helmet } from "react-helmet";
// import Footer from "./components/footer";
// import TranslateToDe from "./pages/TranslateToDe";
// import TranslateToEn from "./pages/TranslateToEn";
//import Subscribe from "./pages/subscribe";
//import Footer from './footer';

import WhatsappChat from "./components/Common/WhatsappChat";
import TelephoneWidget from "./components/Common/TelephoneWidget";
import EmailWidget from "./components/Common/EmailWidget";

export default function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <Helmet>
        <title>Kmtec Ltd</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>

      </Helmet>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div id="logo">
            <Link to={"/"}>
              <img className="logo-1" src={logo} alt="" width="140px" />
            </Link>
            <label onClick={handleClick} className="logo-name pl-1">
              {/* <img className="logo-2" src={props.Logo2} alt="" /> */}
              <h2 className="head">KmTec Ltd UK</h2>
              <h5 className="h">Customer satisfaction is our business</h5>
              {/*               
                <h3>
                  Customer satisfaction is our business
                </h3> */}
            </label>
          </div>
          {/* // Nav start */}

          <div className="nav-wrap d-flex flex-row ">
            {/* <nav id={click ? "mobile-nav" : "nav-menu-container"}> */}
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/home"}>
                  <p className="text-dark">
                    <h6>Home</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/about"}>
                  <p class="text-dark">
                    <h6>About Us</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/services"}>
                  <p class="text-dark">
                    <h6>Services</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/products"}>
                  <p class="text-dark">
                    <h6>Products</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/careers"}>
                  <p class="text-dark">
                    <h6>Careers</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/contacted"}>
                  <p class="text-dark">
                    <h6>Contact</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/subscribed"}>
                  <p class="text-dark">
                    <h6>Subscribe</h6>
                  </p>
                </Link>
              </li>

              {/* <li className="option" onClick={closeMobileMenu}>
                <Link to={"/"}>
                  <p class="text-dark">
                    <h6>Deutsch</h6>
                  </p>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/"}>
                  <p class="text-dark">
                    <h6>English</h6>
                  </p>
                </Link>
              </li> */}
            </ul>

            <div className="mobile-menu" onClick={handleClick}>
              {click ? (
                <CloseMenu className="menu-icon" />
              ) : (
                <MenuIcon className="menu-icon" />
              )}
            </div>
            {/* </nav> */}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={Privacy} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contacted" component={Contacted} />
        <Route exact path="/subscribed" component={Subscribed} />

        
        <Route exact path="/terms" component={Terms}/>
        <Route exact path="/privecy" component={Privacy} />
        {/* <Route exact path="/contact" component={Contacted} />

        <Route exact path="/subscribe" component={Subscribed} /> */}

        {/* <Route exact path="/TranslateToDe" component={TranslateToDe} />
        <Route exact path="/TranslateToEn" component={TranslateToEn} /> */}
      </Switch>

      <WhatsappChat />
      <TelephoneWidget />
      <EmailWidget />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
