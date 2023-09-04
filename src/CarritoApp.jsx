import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import './styles/card.css'




export const CarritoApp = () => {
  return (
 /*Esta Etiqueta "Routes", es para entrelazar las distintas paginas y que se puedan conectar entre si */ 
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="container">
        <Routes>
            <Route path="/" element={<div className="container-products"><ComprasPage></ComprasPage></div>}>
            </Route>
            <Route path="/carrito" element={<CarritoPage></CarritoPage>}>
            </Route>
            <Route path="/*" element={<Navigate to='/' />}>
            </Route>
        </Routes>
        
        </div>
        
    </CarritoProvider>
    </ProductosProvider>
  )
}
