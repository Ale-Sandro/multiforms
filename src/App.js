import "./App.css";
import ContainerForm from "./Components/UI/ContainerForm";
import StepValidation from "./Components/StepValidation/StepValidation";

function App() {
  return (
    <div className="App">
      <ContainerForm>
        <StepValidation />
      </ContainerForm>
    </div>
  );
}

export default App;
