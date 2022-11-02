import React from "react";
// import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import {Link} from 'react-router-dom';
function Galery() {
  // const [column, setColumn] = useState(4);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     console.log("deyisdi");
  //     console.log(window.outerWidth);
  //     if (window.outerWidth >= 1280) {
  //       setColumn(4);
  //     } else if (window.outerWidth < 1280 && window.outerWidth >= 955) {
  //       setColumn(3);
  //     } else if (window.outerWidth < 955 && window.outerWidth >= 630) {
  //       setColumn(2);
  //     } else {
  //       setColumn(1);
  //     }
  //   });
  // }, []);
  return (
    <>
      <Header />
      <section id="galery-section">
        <div className="container">
          <div id="galery-section-head">
            <h6>Qalereya</h6>
            {/* <Link to="/galery">Hamısına bax <img src="./images/oval.png" alt="" /></Link> */}
          </div>
          <div
            id="galery-items"
            // style={{height:"1930px"}}
          >
            {/* {
              column.map()
            } */}
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="/images/galery-item2.png" alt="" />
            </div>
          </div>
          <button className="btn">Daha çox göstər</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Galery;
