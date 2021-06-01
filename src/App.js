import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://redi-final-restaurants.herokuapp.com/restaurants')
      const data = await response.json()
      setData(data)
    }
    loadData()
  }, [])
  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Team 1!</h1>
      </header>
    </div>
  );
}

export default App;
