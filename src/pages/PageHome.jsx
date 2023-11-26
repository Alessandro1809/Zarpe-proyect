//Componente que funcionara como hoja en blanco para el resto elementos de la pagina 
import WelcomePage from "./WelcomePage"; 
import PageAbout from "./PageAbout";
import Services from "./Services";
import PageContact from "./PageContact";
 const PageHome = () => {
  return (
    <>
    <WelcomePage/>
    <PageAbout/> 
    <Services/>
    <PageContact/>
    </>
  )
}
export default PageHome;