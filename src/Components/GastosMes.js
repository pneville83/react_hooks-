import { useContext } from "react";
import UserContext from "../Context/userContext";


function GastosMes (){
  const {gastos} = useContext(UserContext)
  return (
    <ul>
      {gastos.map ((gasto) =>( <li key = {gasto}>{gasto}</li>
      ))}
    </ul>
  );
  }
  export default GastosMes;