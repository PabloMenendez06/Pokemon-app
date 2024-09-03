import { useState } from "react"

export const BuscarPokemon = ({handleGetPokemon}) => {

    const [nombre,setNombrePokemon] = useState('')

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            
        <form  className="d-flex" onSubmit={(e)=>{handleGetPokemon(e,nombre)}}>
        <input type="text" className="form-control" onChange={(e)=>{setNombrePokemon(e.target.value)}} />
        <input type="submit" value={'buscar'} className="btn btn btn-danger"/>

        </form>
    </div>
  )
}
