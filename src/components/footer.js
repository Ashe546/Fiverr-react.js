import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import term from "./term";
// import Terms from "../pages/Terms";
// import Privacy from "../pages/Privacy";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>About</h4>
                  <ul className="menu-list">
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/products"}>Technologies</Link>
                    </li>
                    <li>
                      <Link to={"/careers"}>Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Features</h4>
                  <ul className="menu-list">
                    <li>
                      <Link to={"/"}>Jobs</Link>
                    </li>
                    {/*                     <li>
                      <Link to={"/"}>Brand Assets</Link>
                    </li> */}
                    {/*                     <li>
                      <Link to={"/"}>Investor Relations</Link>
                    </li> */}
                    <li>
                      <Link to={"/terms"}>Terms of Service</Link>
                    </li>
                    <li>
                      <Link to={"/privecy"}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Changed this to the app.js file */}
              {/* <Router>
                <Switch>
                  <Route exact path="/Terms" component={term} />
                  <Route exact path="/Privacy" component={Privacy} />
                </Switch>
              </Router> */}

              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Follow Us</h4>
                  <ul className="social-icons">
                    <li>
                      <a href="https://www.facebook.com/kmtecltd">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/KmtecU">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/playlist?list=PLPeiUliNsntRFWg3xJ5psdYCX5XjaVatz">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/kmtec-uk-ltd">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Contact</h4>
                  <ul className="menu-list">
                    <li>
                      <Link to={"/careers"}>Join Our Team</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Give us your feedback</Link>
                    </li>
                    <li>
                      <Link to={"/terms"}>Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text">
          Kmtec Ltd, registered in England and Wales. Registered
          Number:10417331. Registered office: Kemp House, 128 City Road, London,
          Engalnd, EC1V 2NX. VAT Regno:314952209
        </p>
        <hr />
      </footer>
    </div>
  );
};

export default Footer;
