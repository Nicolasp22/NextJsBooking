import Link from "next/link"
import "./style.css"

export default function Recupero () {
    return(
       <>
        <h1 class="empresa">Networking</h1>
<div class="contenido"> 
        <div class="subtitulos">
     Recuperá tu contraseña
       </div>
        <div class="formulario">
   <form name="recupero psw"> 
 <div>
    <label>
        <input class="mail" type="email" placeholder="Tu Mail" required autocomplete="email"/>
    </label>
 </div>
    
 <div>  
    <label class="">
        <input class="recuperar" type="submit" value="Recuperar"/>
    </label>
 </div>     
    
 <div>   
    <label>
     <Link class="volver" href="./ingresar"><p class="p">Volver</p> </Link> 
    </label>
 </div> 
  </form>
    
     </div>
</div>
    <div>
      <img class="imagen" src="fotos/chatbot.png" alt=""/>
    </div>
       
       </>
    )
}