import "./App.css";
import MyCard from "./components/MyCard";

function App() {
  const personalInformation = [
    {
      title: "Christian Lazo",
      list: ["Colombia", "Pasto/Nariño"],
      color: "red",
    },
    {
      title: "Intereses",
      list: ["Tecnologia", "AstroFisica", "Ciencia", "UFC"],
      color: "gray",
    },
    {
      title: "Me Gustaria Aprender",
      list: ["Ingles", "NodeJs", "Django"],
      color: "green",
    },
    {
      title: "Expectativas",
      list: ["Aprender Algo Cada Día", "Poder seguir Estudiando"],
      color: "black",
    },
    { title: "Hobbies", list: ["Leer", "Anime", "Box"], color: "blue" },
  ];
  return (
    <div className="App">
      <div className="container">
        <h1>Información Personal</h1>

        <div className="card-content">
          {personalInformation.map((element) => (
            <MyCard
              title={element.title}
              list={element.list}
              color={element.color}
            ></MyCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
