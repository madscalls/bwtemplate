import "./Header.css";
import logo from "../../assets/OVLOGObrand.png";

function Header() {
  return (
    <div>
      <span className="Header__span">
        <img src={logo} alt="Header logo" className="Header__logo" />
      </span>
    </div>
  );
}

export default Header;
