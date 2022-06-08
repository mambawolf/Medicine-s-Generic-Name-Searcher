import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[drug,setDrug]=useState([])
  const[drugName,setdrugName]=useState([])
  
  function getDrugdata(val){
    var a = val.target.value;
    setdrugName(a);
  }
  
  useEffect(()=>{
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bca5bdd222msh9cf0061c3615c3bp1fe9e5jsnff5e773a0efc',
        'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
      }
    };

    fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/genericname?drug=${drugName}`, options)
      .then(response => response.json())
      .then(json =>
      // console.log("json output",json)
      setDrug(json)
      )
      .catch(err => console.error("No drug found",err));
  })
  
  return (
    <div className="App">
      <div className='App-child'>
        <h1><u>Drug's Generic Name</u></h1>
        <p>Search Drug 🔎</p>
        <input type="text" onChange={getDrugdata} placeholder="Enter Drug's name"/>
        <p>The generic name of {drugName} is</p>
        <h2>{drug.generic_name}</h2>
      </div>
    </div>
  );
}

export default App;
