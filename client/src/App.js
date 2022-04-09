import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  const [code, setCode] = useState("");
  const [op, setop] = useState("");
  const [subbres, setsr] = useState("");
  const invokeSubmit = async () => {

    const reqObj = {
      language: "cpp",
      prbName: subbres,
      code
    };
    const output = await axios.post("http://localhost:4000/run", reqObj);
    setop(output.data.userOutput);
    console.log(output.data.userOutput);
  }
  return (
    <div className="App">
      <h1><label>Code Your Way Here!!</label></h1>
      <textarea placeholder="Problem Code" id="pr-co" onChange={(e)=>{setsr(e.target.value);}}></textarea>
      <br /><br />
      <textarea placeholder="Enter Your Code Here" value={code} onChange={(e)=>{setCode(e.target.value);}}
      id="txtarea"></textarea><br /><br />
      <button onClick={invokeSubmit} type="submit" id="btn-sub">Submit</button><br />
      {/* <h1>Output - </h1> */}
      {/* <textarea placeholder="Output" id="outarea" value={op} disabled></textarea> */}
      <h1><p id="subbres" value={op}></p></h1>
    </div>
  );
}

export default App;
