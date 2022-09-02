import React, { useState } from "react";
import AgregarGasto from "./Components/AgregarGasto";
import GastosMes from "./Components/GastosMes";
import Suma from "./Components/Suma";
import UserContext from "./Context/userContext";
import "./App.css";

function App() {
  const [gastos, setGastos] = useState ([])

  function agregarGasto (gasto) {
    setGastos([...gastos, gasto])
  }
  
  return ( 
    <UserContext.Provider value={{gastos, agregarGasto}}>
      <Suma />
      <GastosMes />
      <AgregarGasto />
    </UserContext.Provider>
  );
}
export default App;
