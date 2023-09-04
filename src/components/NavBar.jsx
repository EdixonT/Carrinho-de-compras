import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import '../styles/card.css'



export const NavBar = () =>  {

    const {listaCompras} = useContext(CarritoContext)
    return (
        <>
        <nav class="navegacion">
        <a class="navegacion__enlace navegacion__enlace--activo" href="index.html">TIENDA</a>
        
    

                <NavLink  to='/carrito'>
                    <Badge className="navegacion__badge" badgeContent={listaCompras.length} color="secondary">
                        <ShoppingCart color="action" />
                    </Badge>
                </NavLink>
           
        </nav>
        </>
  )
}
