 import { Outlet } from "react-router-dom";
 import HeaderComponent from "../components/HeaderComponent";
 import FooterComponent from "../components/FooterComponent";
 //componente que es utilizado como plantilla base para mostrar el contenido
 const PageTemplate = () => {
  return (
   <>
    <HeaderComponent/>
       <Outlet/>
    <FooterComponent/>
   </>
  )
}

export default PageTemplate;