import { BrowserRouter,Route,Routes } from 'react-router-dom'
import PageTemplate from './layout/PageTemplate'
import PageHome from './pages/PageHome'
import { LangProvider } from './context/LangProvider'
//Dentro de este componente se encuentra el routing de la aplicacion
function App() {
  return (
    <>
    <LangProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<PageTemplate/>}>
              <Route index element={<PageHome/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </LangProvider>
    </>
  )
}

export default App;
