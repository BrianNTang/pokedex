export async function GET() {
    const getPokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(getPokemonUrl);
    const data = await res.json();
    const pokemon = data.results.map((value, index) => {
        return {
            id: index + 1,
            name: value.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    })

    return new Response(JSON.stringify(pokemon));
}