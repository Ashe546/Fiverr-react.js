import React, { useEffect, useState } from "react";
import AboutImg from "../assets/img/about-img.png";
import StaffingImg from "../assets/img/stat/s5.png";
import SolutionsImg from "../assets/img/stat/s3.png";
import AnalyticsImg from "../assets/img/stat/s2.png";
import Footer from "../components/footer";
import "../App.css";

const AboutUs = () => {
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
      {/* <PageTop pageTitle="About" /> */}
      <section
        className={`hero-section relative`}
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
            //style={"height: 800px"}
          >
            <div className="col-lg-6 content-wrap">
              <h1 className="about-header">
                We are the one
                <br /> Who place idea on table
              </h1>
              <p className="about-head">
                We can provide staffing, software and hardware solutions
                tailored to your needs as we have worked in Europe for many
                years. We understand the customer challenges and strive to
                optimise our business model to suite the customers.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-0">
          <img
            //class="img-fluid"
            className="hero-img"
            src={AboutImg}
            alt=""
            style={{ height: "80vh", width: "auto" }}
          />
        </div>
      </section>
      <section className="important-points-section">
        <div className="container">
          <div className="row m-0 ex-porcess-wrap pt-3">
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src={StaffingImg} alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Staffing Solutions</h4>
                  <p className="mt-20 mb-0">
                    We can provide quality staff based on your requirements. We
                    specialise with staff from UK, Germany and also highly
                    skilled technical personnel from India.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src={SolutionsImg} alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Software & Hardware</h4>
                  <p className="mt-20 mb-0">
                    After working in software services industry for many years
                    spanning avionics , aviation , aerospace , automotive ,
                    building automation with many clients , we felt this was the
                    right time to startup our consultancy business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src={AnalyticsImg} alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Analytics method</h4>
                  <p className="mt-20 mb-0">
                    Notes are very powerful. They express your thanks,
                    encouragement, sympathy, apology, congratulations, feelings.
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

export default AboutUs;
