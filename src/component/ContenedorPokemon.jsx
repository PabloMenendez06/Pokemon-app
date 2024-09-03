import React from "react";
import "../estilos/style.css"; 

export const ContenedorPokemon = ({ pokemon }) => {
    return (
        <>
            <div className="container d-flex flex-column align-items-center mt-5">
            <div className="card bg-transparent p-4 mb-5 ">
                    <img className="card-img-top w-50 mx-auto mb-3" src={pokemon.imageUrl} alt={pokemon.name} />
                    <img className="card-img-top w-50 mx-auto mb-3" src={pokemon.imageSUrl} alt={pokemon.name} />
                    <div className="card-body text-bg-danger">
                        <h1 className="card-title mb-3">{pokemon.name}</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Pokemon Id:</strong> {pokemon.id}</li>
                            <li className="list-group-item"><strong>Tipo:</strong> {pokemon.types}</li>
                            <li className="list-group-item"><strong>Peso:</strong> {pokemon.weight/ 10} Kg</li>
                            <li className="list-group-item"><strong>Altura:</strong> {pokemon.height/ 10} Mts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};




 