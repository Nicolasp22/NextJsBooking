import "./style.css"
import Link from "next/link"

export default function Automatico () {
    return(
        <> 
         <div className="gracias"> 
       <h2>En caso de tener una cuenta activa con la casilla indicada se habrá enviado un correo automatico con un link al que debe ingresar para acceder a su cuenta. 
      </h2>
      <h3>Favor de no dar respuesta al mail automatico</h3>
      <Link href="../ingresar" className="link"><div className="texto">Ingresar</div></Link>
      </div>
       
      </>
    )
}