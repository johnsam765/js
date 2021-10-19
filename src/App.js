import "./App.css";
import Navbar from "./components/FirstPage/Navbar";
import MainIntro from "./components/FirstPage/MainIntro";

function App() {
  return (
    <div className="whole">
      <Navbar />
      <MainIntro />
      <Navbar />
      <MainIntro />
    </div>
  );
}

export default App;
