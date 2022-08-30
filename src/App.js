import React, { useState } from "react";

function App() {
  const [gastos, setGastos] = useState([100, 300, 200])
  
  return (
    <>
      <Suma gastos={gastos} />
      <GastosMes gastos={gastos}/>
      <AgregarGasto setGastos={setGastos}/>
    </>
  );
}

function Suma ({gastos}){
  let total=0
  for (let i=0; i<gastos.length; i++)
  total += Number (gastos[i])
  
  return(
    <div>El gasto total es: {total}</div>
  );
}

function GastosMes ({gastos}){
  

return (
  <ul>
    {gastos.map ((gasto) =>( <li key = {gasto}>{gasto}</li>
    ))}
  </ul>
);
}

function AgregarGasto ({setGastos}) {
  function handleSubmit (event) {
    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    setGastos (e=>[...e, gasto])
  }

return (
  <form onSubmit = {handleSubmit}>
    <input autoComplete="off" type = "number" id = "gasto"/>
    <button type="Submit"> Agregar gasto </button>
  </form>
)
}


export default App;
