import { createContext } from "react";

export const UserContext = createContext ({
  gastos:[ [] , () => {}]
});
export default UserContext;