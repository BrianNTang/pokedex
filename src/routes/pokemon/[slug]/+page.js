/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const id = params.slug;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return { pokeman: await res.json() }
}