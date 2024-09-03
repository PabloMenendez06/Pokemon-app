import { useState } from "react"
import { reqPokemon } from "../services/pokemones"
 
export const usePokemones = () =>{
    const [pokemon, setPokemon] = useState([])
    const [nombrePokemon,setNombrePokemon] = useState([])
 
    const handleGetPokemon = (e,nombre) =>{
        // evita la recarga completa del navegador
        e.preventDefault()
        reqPokemon(nombre).then((pokemon) => {
            setPokemon(pokemon)
        })
        setNombrePokemon(nombre)
    }
 
    return{
        handleGetPokemon,
        pokemon,
        nombrePokemon
    }
}