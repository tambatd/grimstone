import "./footer.css";
import Clock from "../clock/clock";
import instaLogo from "../assets/insta.png"
import youtubeLogo from "../assets/YouTube.png"
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="title start">
          <a href="https://www.instagram.com/grimstone.gaming/">Grimstone Gaming</a>
        </p>
      </div>
      <div>
        <a href="https://www.instagram.com/grimstone.gaming/">
          <img
            className="title"
            alt="Glitch Link"
            src={instaLogo}
          />
        </a>
        <a href="https://www.youtube.com/@GrimstoneGamingGroup">
          <img
            className="title"
            alt="Github Link"
            src={youtubeLogo}
          />
        </a>
      </div>
      <Clock />
    </div>
  );
};

export default Footer;
