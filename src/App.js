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
  const [allDatas, setAllDatas] = useState();

  const modifyIndex = (nextOrPrev, datas = undefined) => {
    if (datas != undefined) {
      Object.keys(datas).forEach((v) => {
        return datas[v] === "" ? (datas[v] = "Aucune donnée entrée") : datas[v];
      });
    }

    const newDatas = { ...allDatas, ...datas };
    setAllDatas(newDatas);

    if (nextOrPrev === "-") {
      setFormIndex(formIndex - 1);
    }
    if (nextOrPrev === "+") {
      setFormIndex(formIndex + 1);
    }
  };
  const forms = [
    <InfoCartBegin modifyIndex={modifyIndex} key={0} />,
    <Inscription modifyIndex={modifyIndex} key={1} />,
    <Checkbox modifyIndex={modifyIndex} key={2} />,
    <FormRadio modifyIndex={modifyIndex} key={3} />,
    <InfoCartEnd modifyIndex={modifyIndex} datasUser={allDatas} key={4} />,
  ];

  return (
    <>
      <ContainerForm>
        <StepValidation lengthOfForms={forms.length} formIndex={formIndex} />

        {forms.filter((_, i) => {
          return forms[formIndex] === forms[i];
        })}
      </ContainerForm>
    </>
  );
}

export default App;
