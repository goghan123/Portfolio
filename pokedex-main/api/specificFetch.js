export default async function getPokemonDetails(urlForDetails) {
  const detailsResponse = await fetch(urlForDetails, { method: 'GET' });
  const jsonDetailsResponse = await detailsResponse.json();
  return jsonDetailsResponse;
}
