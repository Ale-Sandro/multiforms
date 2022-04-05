import "./App.css";
import ContainerForm from "./Components/UI/ContainerForm";
import StepValidation from "./Components/StepValidation/StepValidation";
import Inscription from "./Components/Forms/Inscription";

function App() {
  return (
    <div className="App">
      <ContainerForm>
        <StepValidation />
        <Inscription />
      </ContainerForm>
    </div>
  );
}

export default App;
