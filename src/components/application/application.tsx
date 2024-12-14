import "./application.css";
import Draggable from "react-draggable";
import { useEffect } from "react";
import pixelSkullLogo from "../assets/pixelskull.png";
interface ApplicationProps {
  status: boolean;
  setActive: (status: boolean) => void;
  id?: string;
}

const Application = ({ status, setActive, id }: ApplicationProps) => {
  useEffect(() => {
    setActive(status);
  }, [status, setActive]);

  return (
    <div className="application" id={id}>
      {status && (
        <Draggable handle=".banner">
          <div className="window">
            <button className="CloseButton" onClick={() => setActive(false)}>
              <b>X</b>
            </button>
            <div className="banner">
              <div>
                <p className="title">⚔️ Welcome To Grimstone Gaming ⚔️</p>
              </div>
            </div>

            <div className="app">
              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img src={pixelSkullLogo} style={{ height: "250px" }} />
                <div>
                  <hr />
                  <p style={{ textAlign: "center" }}>
                    your ultimate destination for all things Dungeons & Dragons!
                    Dive into epic adventures with our engaging campaigns,
                    expert tips, and creative content that will bring your
                    tabletop sessions to life. Whether you’re a seasoned dungeon
                    master or a curious beginner, Grimstone Gaming offers a
                    treasure trove of resources, live streams, and community
                    events to enhance your D&D experience. Join us as we explore
                    fantastical realms, uncover hidden secrets, and forge
                    unforgettable stories together. Adventure awaits – let the
                    journey begin!
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Application;
