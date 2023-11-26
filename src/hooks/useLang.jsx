import { useContext } from "react";
import langContext from "../context/LangProvider";
const useLang = () => {
  
    return useContext(langContext);
  
}
export default useLang;