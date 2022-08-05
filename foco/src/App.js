import "./App.css";
import MyLight from "./components/MyLight";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <h1>Lightbulb</h1>
        <div className="content">
          <MyLight value={light} setValue={setLight} />
          <MyLight value={light} setValue={setLight} />
          <MyLight value={light} setValue={setLight} />
        </div>
      </div>
    </div>
  );
}

export default App;
