import React from "react";
import { useState ,useEffect  } from 'react';

// function Help(props){
// return <p>Can you please help me { props.name } </p>

// }

// function Garge(){
//   return <Help name="Test" />
// }
// function New(){
//   return <p>new </p>
// }

// function Goal(){
//  const items = [
//   {id: 1, name: 'bread'},
//   {id: 2, name: 'milk'},
//   {id: 3, name: 'eggs'}
// ];

// return (

//   <>
//   <h1>Grocery List</h1>
//   <ul>
//     { items.map((item) => <li key={item.id}>{item.name}</li>) }
//   </ul>
//   </>
// );

// }
function MyForm() {

   const items = [
  {id: 1, name: 'bread'},
  {id: 2, name: 'milk'},
  {id: 3, name: 'eggs'}
   ];
  const [name, setName] = useState("");
  const [myCar, setMyCar] = useState("-1");
  const [email,setEmail] = useState("");
  const [color, setColor] = useState("Red");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 100);
   
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  const handleChange= (event)=>{
    setMyCar(event.target.value);
  }

  return ( <> <form onSubmit={handleSubmit}>
    <label>Enter your name:
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase())}
      />
    </label>
    <label>Enter your email:
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
      />
    </label>
    <label> Select Car:
    <select value={myCar} onChange={handleChange}>
         <option value="-1">Please Select Value</option>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      </label>
    <button type="button" onClick={()=>setColor("Blue")}>MY Fav COLOR IS {color} </button>
    <h1>My {car.brand} {count}</h1>
    <input type="submit" />
  </form>
  <h2>MY Name Is:  {name} </h2>
  <h2>MY Email Is:  {email} </h2>

  
  <ul>
   { items.map((item) => <li key={item.id}>{item.name}</li>) }
   </ul>
  </>
   
  )
}
export default MyForm;
