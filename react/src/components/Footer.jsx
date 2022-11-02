import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span>© 2022, Bütün hüquqlar qorunur.</span>
        <div id="social-media-icons">
          <div className="social-media-icon">
            <img src="../images/instagram-logo.png" alt="instagram-logo" />
            <img src="../images/circle56x57.png" alt="" />
          </div>
          <div className="social-media-icon">
            <img src="../images/linkedin-logo.png" alt="linkedin-logo" />
            <img src="../images/circle56x57.png" alt="" />
          </div>
          <div className="social-media-icon">
            <img src="../images/facebook-logo.png" alt="facebook-logo" />
            <img src="../images/circle56x57.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
