import "./estilo.css"
import Link from "next/link"

export default function Ingresar () {
     return (
        <> 
        <h1 className="compañia">Networking</h1>
        <h1 className="titulo">Iniciá Sesión</h1>
        <div>
    <form className="formulario" action="Ingresar">
        <div className="mail">
        <label>
            <input id="mail" className="mail" type="email" placeHolder="Email" required autoComplete="email"/>
        </label>
    </div>
        <div className="psw">
        <label>
            <input id="psw" className="psw" type="password" placeHolder="Contraseña" required autoComplete="current-password"/>
        </label>
    </div>
        <div className="recupero">
        <a className="recupero" href="al">¿Olvidaste tu contraseña?</a>
    </div>
    <div className="boton">
        <input id="boton" className="boton" type="submit" value="Ingresar"/> </div>
    </form>
      </div>
        <Link className="crear" href="../componentes/nav"> 
        ¿No tenes cuenta? ¡Crea una gratis!</Link>
        <img className="imagen" src="../fotos/chatbot.png"/>
        </> 

     )}