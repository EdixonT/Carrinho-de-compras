import '../styles/card.css'

export const LoginPage = () => {


    return (
        <>
            <form class="formulario" >
                <fieldset>
                    <legend>Iniciar Sesion</legend>

                    <div class="contenedor-campos">

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
                    <input class="boton w-sm-100" type="submit" value="Iniciar Sesion" />
                    </div>
                </fieldset>
            </form>

        </>
    )
}
