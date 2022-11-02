import React from "react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { useState , useEffect } from "react";
function About() {
  const [instructors, setInstuctors] = useState([]);
  const [aboutHeaders, setAboutHeaders] = useState([]);
  const [aboutHeaders2, setAboutHeaders2] = useState([]);
  const [aboutMain, setAboutMain] = useState([]);
  useEffect(() => {
    // about_header +
    // about_header_2 +
    // about_main +
    // create_post +
    // post_list +
    // instructor_list +
    const getDataAboutMain = async () => {
      let data = await fetch("http://135.181.110.25/about_main/").then(
        (a) => a.json()
      );
      setAboutMain(data);
      console.log(data);
    };
    getDataAboutMain();
    const getDataAboutHeader2 = async () => {
      let data = await fetch("http://135.181.110.25/about_header_2/").then(
        (a) => a.json()
      );
      setAboutHeaders2(data);
    };
    getDataAboutHeader2();
    const getDataAboutHeader = async () => {
      let data = await fetch("http://135.181.110.25/about_header/").then((a) =>
        a.json()
      );
      setAboutHeaders(data);
    };
    getDataAboutHeader();
    const getInstructorData = async () => {
      let data = await fetch("http://135.181.110.25/instructor_list/").then(
        (a) => a.json()
      );
      setInstuctors(data);
    };
    getInstructorData();
  }, []);
  return (
    <>
      <Header />
      <section className="about-head-text">
        <div className="container">
          <span>Haqqimizda</span>
          <h2>{aboutMain[0].title_1}</h2>
        </div>
      </section>
      <section id="about-cards">
        <div className="container">
          {aboutHeaders.map((aboutHeader) => (
            <div className="about-card">
              <h6>{aboutHeader.header}</h6>
              <p>{aboutHeader.content}</p>
            </div>
          ))}
          {/* <div className="about-card">
            <h6>Lorem Ipsum</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
          <div className="about-card">
            <h6>Lorem Ipsum</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
          <div className="about-card">
            <h6>Lorem Ipsum</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div> */}
        </div>
      </section>
      <section className="about-head-text">
        <div className="container">
          <h2>{aboutMain[0].title_2}</h2>
        </div>
      </section>
      <section id="circle-cards">
        <div className="container">
          {aboutHeaders2.map((aboutHeader2) => (
            <div className="circle-card">
              <div className="circle-card-image">
                <img src="./images/circle69x70-black.png" alt="" />
              </div>
              <p>{aboutHeader2.content}</p>
            </div>
          ))}
          {/* <div className="circle-card">
            <div className="circle-card-image">
              <img src="./images/circle69x70-black.png" alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="circle-card">
            <div className="circle-card-image">
              <img src="./images/circle69x70-black.png" alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="circle-card">
            <div className="circle-card-image">
              <img src="./images/circle69x70-black.png" alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="circle-card">
            <div className="circle-card-image">
              <img src="./images/circle69x70-black.png" alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div> */}
        </div>
      </section>
      <section id="we-recognize">
        <div className="container">
          <div id="we-recognize-head"></div>
          <div id="workers">
            {instructors.map((instructor) => (
              <div className="worker">
                <div className="worker-image">
                  <img src={instructor.image} alt="" />
                </div>
                <div className="worker-text">
                  <span className="worker-name">
                    {instructor.name} {instructor.surname}
                  </span>
                  <span className="worker-position">{instructor.position}</span>
                </div>
              </div>
            ))}
            {/* <div className="worker">
              <div className="worker-image">
                <img src="../images/user-image.png" alt="" />
              </div>
              <div className="worker-text">
                <span className="worker-name">Xudayar Ağalarov</span>
                <span className="worker-position">
                  İdeya rəhbəri, Art direktor
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
