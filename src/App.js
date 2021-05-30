import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://redi-final-restaurants.herokuapp.com/restaurants')
      .then(resp => resp.json())
      .then(respData => setData(respData))
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
