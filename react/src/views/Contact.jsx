import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
function Contact() {
  const [message, setMessage] = useState([
    {
      name: "",
      email: "",
      text: "",
    },
  ]);
  const submit = (e) => {
    e.preventDefault();
    console.log("submit");
    fetch("http://127.0.0.1:8000/create_contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };
  const handleInput = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <section className="about-head-text contact">
        <div className="container">
          <span>Əlaqə</span>
          <h2>
            Təklif və ya iradınız var
            <img src="./images/sual-black.png" alt="" />
            Elə isə bizə yazın
            <img src="./images/noqte-black.png" alt="" />
          </h2>
          <form action="">
            <div className="form-group">
              <span>Ad</span>
              <input
                name="name"
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Adınızı daxil edin"
              />
            </div>
            <div className="form-group">
              <span>Soyad</span>
              <input type="text" placeholder="Soyadınızı daxil edin." />
            </div>
            <div className="form-group">
              <span>Email</span>
              <input
                onChange={(e) => handleInput(e)}
                name="email"
                type="text"
                placeholder="E-poçtunuzu daxil edin."
              />
            </div>
            <div className="form-group">
              <span>Number</span>
              <input type="text" placeholder="Nömrənizi daxil edin" />
            </div>
            <div className="form-group full">
              <span>Mesajızınızı yazın</span>
              <textarea
                name="text"
                onChange={(e) => handleInput(e)}
                placeholder="Maksimum 200 simvol"
              ></textarea>
            </div>
            <button className="btn" type="submit" onClick={(e) => submit(e)}>
              Göndər
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
