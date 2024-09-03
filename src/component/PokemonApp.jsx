import { usePokemones } from "../hooks/usePokemon"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"
import '../estilos/style.css'
 
export const PokemonApp = () =>{
 
    const {handleGetPokemon, pokemon,nombrePokemon} = usePokemones()
    return(
        <>

        {/*props es una propiedad que viaja entre componentes*/}
        <BuscarPokemon handleGetPokemon ={handleGetPokemon}/>
        <ContenedorPokemon pokemon={pokemon} nombrePokemon={nombrePokemon}/>

        </>
    )
 
}