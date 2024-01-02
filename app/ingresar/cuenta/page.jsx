"use client";
import Link from "next/link";
import "./style.css"



export default function Cuenta () {

    let menu = () => { 
        let botones = document.querySelector(".hi")
        let buttons = document.querySelector(".ho")
        let cerrar = document.querySelector(".cierre")
        let div = document.querySelector(".lista-productos")
        let configuraciones = document.querySelector(".datos")


        botones.style.visibility = "visible"; 
        buttons.style.visibility = "visible"; 
        cerrar.style.visibility = "visible";
        div.style.visibility = "visible";
        configuraciones.style.color = 'black';
        } 
        
    let cerrar = () => {
        let boton = document.querySelector(".hi")
        let button = document.querySelector(".ho")
        let cerrar = document.querySelector(".cierre")
        let div = document.querySelector(".lista-productos ")
        let configuraciones = document.querySelector(".datos")

        boton.style.visibility = "hidden"; 
        button.style.visibility = "hidden"; 
        cerrar.style.visibility = "hidden";
        div.style.visibility = "hidden";
        configuraciones.style.color = 'black';
       }

    let Cuenta = () => {
        let cuenta = document.querySelector(".lista-cuenta")
        let ca = document.querySelector(".cierre2")
        // let configuraciones = document.querySelector(".datos") 

        cuenta.style.visibility = "visible";
        ca.style.visibility = "visible";
        // configuraciones.style.color = 'black'; 
        }
    let Cierre = () => {
        let close = document.querySelector(".lista-cuenta")
        let ca = document.querySelector(".cierre2")
        let configuraciones = document.querySelector(".datos")

        close.style.visibility = "hidden";
        ca.style.visibility = "hidden";
        configuraciones.style.color = 'black';
    }    
    let titileo = () => {
        let configuraciones = document.querySelector(".datos")

        configuraciones.style.color = 'blue';
      
    }
    // Navegacion
    let Lista1 = () => { 
      let misDatos1 = document.querySelector("#g1")
      let misDatos2 = document.querySelector("#g2")
      let misDatos3 = document.querySelector("#g3")
      let misDatos4 = document.querySelector("#g4")
      let misDatos5 = document.querySelector("#g5")
      let listaBoton = document.querySelector("#g6")

      misDatos1.style.display = "block";
      misDatos2.style.display = "block";
      misDatos3.style.display = "block";
      misDatos4.style.display = "block";
      misDatos5.style.display = "block";
      listaBoton.style.display = "block";
    }
    let Lista1Cierre = () => {
      let misDatos1 = document.querySelector("#g1")
      let misDatos2 = document.querySelector("#g2")
      let misDatos3 = document.querySelector("#g3")
      let misDatos4 = document.querySelector("#g4")
      let misDatos5 = document.querySelector("#g5")
      let misDatos6 = document.querySelector("#g6")

      misDatos1.style.display = "none";
      misDatos2.style.display = "none";
      misDatos3.style.display = "none";
      misDatos4.style.display = "none";
      misDatos5.style.display = "none";
      misDatos6.style.display = "none";

    }
    
    let Lista2 = () => { 
      let misDatos1 = document.querySelector("#b1")
      let misDatos2 = document.querySelector("#b2")
      misDatos1.style.display = "block"
      misDatos2.style.display = "block"

    }
    let Lista2Cierre = () => { 
      let misDatos1 = document.querySelector("#b1")
      let misDatos2 = document.querySelector("#b2")
      misDatos1.style.display = "none"
      misDatos2.style.display = "none"

    }

    let Lista3 = () => { 
      let misDatos1 = document.querySelector("#c1")
      let misDatos2 = document.querySelector("#c2")
      let misDatos3 = document.querySelector("#c3")
      misDatos1.style.display = "block"
      misDatos2.style.display = "block"
      misDatos3.style.display = "block"
    } 
    let Lista3Cierre = () => { 
      let misDatos1 = document.querySelector("#c1")
      let misDatos2 = document.querySelector("#c2")
      let misDatos3 = document.querySelector("#c3")
      misDatos1.style.display = "none"
      misDatos2.style.display = "none"
      misDatos3.style.display = "none"
    } 
    let Lista4 = () => {
      let misDatos1 = document.querySelector("#d1")
      let misDatos2 = document.querySelector("#d2")
      misDatos1.style.display = "block";
      misDatos2.style.display = "block";
    }
    let Lista4Cierre = () => {
      let misDatos1 = document.querySelector("#d1")
      let misDatos2 = document.querySelector("#d2")
      misDatos1.style.display = "none";
      misDatos2.style.display = "none";
    }

    let idioma = () => {
      let misdatos1 = document.querySelector("#ingles")

      misdatos1.style.display = "block"
    }
// Listas
  function funciones1(){
      Lista1();
      Lista2Cierre();
      Lista3Cierre();
      Lista4Cierre();
  }
  function funciones2(){
    Lista2();
    Lista1Cierre();
    Lista3Cierre();
    Lista4Cierre();
  }
  function funciones3(){
    Lista3();
    Lista1Cierre();
    Lista2Cierre();
    Lista4Cierre();
  }
  function funciones4(){
    Lista4();
    Lista1Cierre();
    Lista2Cierre();
    Lista3Cierre();
  }


// Agrupacion de listas
  
           return(
        <>
      
       <div className="nav">
       
 <h2 className="networking">Networking</h2>
 <h2 className="nosotros"> <Link className="nos" href="A">Nosotros</Link> </h2>
 <h2 id="productos" onClick={menu} className="productos">Productos</h2>
 <h2 onClick={Cuenta} className="micuenta">Mi cuenta</h2>
 </div>
 <div className="listas"> 


   <div className="lista-productos"> 
  <div className="hi"> 
    <img src="../iconos/building.svg" alt="" />
    <Link id="link1" href="../ingresar/departamentos">Departamentos</Link>
     </div>
  <div className="ho">
    <img src="../iconos/houses.svg" alt="" />
    <Link id="link2" href="../ingresar/mansiones">Mansiones</Link> 
    </div> 
  <div className="cierre" onClick={cerrar}> Cerrar </div>
   </div>

    <div className="lista-cuenta"> 
 <div className="perfil">
    <img src="../iconos/person.svg" alt="" />
    <Link href="./cuenta" id="link3" onClick={Cierre}> Mi perfil </Link> </div>
 <div className="conf">
    <img src="../iconos/gear.svg" alt="" />
    <Link href="./cuenta" id="link4" onClick={titileo}> Configuración </Link> </div>
 <div className="cierre2" onClick={Cierre}>Cerrar</div>
   </div>

  </div>
  <h1 id="perfil">Mi perfil</h1>
  <div className="datos">

    <div id="g" onClick={funciones1}>Mis datos personales </div>
    <div className="lista1"> 
<input type="text" id="g1" placeholder="Tu nombre"/>
<input type="text" id="g2" placeholder="Tu apellido"/>
<input type="email" id="g3" placeholder="tumail@info.com"/>
<input type="tel" id="g4" placeholder="Tu celular"/>
<input type="psw" id="g5" placeholder="N************"/>
<input type="button" id="g6" value="Guardar" onClick={Lista1Cierre} />
</div>
 

    <div id="b" onClick={funciones2}>Cupones </div> 
<div className="lista2">
<input id="b1" type="text" placeholder="Ingresa un cupon aquí"/>   
<button id="b2" onClick={Lista2Cierre}>Guardar</button>  
</div> 
    

    <div id="c" onClick={funciones3}>Cuentas Bancarias </div>
<div className="lista3"> 
<input id="c1" type="text" placeholder="Nombre del banco"/>
<input id="c2" type="text" placeholder="Tu CBU"/>
<button onClick={Lista3Cierre} id="c3" >Guardar</button> 
</div>
   

    <div id="d" onClick={funciones4}>Idioma </div>
    <div className="lista4"> 
      <select id="d1" name="idioma">
        <option id="es" value="Español">Español</option>
        <option onClick={idioma} id="en" value="Ingles">Ingles</option>
        <option id="fr" value="Francés">Francés</option>
      </select>
      <input id="d2" onClick={Lista4Cierre} type="button" value="Guardar" />
      </div>
      
</div>

        </>
    )
}