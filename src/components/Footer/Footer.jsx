import "./Footer.css";

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
          {/* Replace with your images later */}
          <a href="#">
            <span>IG</span>
          </a>
          <a href="#">
            <span>FB</span>
          </a>
          <a href="#">
            <span>TW</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
