import React, { useEffect, useState } from "react";
import Footer from "../components/footer";

import IconImg from "./../assets/img/hero/hero-img2.png";
import ConsuntancyImg from "./../assets/img/blog/img1.jpg";
import EmbeddedImg from "./../assets/img/blog/qms.jpg";
import InternetImg from "./../assets/img/blog/flutterApp.PNG";
import ProductImg from "./../assets/img/blog/py.png"
import "../App.css"



const Products = () => {
  const [fullscreen, setFullscreen] = useState({
    height: "auto",
  });
  useEffect(() => {
    setFullscreen({
      ...fullscreen,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div>
      <section
        className={`hero-section relative`}
        style={({ overflow: "hidden" }, { height: "90vh" })}
      >
        <div className="container">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
          >
            <div className="col-lg-6 content-wrap">
              <h1 className="product-header">Our Productions</h1>
              <p className="product-head">
                Our specialists provide solutions from design to product stage.
                We connect your devies to network to extract the maximum
                potential of your business.
              </p>
            </div>
          </div>
        </div>
        <img
          className="hero-img"
          src={IconImg}
          alt=""
          style={{height:"70vh", width: "auto" }}
        />
      </section>
      <section className="blog-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-3">
              <div className="single-card card">
                <img
                  className="card-top-img"
                  src={ConsuntancyImg}
                  width="530px"
                  height="300px"
                />
                <div className="card-body">
                  <span
                    className="genric-btn card-btn"
                    style={{ bottom: "40%" }}
                  >
                    Level Detector
                  </span>
                  <span>
                    <h4 className="card-title mb-15">
                      Water Tank Level Detector
                    </h4>
                  </span>
                  <p>
                    Smart Container – An IoT based solution for tracking any
                    commodity usage and consumption. Developed with STM8
                    Microcontroller , STM laser sensor to detect the level of
                    commodity and Zigbee for short range wireless communication.
                    Raspberry Pi as gateway to connect to Azure IoT Hub backend
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-3">
              <div className="single-card card">
                <img
                  className="card-top-img"
                  src={EmbeddedImg}
                  width="530px"
                  height="300px"
                />
                <div className="card-body">
                  <span
                    className="genric-btn card-btn"
                    style={{ bottom: "42%" }}
                  >
                    Management System
                  </span>
                  <span>
                    <h4 className="card-title mb-15">
                      Queue Management Systems
                    </h4>
                  </span>
                  <p>
                    Queue Management System that manages the customer’s waiting
                    experience throughout their entire journey, from pre-service
                    to post-service. Our solution contain both software and
                    hardware that help businesses to facilitate the customer's
                    access to service, to plan and manage customer flow and
                    staff, and to gather data to improve the customer
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-3">
              <div className="single-card card">
                <img className="card-top-img" src={InternetImg} />
                <div className="card-body">
                  <span
                    className="genric-btn card-btn"
                    style={{ bottom: "34%" }}
                  >
                    Flutter Application
                  </span>
                  <h4 className="card-title mb-15">Data Logger Applications</h4>
                  <p>
                    Mobile App development & Services, Our Company offers Native
                    Android App and Native IOS App development with highly
                    customized also compatiable in all mobile devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-3">
              <div className="single-card card">
                <img className="card-top-img" src={ProductImg} />
                <div className="card-body">
                  <span
                    className="genric-btn card-btn"
                    style={{ bottom: "35%" }}
                  >
                    Detection System
                  </span>
                  <h4 className="card-title mb-15">
                    Image/Object Detection Application
                  </h4>
                  <p>
                    Our product helps businesses make a better use of image data
                    mainly focusing on computer vision, image recogintion, and
                    visual search. Analyzing and responding to the objects
                    quickly and accurately.
                    {/* Automated touch screen-based Tank Leak Detection system for
                    petrol tank fuel level monitoring in dispenser station.
                    Widely installed in petrol stations. Using C/C++ , Embedded
                    Linux OS , QT for HMI and CORBA IPC communication */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Products;
