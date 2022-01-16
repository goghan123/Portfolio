export default async function getPokemonSpecificUrl(offset, htmlLocation) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`, { method: 'GET' });
  const jsonResponse = await response.json();
  const urlForDetails = await jsonResponse.results[htmlLocation].url;
  const visibleListPokemons = jsonResponse;
  return { visibleListPokemons, urlForDetails };
}
