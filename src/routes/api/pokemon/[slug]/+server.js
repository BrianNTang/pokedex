export async function GET({ params }) {
    const id = params.slug;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data));
}