import { useContext } from "react";
import UserContext from "../Context/userContext";


function AgregarGasto () {
  const {agregarGasto} = useContext(UserContext);
    function handleSubmit (e) {
      e.preventDefault ();
      const gasto = e.target.elements.gasto.value;
      agregarGasto(gasto);
    }

 return (
  <div className="form">
    <form onSubmit = {handleSubmit}>
      <input autoComplete="off" type = "number" id = "gasto"/>
      <button type="Submit"> Agregar gasto </button>
    </form>
  </div>
 )
}
export default AgregarGasto;