import "./App.css";
import ExeArray from "./components/map";
import Exe from "./components/exe/exe";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="App">
      <div className="Executables">
        {ExeArray.map((executable) => (
          <Exe
            id={executable.name}
            key={executable.name}
            name={executable.name}
            image={executable.image}
            link={executable.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
// What a piece of work is man! How noble in reason!
// how infinite in faculties! in form and moving,
// how express and admirable! in action how like an angel!
// in apprehension, how like a god!
// the beauty of the world! the paragon of animals!
