import pixelSkullLogo from "../../../components/assets/pixelskull.png";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        maxWidth: "350px",
        minWidth: "350px",
      }}
    >
      <img
        src={pixelSkullLogo}
        style={{ height: "250px" }}
        alt="Pixel Skull Logo"
      />
      <div>
        <hr />
        <p style={{ textAlign: "center" }}>
          your ultimate destination for all things Dungeons & Dragons! Dive into
          epic adventures with our engaging campaigns, expert tips, and creative
          content that will bring your tabletop sessions to life. Whether you're
          a seasoned dungeon master or a curious beginner, Grimstone Gaming
          offers a treasure trove of resources, live streams, and community
          events to enhance your D&D experience. Join us as we explore
          fantastical realms, uncover hidden secrets, and forge unforgettable
          stories together. Adventure awaits – let the journey begin!
        </p>
        <hr />
      </div>
    </div>
  );
};

export default About;
