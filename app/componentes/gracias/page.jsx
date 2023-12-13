import Link from "next/link"
import "./style.css"


export default function Gracias () {
    return(
        <> 
        <div className="gracias"> 
        <h1>Gracias por crear una cuenta en nuestro sitio puede ingresar a la misma desde: 
           <Link href="../ingresar" className="link">Ingresar</Link> 
           
        </h1>
        </div>
        </>
    )
}