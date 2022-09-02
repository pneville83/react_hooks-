import { useContext } from "react";
import UserContext from "../Context/userContext";

function Suma (){
  const {gastos} = useContext(UserContext)
  let total=0
  for (let i=0; i<gastos.length; i++)
  total += Number (gastos[i])
  
  return(
    <div>El gasto total es: {total}</div>
  );
}
export default Suma;