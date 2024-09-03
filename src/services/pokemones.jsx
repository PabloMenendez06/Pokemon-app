export const reqPokemon = async (nombre) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
        const data = await resp.json();

        const pokemon = {
            id: data.id,
            name: data.name,
            types: data.types.map(typeInfo => typeInfo.type.name),
            imageUrl: data.sprites.other['official-artwork'].front_default ,
            imageSUrl: data.sprites.other['official-artwork'].front_shiny,
            weight: data.weight, 
            height: data.height
        };

        console.log(pokemon);
        return pokemon;
        
    } catch (err) {
        console.error(err);
        throw err; 
    }
};
