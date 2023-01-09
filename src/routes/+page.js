/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    return {
        pokemon: data.results.map((value, index) => {
            return {
                id: index + 1,
                name: value.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }
        })
    }
}