import { useState } from "react"

//multiple hooks
function Car(){
const [car,setCar]= useState({
  brand:'ford',
  model:'mustang',
  year:'1992',
  color:'red'
});
const updateColor = (newcolor)=>{
  setCar(previousState =>{
    return{...previousState,color:newcolor}
  });
}
const updateYear = (newyear) => {
  setCar(previousState => {
    return { ...previousState, year:newyear };
  });
}

  return(
    <>
    <h1> CAR IS {car.brand}</h1>
    <p>{car.model} from {car.year}yr Color is {car.color}</p>
    <button type="button"onClick={ ()=> updateColor("blue")}>Blue </button>
    <button type="button"onClick={ ()=> updateColor("green")}>green </button>
    <button type="button" onClick={()=> updateYear(2001)}>year2001</button>
    <button type="button" onClick={()=> updateYear(2202)}>year2201</button>
    </>

  )


}

export default Car
