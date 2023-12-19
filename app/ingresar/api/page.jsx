// import Cuenta from "../cuenta/page";
"use client";
import "./api.css"
import { useState, useEffect } from "react";


export default function Dolar () { 
  const [cargando, setCargando] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => { 
    const fetchPokemon = async() => {
    const res = await fetch("https://www.ambito.com/contenidos/dolar.html"); 
    if(res.ok) 
    // Si veo promes pending seguramente me olvide el await o el .res
    {
        const data = await res.json();
        setPokemon(data);
        setCargando(false);
    } else {
        console.error("Ooops, ", res.status) 
    }
    }
    fetchPokemon();
    }, [])
    
    if (cargando === true) {
        return (
            <> 
            {cargando && 
                <h2>Cargando pokemones...</h2> 
                } </>
        )} else { 
            return (
                <>
                 {!cargando &&
                 <>
               
                 {pokemon.sprites && 
                 <img src={pokemon.sprites.front_default} alt="" /> }
                 <h2>{pokemon.name}</h2> 
                 <p> El peso de {pokemon.name} es {pokemon.weight} kg</p> 
                 </>
                 }
                </>
            )}}




