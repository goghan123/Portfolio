export default async function navigateToPage(offset) {
  const destination = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`, { method: 'GET' });
  return destination;
}
