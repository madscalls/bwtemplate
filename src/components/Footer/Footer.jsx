import "./Footer.css";
import Insta from "../../assets/Instagram_Glyph_Gradient.svg";
import Facebook from "../../assets/Facebook_logo_Primary.png";
import Youtube from "../../assets/yt_logo_white_digital.png";

function Footer() {
  return (
    <footer className="footer">
      {/* LEFT: HOURS */}
      <div className="footer__left">
        <h4>HOURS</h4>
        <p>Mon - Fri: 9AM - 6PM</p>
        <p>Sat: 10AM - 4PM</p>
        <p>Sun: Closed</p>
      </div>

      {/* RIGHT: SOCIALS */}
      <div className="footer__right">
        <h4>FOLLOW</h4>

        <div className="footer__socials">
          <a href="#">
            <span>
              <img src={Insta} alt="Instagram logo" className="footer__insta" />
            </span>
          </a>
          <a href="#">
            <span>
              <img
                src={Facebook}
                alt="Facebook logo"
                className="footer__facebook"
              />
            </span>
          </a>
          <a href="#">
            <span>
              <img
                src={Youtube}
                alt="Youtube logo"
                className="footer__youtube"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
