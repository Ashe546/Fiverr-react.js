import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="pt-5 pb-5 footer-section primaryBgColor"
    >
      <div className="section-padding container">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
              <h4 className="f-bold whiteColor mb-4">KmTec Ltd UK</h4>
              <p className="f-size-09 whiteColor">
                We feel happy and glad by seeing and knowing about the responses
                and feedbacks about our widely accepted partition works &
                services by all our clients. We work with the ultimate aim to
                satisfy and meet all clients’ requirements when they come to us
                for these kinds of services.
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-md-3 ml-auto">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce="true"
              style={{ animationDelay: "0.5s" }}
            >
              <h5 className="f-bold whiteColor mb-4">Visit links</h5>
              <ul className="footer-list">
                <Link style={{textDecoration:"none"}} to={'/'}><li>Home</li></Link>
                <Link style={{textDecoration:"none"}} to={'/Services/SoftwareSolutions'}><li>Services</li></Link>
                <Link style={{textDecoration:"none"}} to={'/AboutUs'}><li>About us</li></Link>
                <Link style={{textDecoration:"none"}} to={'/ContactUs'}><li>Contact us</li></Link>
              </ul>
            </ScrollAnimation>
          </div>

          <div className="col-md-3">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce="true"
              style={{ animationDelay: "0.7s" }}
            >
              <h5 className="f-bold whiteColor mb-4">Social handles</h5>
              <a href="https://www.facebook.com/kmtecltd">
              <button className="circle-button whiteBgColor mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 30 30"
                  style={{ fill: "#000000" }}
                >
                  <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
                </svg>
              </button>
              </a>
              <a href="https://twitter.com/KmtecU">
              <button className="circle-button whiteBgColor mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="19"
                  height="19"
                  viewBox="0 0 50 50"
                  style={{ fill: "#000000" }}
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </button>
              </a>
              <a href="https://www.youtube.com/playlist?list=PLPeiUliNsntRFWg3xJ5psdYCX5XjaVatz">
              <button className="circle-button whiteBgColor mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width:"22px"}}>
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </button>
              </a>
              <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFX0yXg6biEXwAAAYHI8AyAitIz0xiJwt_kipFxKaapHcemjj2kPAbQHohq8fid4vNYuxPk1MxbrUD52zoJkSVi8y4YqeDgktH-It7Gp3r8WaiAE5qaYCosK54HLSFvdXyLyvE=&original_referer=https://kmtec.co.uk/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkmtec-uk-ltd">
              <button className="circle-button whiteBgColor mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"19px"}}>
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </button>
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
