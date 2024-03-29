import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
// import AntojasaiComponent from "./components/antojasai";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-15">
      <Header numeros={1} />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
        {/* <AntojasaiComponent /> */}
      </div>
    </div>
  );
}

export default App;
