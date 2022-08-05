import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [grades, setGrades] = useState(0);
  const [radians, setRadians] = useState(0);
  const [message, setMessage] = useState("");

  const msg1 = "Conviertiendo de Grados a Radianes";
  const msg2 = "Conviertiendo de Radianes a Grados";

  const converttoRadians = () => {
    setRadians((grades * Math.PI) / 180);
  };

  const converttoGrades = () => {
    setGrades((radians * 180) / Math.PI);
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card p-4 bg-info text-white">
          <h1 className="text-center">Calc</h1>
          <div className="card-body">
            <h2 className="text-center mb-3">Grados</h2>
            <Input
              value={grades}
              setValue={setGrades}
              setAction={converttoRadians}
              setMsg={setMessage}
              msg={msg1}
            />
            <h2 className="text-center mb-3 mt-3">Radianes</h2>
            <Input
              value={radians}
              setValue={setRadians}
              setAction={converttoGrades}
              setMsg={setMessage}
              msg={msg2}
            />
          </div>

          {message !== "" ? (
            <div className="alert alert-dark">{message}</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
