import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const[characterallow,setcharacterallow]=useState(false)
  const[password,setpassword]=useState("")

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str += "0123456789"
    if(characterallow) str+="`!@#$%^&*()_><?:"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  },[length,numberallowed,characterallow,setpassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberallowed,characterallow,passwordGenerator])
 
  return (
   <>
   
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3' 
      placeholder='password' 
      readOnly/>
      <button className='outline-none bg-blue-700 text-white px-3 py=0.5 shrink-0 '>Copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor=pointer'
        onChange={(e)=>{setlength(e.target.value)}} />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={()=>{
            setnumberallowed((prev)=>!prev);
          }} />
          <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={characterallow}
          id="characterInput"
          onChange={()=>{
            setcharacterallow((prev)=>!prev);
          }} />
          <label>Characters</label>
      </div>
    </div>
   </div> 
  

   </>
  )
}

export default App
