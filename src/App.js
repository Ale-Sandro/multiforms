import "./App.css";
import ContainerForm from "./Components/UI/ContainerForm";
import StepValidation from "./Components/StepValidation/StepValidation";
import Inscription from "./Components/Forms/Inscription";
import InfoCartBegin from "./Components/InfoCarts/InfoCartBegin";
import { useState } from "react";

function App() {
  const [formIndex, setFormIndex] = useState(0);

  return (
    <div className="App">
      <ContainerForm>
        <StepValidation />
        {formIndex === 0 && <InfoCartBegin modifyIndex={setFormIndex} />}
        {formIndex === 1 && <Inscription modifyIndex={setFormIndex} />}
      </ContainerForm>
    </div>
  );
}

export default App;
