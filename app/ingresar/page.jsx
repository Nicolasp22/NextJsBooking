import "./style.css"
import Link from "next/link"

export default function Ingresar () {
     return (
        <> 
        <h1 className="compañia">Networking</h1>
        <h1 className="titulo">Iniciá Sesión</h1>
        <div>
    <form className="formulario" action="Ingresar">
        <div class="mail">
        <label>
            <input id="mail" className="mail" type="email" placeholder="Email" required autocomplete="email"/>
        </label>
    </div>
        <div className="psw">
        <label>
            <input id="psw" className="psw" type="password" placeholder="Contraseña" required autocomplete="current-password"/>
        </label>
    </div>
        <div className="recupero">
        <a className="recupero" href="al">¿Olvidaste tu contraseña?</a>
    </div>
    <div className="boton">
        <input id="boton" className="boton" type="submit" value="Ingresar"/> </div>
    </form>
      </div>
        <Link className="crear" href="../crearCuenta"> 
        <p className="leyenda">¿No tenes cuenta? ¡Crea una gratis!</p> </Link>
        <img className="imagen" src="fotos/chatbot.png"/>
        </> 

     )}