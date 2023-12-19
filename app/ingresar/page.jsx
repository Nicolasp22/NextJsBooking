import "./estilo.css"
import Link from "next/link"


export default function Ingresar () {
     return (
        <> 
<form action="./cuenta" 
        name="ingresar" hidden 
        data-netlify="true" netlify-honeypot="bot-field">
<input id="mail" name="mail" className="mail" type="email" placeholder="Email" required autoComplete="email"/>
<input id="psw" name="psw" className="psw" type="password" placeholder="Contraseña" required autoComplete="current-password"/>
</form>



        <h1 className="compañia">Networking</h1>
        <h1 className="titulo">Iniciá Sesión</h1>
        <div>
    <form className="formulario" name="ingreso" method="post">
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
        <input type="hidden" name="form-name" value="ingresar"/>
        <input id="boton" className="boton" type="submit" value="Ingresar"/> </div>
        
    </form>
      </div>
        <Link className="crear" href="https://tpconnextjs.netlify.app/"> 
        ¿No tenes cuenta? ¡Crea una gratis!</Link>
        <img className="imagen" src="../fotos/chatbot.png"/>
        </> 

     )}