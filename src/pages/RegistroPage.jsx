import '../styles/card.css'
export const RegistroPage = () => {
  return (
    <>
            <form class="formulario" >
                <fieldset>
                    <legend>Registro</legend>

                    <div class="contenedor-campos">

                        <div class="campo">
                            <label>Nombre</label>
                            <input class="input-text" type="text" placeholder="Nombre" /> 
                        </div>
                        <div class="campo">
                            <label>Apellido</label>
                            <input class="input-text" type="text" placeholder="Apellido" /> 
                        </div>
                        <div class="campo">
                            <label>Correo</label>
                            <input class="input-text" type="email" placeholder="E-mail" /> 
                        </div>
                        <div class="campo">
                            <label>Usuario</label>
                            <input class="input-text" type="text" placeholder="Usuario" /> 
                        </div>
                
                        <div class="campo">
                            <label>Contraseña</label>
                            <input class="input-text" type="paassword" placeholder="Contraseña"  />
                        </div>
                    </div>

                    <div class="alinear-derecha flex">
                    <input class="boton w-sm-100" type="submit" value="Registrarse" />
                    </div>
                </fieldset>
            </form>

        </>
  )
}
