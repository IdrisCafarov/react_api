import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
function Details() {
  return (
    <>
      <Header />
      <section id="detail-image">
        <img src="/images/car.jpg" alt="" />
        <img src="/images/rectangle-black.png" alt="" />
      </section>
      <section id="detail-text">
        <div className="container">
          <div id="main-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div id="problem-solving">
              <div id="problem">
                <h6>Problem</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy.
                  {/* Lorem Ipsum is simply dummy text of <br/> the printing and
                  typesetting industry. Lorem <br/> Ipsum has been the industry's
                  standard dummy <br/>text ever. Lorem Ipsum is simply dummy text <br/> of
                  the printing and typesetting industry. Lorem <br/> Ipsum has been
                  the industry's standard dummy. */}
                </p>
              </div>
              <div id="solving">
                <h6>Həlli yolu</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="detail-solves-section">
        <div className="container">
          <div id="details-solves-head">
            <h4>Həll yolu</h4>
            <Link to='/upload'>
              <div className="plus">
                <img src="/images/circle-black.png" alt="" />
                <img src="/images/plus-black.png" alt="" />
              </div>
              <p>Həll yolunu ifadə edən şəkli əlavə et</p>
            </Link>
          </div>
          <div id="detail-solves">
            <div className="detail-solve"></div>
            <div className="detail-solve"></div>
            <div className="detail-solve"></div>
            <div className="detail-solve"></div>
            <div className="detail-solve"></div>
            <div className="detail-solve"></div>
            <Link to="/upload" className="detail-solve">
              <img src="/images/solver-plus.png" alt="" />
              <p>Həll yolunu ifadə edən şəkli əlavə et</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Details;
