import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import "../App.css";
const Privacy = () => {
  //   const [fullscreen, setFullscreen] = useState({
  //     height: "auto",
  //   });
  //   useEffect(() => {
  //     setFullscreen({
  //       ...fullscreen,
  //       height: window.innerHeight,
  //     });
  //   }, []);

  return (
    <div>
      <section>This is the privacy page</section>
      <Footer />
    </div>
  );
};

export default Privacy;
