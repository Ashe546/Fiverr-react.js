import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/kmtec_logo.jpeg";

function Navbar(props) {
  const [dropServices, setDropServices] = useState(false);

  // Body Scroll
  const BodyScrollHidden = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  };

  const BodyScrollVisible = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "visible";
    return () => (document.body.style.overflow = originalStyle);
  };

  // Method For Menu
  const handleMenu = (e) => {
    props.setMenu(!props.menu);
    if (!props.menu) {
      BodyScrollHidden();
    } else {
      BodyScrollVisible();
    }
  };

  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);

  return (
    <div className={navBar ? "D-navbar active" : "D-navbar"}>
      <Link to={`/`}>
        <div className="n_logo">
          <div className="logo_img">
            <img src={logo} alt="logo-img" />
          </div>
          <span>KmTec Ltd UK</span>
        </div>
      </Link>
      <ul>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <li className="dropdown-btn">
          <div>Services</div>

          <div className="dropdown-content">
            <div className="align">
              <div className="blocks">
                <Link to={`/Services/SoftwareSolutions`}>
                  <div>Software solutions</div>
                </Link>
                <Link to={`/Services/EmbeddedSolutions`}>
                  <div>Embedded Solutions</div>
                </Link>
                <Link to={`/Services/PLM_ALMConsultancy`}>
                  <div>PLM/ALM Consultancy</div>
                </Link>
                
              </div>
              <div className="blocks">
                <Link to={`/Services/IOT`}>
                  <div>Internet of Things Solutions</div>
                </Link>
                <Link to={`/Services/ComputerVision`}>
                  <div>Computer Vision</div>
                </Link>
                <Link to={`/Services/Product_ProjectManagement`}>
                  <div>Product/Project Management</div>
                </Link>
              </div>
            </div>
          </div>
        </li>
        <Link to="/AboutUs">
          <li>About us</li>
        </Link>
        <Link to="/ContactUs">
          <li>Contact us</li>
        </Link>
      </ul>

      {/* Mobile SideBar */}

      <div className={navBar ? "M-menu active" : "M-menu"} onClick={(e) => handleMenu(e)}>
        <div class={props.menu ? "icon menu-icon open" : "icon menu-icon"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={props.menu ? "M-sideBar active" : "M-sideBar"}>
        <ul>
          <div onClick={(e) => handleMenu(e)}>
            <Link to={`/`}>
              <li>
                <div>Home</div>
              </li>
            </Link>
          </div>
          <li onClick={(e) => setDropServices(!dropServices)}>
            <div
              className={
                dropServices ? "M-dropdown-btn active" : "M-dropdown-btn"
              }
            >
              Services
            </div>
            <div
              className={
                dropServices
                  ? "M-dropdown-content active"
                  : "M-dropdown-content"
              }
            >
              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/SoftwareSolutions`}>
                  <li>
                    <div>Software solutions</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/EmbeddedSolutions`}>
                  <li>
                    <div>Embedded Solutions</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/PLM_ALMConsultancy`}>
                  <li>
                    <div>PLM/ALM Consultancy</div>
                  </li>
                </Link>
              </div>

              

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/IOT`}>
                  <li>
                    <div>Internet of Things Solutions</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/ComputerVision`}>
                  <li>
                    <div>Computer Vision</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/Product_ProjectManagement`}>
                  <li>
                    <div>Product/Project Management</div>
                  </li>
                </Link>
              </div>

              
            </div>
          </li>

          <div onClick={(e) => handleMenu(e)}>
            <Link to={`/AboutUs`}>
              <li>
                <div>About us</div>
              </li>
            </Link>
          </div>

          <div onClick={(e) => handleMenu(e)}>
            <Link to={`/ContactUs`}>
              <li>
                <div>Contact us</div>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
