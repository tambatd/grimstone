import "./App.css";
import ExeArray from "./components/map";
import Exe from "./components/exe/exe";
import Footer from "./components/footer/footer";
import Application from "./components/application/application";
import { useState } from "react";
import banner from "./components/assets/banners/MEG-YT-Website-Banner.png";
const App = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className="App">
        <div className="Executables">
          {ExeArray.map((executable) => (
            <Exe
              id={executable.name}
              key={executable.name}
              name={executable.name}
              image={executable.image}
              link={executable.link}
              isOpen={executable.isOpen}
              Content={executable.Content}
            />
          ))}
        </div>

        <Footer />
      </div>
      <Application
        setActive={setActive}
        status={active}
        title="Hello_Traveller"
        id="banner"
        style={{
          top: "20px",
          left: "15vw",
        }}
        children={
          <>
            <a href="https://www.youtube.com/@GrimstoneGamingGroup">
              <img style={{ maxWidth: "300px" }} src={banner} alt="banner" />
            </a>
          </>
        }
      ></Application>
    </>
  );
};

export default App;
// What a piece of work is man! How noble in reason!
// how infinite in faculties! in form and moving,
// how express and admirable! in action how like an angel!
// in apprehension, how like a god!
// the beauty of the world! the paragon of animals!
