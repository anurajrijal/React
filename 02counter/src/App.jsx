import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  const addValue=()=>{
    //counter = counter + 1;
   if(counter<=20){
    setCounter(counter + 1)
   } 
  }
  const removeValue= ()=>{
    if(counter>0){
      setCounter(counter -1)
    }
  }

  return (
    <>
      <h1> hellow world</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
