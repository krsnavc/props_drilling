import logo from './logo.svg';
import './App.css';
import { InputComp } from './components/inputsComp';
import { ClassComponent } from './classComp/classComp';

function App() {
  return (
    <div className="App">
      <h1>Rendering data from Function Component</h1>
      <InputComp />
      <h1>Rendering data from Class Component</h1>
      <ClassComponent />
    </div>
  );
}

export default App;
