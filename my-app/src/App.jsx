import './App.css';
import SelectOrType from "./components/Chapter11/SelectOrType.jsx";

function App() {

  const numbers = [1,2,5,7,10,12];

  return (
    <>
      <div className="card">
          <SelectOrType items={["BMW", "Jaguar", "Porsche"]} />
      </div>
    </>
  )
}

export default App
