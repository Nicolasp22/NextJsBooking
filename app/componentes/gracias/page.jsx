import Link from "next/link"
import "./style.css"


export default function Gracias () {
    return(
        <> 
        <div className="gracias"> 
        <h1>Gracias por crear una cuenta en nuestro sitio puede ingresar a la misma desde: </h1>
           <Link href="../ingresar" className="link"><div className="texto">Ingresar</div></Link> 
        </div>
        </>
    )
} 