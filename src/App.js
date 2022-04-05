import "./App.css";
import ContainerForm from "./Components/UI/ContainerForm";
import StepValidation from "./Components/StepValidation/StepValidation";
import Inscription from "./Components/Forms/Inscription";
import InfoCartBegin from "./Components/InfoCarts/InfoCartBegin";
import InfoCartEnd from "./Components/InfoCarts/InfoCartEnd";
import Checkbox from "./Components/Forms/Checkbox";
import FormRadio from "./Components/Forms/FormRadio";
import { useState } from "react";

function App() {
  const [formIndex, setFormIndex] = useState(0);

  const modifyIndex = (nextOrPrev) => {
    if (nextOrPrev === "-") {
      setFormIndex(formIndex - 1);
    }
    if (nextOrPrev === "+") {
      setFormIndex(formIndex + 1);
    }
  };
  return (
    <>
      <ContainerForm>
        <StepValidation />
        {formIndex === 0 && <InfoCartBegin modifyIndex={modifyIndex} />}
        {formIndex === 0 && <Inscription modifyIndex={modifyIndex} />}
        {formIndex === 0 && <Checkbox modifyIndex={modifyIndex} />}
        {formIndex === 0 && <FormRadio />}
        {formIndex === 0 && <InfoCartEnd />}
      </ContainerForm>
    </>
  );
}

export default App;
