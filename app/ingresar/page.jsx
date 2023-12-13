import "./estilo.css"
import Link from "next/link"


export default function Ingresar () {
     return (
        <> 
<form action="./ingresar/gracias" 
        name="formulario" hidden 
        data-netlify="true" netlify-honeypot="bot-field">
<input id="mail" name="mail" className="mail" type="email" placeholder="Email" required autoComplete="email"/>
<input id="psw" name="psw" className="psw" type="password" placeholder="Contraseña" required autoComplete="current-password"/>
</form>



        <h1 className="compañia">Networking</h1>
        <h1 className="titulo">Iniciá Sesión</h1>
        <div>
    <form className="formulario" action="Ingresar" method="post">
        <div className="mail">
        <label>
            <input id="mail" name="mail" className="mail" type="email" placeholder="Email" required autoComplete="email"/>
        </label>
    </div>
        <div className="psw">
        <label>
            <input id="psw" name="psw" className="psw" type="password" placeholder="Contraseña" required autoComplete="current-password"/>
        </label>
    </div>
        <div className="recupero">
        <Link className="recupero" href="./recupero">¿Olvidaste tu contraseña? </Link> 
    </div>
    <div className="boton">
        <input id="boton" className="boton" type="submit" value="Ingresar"/> </div>
        <input type="hidden" name="form-name" value="formulario"/>
    </form>
      </div>
        <Link className="crear" href="http://localhost:3000/"> 
        ¿No tenes cuenta? ¡Crea una gratis!</Link>
        <img className="imagen" src="../fotos/chatbot.png"/>
        </> 

     )}