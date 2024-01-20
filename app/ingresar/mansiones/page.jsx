"use client"
import "./style.css"
import Link from "next/link"
import { useEffect, useState } from "react";

 

export default function Mansiones () {
    let productos = () => {
      let div = document.querySelector(".lista-productos")  
      let botones = document.querySelector(".hi")
      let buttons = document.querySelector(".ho") 
        
        // let configuraciones = document.querySelector(".datos") 
     div.classList.toggle("ocultar") 
     botones.classList.toggle("ocultar")
     buttons.classList.toggle("ocultar")
    } 
        
    let cuenta = () => {
        let lista = document.querySelector(".lista-cuenta") 
        let perfil = document.querySelector(".perfil")
        let conf = document.querySelector(".conf")

        lista.classList.toggle("ocultar") 
        perfil.classList.toggle("ocultar")
        conf.classList.toggle("ocultar")
     }
    
    
    /* ¿Porque me tira Cannot read property  "addEventListener" of null ?
    let comprar1 = document.querySelector("#boton1")
    comprar1.addEventListener("click", () => {
        confirm(`¿Estas seguro de que quieres alquilar este departamento por $${count1*precio1} pesos?`)
    });
    */

    let Comprar1 = () => {
        let title = document.querySelector(".titulo1"); 
        var dateControl = document.querySelector('input[type="date"]');       
        var date = dateControl.valueAsDate;
        window.confirm(`¿Estas seguro de que quieres alquilar ${title.textContent} durante ${count1} noches por $${count1*precio1} pesos?`  )
    }
    
    let Comprar2 = () => {
        let title = document.querySelector(".titulo2"); 
     
        window.confirm(`¿Estas seguro de que quieres alquilar ${title.textContent} durante ${count2} noches por $${count2*precio2} pesos?` )
    }
    let Comprar3 = () => {
        let title = document.querySelector(".titulo3"); 
     
        window.confirm(`¿Estas seguro de que quieres alquilar ${title.textContent} durante ${count3} noches por $${count3*precio3} pesos?` )
    }
    let Comprar4 = () => {
        let title = document.querySelector(".titulo4"); 
        
        window.confirm(`¿Estas seguro de que quieres alquilar ${title.textContent} durante ${count4} noches por $${count4*precio4} pesos?` )

    }

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [count4, setCount4] = useState(1);
    let precio1 = 30000;
    let precio2 = 45000;
    let precio3 = 23000;
    let precio4 = 50000;
    

    let aspecto = () => {
        let modos = document.querySelector(".lista-aspecto")
        let modo1 = document.querySelector(".lista-aspecto1")
        let modo2 = document.querySelector(".lista-aspecto2") 

        modos.classList.toggle("ocultar") 
        modo1.classList.toggle("ocultar")
        modo2.classList.toggle("ocultar")
    }
    let darkMode = () => {
        const body = document.querySelector(".contenido");
        // Agregar o eliminar la clase "dark" al elemento body
        body.classList.toggle("dark");
        }
    
    let brightMode = () => {
          const body = document.querySelector(".contenido");
          // Agregar o eliminar la clase "dark" al elemento body
          body.classList.remove("dark");
    }

    return (
        <>
 <div className="nav">
 <h2 className="networking">Networking</h2>
 <h2 className="nos" onClick={aspecto}>Aspecto</h2>
 <h2 id="productos" onClick={productos} className="productos">Productos</h2>
 <h2 onClick={cuenta} className="micuenta">Mi cuenta</h2>
 </div>
  

<div className="contenido"> 

 <div className="listas"> 

 <div className="lista-aspecto">
 <div className="lista-aspecto1" onClick={darkMode}>
    <img src="../iconos/obscure.svg" alt="" />
    <div className="oscuro">Modo oscuro</div>
 </div>
 <div className="lista-aspecto2" onClick={brightMode}>
    <img src="../iconos/bright.svg" alt="" />
    <div>Modo claro</div> 
 </div>
</div>
 

<div className="lista-productos"> 
<div className="hi">
    <img src="../iconos/building.svg" alt="" />
    <Link id="link1" href="./departamentos">Departamentos</Link> </div>
<div className="ho">
    <Link id="link2" href="./cuenta">Inicio</Link> </div>
</div>

 <div className="lista-cuenta"> 
<div className="perfil">
    <img src="../iconos/person.svg" alt="" />
    <Link href="./cuenta" id="link3"> Mi perfil </Link></div>
<div className="conf">
    <img src="../iconos/gear.svg" alt="" />
    <Link href="./cuenta" id="link4">Configuración </Link></div>
</div>

</div>
{/* Hasta aca cabecera */}
 
<h1 className="title">Mansiones</h1>

        <div className="mansiones">
            
<div className="grilla1">
<h1 className="titulo1">Glamourous Great Falls Mansion</h1>
<div className="mansion1"> 
    <img src="../mansion1/frente.webp" alt="" />
    <img src="../mansion1/otra.webp" alt="" />
    <img src="../mansion1/cocina.webp" alt="" />
    <img src="../mansion1/living.webp" alt="" />
    <img src="../mansion1/estar.webp" alt="" />
    <img src="../mansion1/comedor.webp" alt="" />
    <img src="../mansion1/habitacion.webp" alt="" />
    <img src="../mansion1/camas dobles.webp" alt="" />
    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38969.26417897805!2d4.824317236913235!3d52.378053203046115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609d4fb64d00b%3A0x92dfa2afada2e47a!2sConscious%20Hotel%20Westerpark!5e0!3m2!1ses-419!2sar!4v1705791278015!5m2!1ses-419!2sar" width="600" height="350"></iframe>
    </div>    
<p  className="descripcion1">¡Esta lujosa mansión te dejará sin aliento! Apareció en la revista y reality tv show. La propiedad tiene más de 10,000 pies cuadrados con 6 dormitorios y 7 baños. Cada dormitorio tiene su baño privado para mayor comodidad. Además, una impresionante cocina gourmet y comedor. Hermoso patio trasero enorme con una piscina fascinante. Disfruta de este hermoso oasis para relajarte y disfrutar de una estancia cómoda.  
La entrada a la propiedad te dejará sin aliento. La sala de estar de techo de 20 pies de altura es excepcionalmente hermosa. La puerta francesa conduce a la terraza y la piscina. Cada dormitorio tiene sus baños en suite. Máquina de karaoke para el entretenimiento. Actividades y juegos divertidos están disponibles, como mesa de ping-pong, hockey de aire, futbolín, casa de rebote y mucho más. </p>
<div className="botones"> Días de estadía   
    <button onClick={() => { if(count1 > 1) { setCount1(count1 - 1) } } }>-</button>
    {count1}
    <button onClick={() => setCount1(count1 + 1)}>+</button>
    Fecha de inicio
    <input type="date"/>
    </div>
<button onClick={Comprar1} id="boton1" className="boton">Alquilar</button>
</div>

<div className="grilla1"> 
<h1 className="titulo2">IBB Beach Mansion</h1>
<div className="mansion2">
    <img src="../mansion2/frente.webp" alt="" />
    <img src="../mansion2/habitacion.webp" alt="" />
    <img src="../mansion2/cocina.webp" alt="" />
    <img src="../mansion2/comedor.webp" alt="" />
    <img src="../mansion2/pool.webp" alt="" />
    <img src="../mansion2/spa.webp" alt="" />
    <img src="../mansion2/comedor2.webp" alt="" />
    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.230524438697!2d-123.94067102476062!3d45.60601122396705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5494ccba07fb131b%3A0xeaa11137d5469b07!2s539%20S%20Kesterson%20Ct%2C%20Rockaway%20Beach%2C%20OR%2097136%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1705791441067!5m2!1ses-419!2sar" width="600" height="350"></iframe>
</div>
<p className="descripcion2">Conocida por los lugareños como el lugar donde vivió una celebridad de la lista A durante casi un año durante una filmación de películas en Rockaway Beach y Astoria, la mansión de playa "Volveré" es la opción perfecta para tu reunión familiar posterior a Covid o una gran escapada con múltiples familias y amigos. Esta casa de 6BR/6BA 6400 pies cuadrados ofrece una escapada costera pacífica lejos del ajetreo de la vida de la ciudad, pero lo suficientemente cerca como para disfrutar de todo lo que el océano tiene para ofrecer. Cada habitación tiene unas vistas panorámicas inmejorables al mar, incluidas las cinco suites principales. Reúnete en dos balcones o en la espaciosa terraza de 2500 pies cuadrados, que es el lugar ideal para asar a tu familia una comida, ponte al día sobre la chimenea o disfruta de la hermosa puesta de sol sobre el océano relajándose de la nueva bañera de hidromasaje.
 </p>   
 <div className="botones"> 
    <div className="txt">Dias de estadía </div>  
    <button onClick={() => { if(count2 > 1) { setCount2(count2 - 1) } }}>-</button>
    {count2}
    <button onClick={() => setCount2(count2 + 1) }>+</button>
    Fecha de inicio
    <input type="date" />
    </div>
 <button onClick={Comprar2} className="boton">Alquilar</button>
</div>

<div className="grilla2">
<h1 className="titulo3">The Bluegrass Palace</h1>
<div className="mansion3">

    <img src="../mansion3/aereo.webp" alt="" />
    <img src="../mansion3/frente.webp" alt="" />
    <img src="../mansion3/cocina.webp" alt="" />
    <img src="../mansion3/comedor.webp" alt="" />
    <img src="../mansion3/habitacion.webp" alt="" />
    <img src="../mansion3/estar.webp" alt="" />
    <img src="../mansion3/pileta.webp" alt="" />
    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12656.754166428402!2d-82.7917978!3d37.5270526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88451b7c2394ef0f%3A0x5d4589ea695308e9!2sThe%20Bluegrass%20Palace!5e0!3m2!1ses-419!2sar!4v1705791482589!5m2!1ses-419!2sar" width="600" height="350"></iframe>
 </div>
<p className="descripcion3">Hay un lugar especial, ubicado en medio de las colinas ondulantes de Kentucky bluegrass, donde 29,000 pies cuadrados de lujo sin paliativos le dan la bienvenida. Donde las puertas privadas se abren a un paraíso idílico de 9 acres todo tuyo.
Donde una espléndida grandeza del sur se desarrolla dentro de cuatro niveles de 12 suites del dormitorio y un salón de baile, 2 cocinas modernas, 15 baños espaciosos, un escenario de actuación, un cine y una piscina cubierta.
El Palacio Bluegrass... tus sueños te esperan. </p> 
    <div className="botones">  
    <div className="txt">Dias de estadía </div>   
    <button onClick={() => { if(count3 > 1) { setCount3(count3 - 1) } } }>-</button>
    {count4}
    <button onClick={() => {  setCount3(count3 + 1) } }>+</button>
    Fecha de inicio
    <input type="date" />
    </div>
<button onClick={Comprar3} className="boton">Alquilar</button>
</div>

<div className="grilla2"> 
<h1 className="titulo4"> Winthrop Estate 32 acres</h1>
<div className="mansion4">
    <img src="../mansion4/aereo.webp" alt="a" />
    <img src="../mansion4/frente.webp" alt="a" />
    <img src="../mansion4/comedor.webp" alt="a" />
    <img src="../mansion4/estar.webp" alt="aa" />
    <img src="../mansion4/sala.webp" alt="a" />
    <img src="../mansion4/habitacion.webp" alt="a" />
    <img src="../mansion4/habitacion2.webp" alt="a" />
    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39665.731380654746!2d-73.34395100024061!3d42.3601496041175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e75acb55e7085d%3A0xb0c1521e21f2a89d!2sCourtyard%20by%20Marriott%20Lenox%20Berkshires!5e0!3m2!1ses-419!2sar!4v1705791577050!5m2!1ses-419!2sar" width="600" height="350"></iframe>
    </div>
<p className="descripcion4"> The Winthrop Estate es una Great Estate registrada construida en 1875 para Henri Braem, Embajador de Estados Unidos en Dinamarca y socio en Cunard Steamship Lines, famosa por la ultra lujosa línea de barcos Queen Mary, entre otras. Braem vendió la finca a la familia Winthrop, descendientes de John Winthrop, el gobernador fundador de Massachusetts, desde donde la finca tomó su nombre actual. La mansión está recién renovada con toques modernos y bien pensados en sus orígenes e incluye servicios de primer nivel. </p>    
<div className="botones">  
    <div className="txt">Dias de estadía </div>  
    <button onClick={() => { if(count4 > 1) { setCount4(count4 - 1) } } }>-</button>
    {count4}
    <button onClick={() => {  setCount4(count4 + 1) } }>+</button>
    Fecha de inicio
    <input type="date" />
    </div>
<button onClick={Comprar4} className="boton">Alquilar</button>

        </div>
 </div>

        </div>
        </>
         )}  
       