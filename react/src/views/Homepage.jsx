import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
// import Modal from "../components/Modal";
function Homepage() {
  const [galeries,setGaleries]=useState([])
  useEffect(() => {
    const getGalery = async () => {
      let data = await fetch("http://135.181.110.25/post_list/").then((a)=>a.json());
      setGaleries(data)
      console.log(data);
    };
    getGalery();
  }, []);
  return (
    <>
      <Header />
      {/* <Modal/> */}
      <section id="home-head-text">
        <div className="container">
          <h2>
            Ən yaxşı performans göstərən markalar sadə bir şey üzərində dayanır{" "}
            <img src="./images/nida-black.png" alt="" />
          </h2>
          <Link to="/home">
            Davam et
            <img src="./images/arrow-swirly-black.png" alt="" />
          </Link>
        </div>
      </section>
      <section id="galery-section">
        <div className="container">
          <div id="galery-section-head">
            <h6>Qalereya</h6>
            <Link to="/galery">
              Hamısına bax <img src="./images/oval-black.png" alt="" />
            </Link>
          </div>
          <div id="galery-items">
            <div className="galery-item">
              <img src={galeries[0]?.image} alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
            <div className="galery-item">
              <img src="./images/galery-item2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
