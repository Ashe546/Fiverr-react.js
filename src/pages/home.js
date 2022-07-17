import React, { useEffect, useState } from "react";

import HomeImg from "./../assets/img/hero/hero-img.png";
import ConsuntanyImg from "./../assets/img/feature/i1.png";
import EmbeddedImg from "./../assets/img/feature/i4.png";
import InternetImg from "./../assets/img/feature/i3.png";
import CompanyImg from "./../assets/img/feature/i2.png";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"

const Home = () => {
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
        style={{ overflow: "hidden" }}
      >
        <div className="container-xxl bg-light text-black ">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
          >
            <div class="container">
              <div class="row">
                <div class="col align-self-start">
                  <h1 className="info-header">Software Solutions</h1>

                  <p className="info-head">
                    We specialise in design and implementation of
                    software systems tailored to meet your specific needs
                    meeting high quality standards. We offer consultancy for
                    application development, design of hardware ,
                    product development and testing.
                  </p>
                </div>
                <div class="col align-self-left">
                  {/*                   <img
                    class="img-fluid"
                    className="hero-img"
                    src={HomeImg}
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="img-fluid" className="hero-img" src={HomeImg} alt="" />
      </section>
      <section className="important-points-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={ConsuntanyImg} alt="" />
              <h4>
                Software <br /> Consultancy
              </h4>
              <p>
                State of the art solutions to embedded technology domain and
                bespoke solutions in Internet of Things products. Our
                specialists provide solutions from design to product stage. We
                connect your devices to network to extract the maximum potential
                of your business.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={EmbeddedImg} alt="" />
              <h4>
                Embedded <br /> Systems
              </h4>
              <p>
                Embedded systems are very important building bricks of any
                system. And not many companies offer Embedded Solutions, our
                company , thanks to the experience we gained from Germany and
                United Kingdom from various projects , can offer best embedded
                solutions for your company. We have experience in Aerospace ,
                Automotive , Buildingautomation , Robotics and Broadcasting
                industry. Our quality products stem from DO178B , ISO26262,
                MISRA standards.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={InternetImg} alt="" />
              <h4>
                Internet of <br /> Things
              </h4>
              <p>
                Internet of Things is dominating todays world and also tomorrow
                will continue to dominate and tranform the way we live.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={CompanyImg} alt="" />
              <h4>
                Company <br /> Endeavour
              </h4>
              <p>
                Our company provides solutions crafted to the needs of the
                customers, be it hardware or software solutions.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={CompanyImg} alt="" />
              <h4>
                PLM <br /> Solutions
              </h4>
              <p>
                Management is crucial for the successful delivery of quality and
                on-time projects or products. Our experience in Waterfall, Agile
                models of development helps us adapt to each individual
                project/product according to customer needs.​
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={CompanyImg} alt="" />
              <h4>
                ALM <br /> Solutions
              </h4>
              <p>
                We specialise in Windchill RV&S formerly known as PTC Integrity
                solutions. Whether it be Installation , Upgradation , Solution
                design and deployment , Windchill migration , Rehosting ,
                Windchill bulk migrator. We can handle it all.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
