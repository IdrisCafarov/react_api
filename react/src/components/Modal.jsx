import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
function Modal() {
  AOS.init();
  const [products, setProducts] = useState();
  const [all, setAll] = useState([]);
  console.log(all);
  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    setProducts(e.target.files[0]);
    // let reader = new FileReader();
    // reader.addEventListener("load", () => {
    //   setProducts({ ...products, [e.target.name]: reader.result });
    // });
    // reader.readAsDataURL(e.target.files[0]);
  };

  const submitButton = (e) => {
    let data = new FormData();
    data.append("image", products);
    console.log(products);
    console.log(data);
    e.preventDefault();
    fetch("http://135.181.110.25/create_post/", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   "Accept": "application/json",
      //   "type": "formData",
      // },
      body: data,
    })
      .then((response) => response.json())
      .then((success) => console.log(success, "success"))
      .catch((error) => console.log(error, "error"));
  };
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://135.181.110.25/create_post/").then((a) =>
        a.json()
      );
      console.log(data);
      setAll(data);
    };
    getData();
  }, []);
  return (
    <>
      <section id="upload-file-section">
        <div id="upload-head" data-aos="fade-down" data-aos-duration="2000">
          <h4 id="upload-file-section-head">Müvafiq sənədləri seçin</h4>
          <div id="upload-file-process">
            <div id="upload-icon">
              <img src="/images/upload-icon.png" alt="" />
            </div>
            <div id="upload-text">
              <p>Faylı seçin və ya sürüşdürüb gətirin.</p>
              <span>15MB-dan artıq olmayan JPG, PNG və ya PDF </span>
            </div>
            <div id="upload-div">
              <input
                name="image"
                id="upload"
                onChange={handleUpload}
                type="file"
              />
              <label htmlFor="upload">FAYLI SEÇİN</label>
            </div>
          </div>

          <div id="upload-files-div">
            <h5>Əlavə olunmuş fayllar</h5>
            <div id="upload-files">
              <div className="upload-file">
                <div className="upload-file-detail">
                  <div className="upload-file-icon">
                    <i className="fa-solid fa-file-image"></i>
                    {/* <img src="/images/upload-file-icon.png" alt="" /> */}
                  </div>
                  <span>Şəkil.01</span>
                  <span>Önbaxış</span>
                </div>
                <div className="upload-file-size">5.7MB</div>
              </div>
            </div>
          </div>
        </div>
        <div id="upload-bottom">
          <div className="container">
            <button className="btn2">Imtina Et</button>
            <button onClick={submitButton} className="btn2 hover">
              Yüklə
            </button>
          </div>
        </div>
      </section>
      {/* <section>
        {all.map((a) => (
          <div>
            <img src={a.image} alt="" />
          </div>
        ))}
      </section> */}
    </>
  );
}

export default Modal;
