import "./style.css"
import Link from "next/link"


export default function CrearCuenta () {
    return(
        <>
        <div className="empresa">Networking</div>
        <div className="subtitulo">
            Crear Cuenta
        </div>
        <form  
        action="./componentes/gracias" 
        name="formulario" hidden 
        data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="nombre"/>
        <input type="text" name="apellido"/>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="password" name="password-r" />
        <select> 
                    <option value="ARGENTINA">+54</option>
                    <option value="URUGUAY">+598</option>
                    <option value="PARAGUAY">+595</option>
                    <option value="BRASIL">+55</option>
                    <option value="CHILE">+56</option>
                    <option value="PERU">+51</option>
                    <option value="COLOMBIA">+57</option>
                    <option value="VENEZUELA">+58</option>
        </select>
        <input className="tel" type="tel" placeHolder="Teléfono" />
        </form>

 <div className="formulario">
    <form className="contenido" method="post" >
        <div className="nombre"> 
            <label>
                <input className="nombre" type="text" placeHolder="Nombre" required autoComplete="name" />
            </label></div>
        <div className="apellido">
            <label>
                <input className="apellido" type="text" placeHolder="Apellido" required autoComplete="family-name" />
            </label></div>
        <div className="email">
            <label>
                <input className="email" type="email" placeHolder="Correo electrónico" required autoComplete="email" />
            </label></div>
        <div className="password">
            <label>
                <input className="password" type="password" placeHolder="Contraseña" required autoComplete="current-password" />
            </label></div>
        <div className="password-r">
            <label>
                <input className="password-r" type="password" placeHolder="Repetir Contraseña" required />
            </label></div>
         <div className="select">
             <label> 
                <select>
                    <option value="ARGENTINA">+54</option>
                    <option value="URUGUAY">+598</option>
                    <option value="PARAGUAY">+595</option>
                    <option value="BRASIL">+55</option>
                    <option value="CHILE">+56</option>
                    <option value="PERU">+51</option>
                    <option value="COLOMBIA">+57</option>
                    <option value="VENEZUELA">+58</option>
                    </select>
                <input className="tel" type="tel" placeHolder="Teléfono" required  minLength="7" />
            </label> </div> 
       
        <div>
            <label className="checkbox">
                 Al registrarte, estás aceptando nuestros <a className="terms" href="https://www.argentina.gob.ar/terminos-y-condiciones" target="_blank">Términos y condiciones</a>  
            </label></div>   

            <div>
                <label className="boton">
                    <input type="hidden" name="form-name" value="formulario"/>
                    <input className="" type="submit" name="Registrarme" value="Registrarme" />
                </label></div> 
            </form>
        <div className="label">
        <Link className="link" href="./ingresar"> 
        ¿Ya tenés cuenta? Toca aquí para ingresar </Link>
        </div>
    
 </div>
        
     <div>
        <img className="imagen" src="../fotos/chatbot.png"/>
         </div> 
</>
)}