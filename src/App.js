import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { useEffect } from "react";


function App() {
  let [catFact, setCatFact] = useState("");
  let [name, setName] =  useState("");
  let [predictedAge, setPredictedAge] = useState({});
  let [excuse, setExcuse] = useState("");



  const GetCatData = () => {
    // Rest Call
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    })
  }

  const GetPersonsAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    })
  }

  const GetExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then((res) =>
    setExcuse(res.data[0].excuse)
    )
  }

  useEffect(() => {GetCatData()},[])

  return (
    <div className="App">
      <button onClick={GetCatData} > Generate Cat Fact</button>
      <p>{catFact}</p>

      <div>
        <input 
        placeholder="Ex.. Alex.." 
        onChange={(event) => {
          setName(name = event.target.value);
        }}/>
        
        <button onClick={GetPersonsAge}>Predict Age</button>
        
        <h1>Name : {predictedAge?.name}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Count : {predictedAge?.count}</h1>

      </div>

      <div>
        <h1>Generate an Excuse</h1>
        <button onClick={() => GetExcuse("party")}> Party </button>
        <button onClick={() => GetExcuse("family")}> Family </button>
        <button onClick={() => GetExcuse("office")}> Office </button>

        <p>{excuse}</p>
      </div>
    </div>
  );
}

export default App;
