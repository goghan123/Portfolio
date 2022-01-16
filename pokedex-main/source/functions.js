/* eslint-disable linebreak-style */

import TwoTypePokemon from './classTwoTypePokemon.js';
import OneTypePokemon from './classOneTypePokemon.js';
import { baseUrlImageSource, formatUrlImageSource } from '../api/imagesSource.js';
import getPokemonSpecificUrl from '../api/generalFetch.js';
import getPokemonDetails from '../api/specificFetch.js';

export const homeButton = $('#home')[0];
export const previousButton = $('#previous')[0];
export const nextButton = $('#next')[0];

export function getName(jsonValue) {
  $("td[id^='col1']").each(function applyName(i) {
    $(this).html(`${jsonValue.results[i].name}`);
  });
}

function getOffset(idOfClickedElement, tensLocation) {
  const tensId = idOfClickedElement[tensLocation];
  let offset;
  if (tensLocation === 0 && tensId % 2 === 0) {
    const offsetTens = idOfClickedElement[tensLocation];
    offset = `${offsetTens.toString()}0`;
  } else if (tensLocation === 1 && tensId % 2 === 0) {
    const offsetHoundreds = idOfClickedElement[0];
    const offsetTens = idOfClickedElement[tensLocation];
    offset = `${offsetHoundreds.toString() + offsetTens.toString()}0`;
  } else if (tensLocation === 2 && tensId % 2 === 0) {
    const offsetThousands = idOfClickedElement[0];
    const offsetHoundreds = idOfClickedElement[1];
    const offsetTens = idOfClickedElement[tensLocation];
    offset = `${offsetThousands.toString() + offsetHoundreds.toString() + offsetTens.toString()}0`;
  } else if (tensLocation === 0 && tensId % 2 !== 0) {
    const offsetTens = idOfClickedElement[tensLocation];
    const newOffsetTens = offsetTens - 1;
    offset = `${newOffsetTens.toString()}0`;
  } else if (tensLocation === 1 && tensId % 2 !== 0) {
    const offsetHoundreds = idOfClickedElement[0];
    const offsetTens = idOfClickedElement[tensLocation];
    const newOffsetTens = offsetTens - 1;
    offset = `${offsetHoundreds.toString() + newOffsetTens.toString()}0`;
  } else if (tensLocation === 2 && tensId % 2 !== 0) {
    const offsetThousands = idOfClickedElement[0];
    const offsetHoundreds = idOfClickedElement[1];
    const offsetTens = idOfClickedElement[tensLocation];
    const newOffsetTens = offsetTens - 1;
    offset = `${offsetThousands.toString() + offsetHoundreds.toString() + newOffsetTens.toString()}0`;
  }
  return offset;
}

export async function detail() {
  const clickedElement = event.target;
  const idOfClickedElement = clickedElement.id;
  let offset = '';

  if (idOfClickedElement.length === 1) {
    offset = '00';
  } else if (idOfClickedElement.length === 2 && idOfClickedElement.substr(0, 1) === '1') {
    offset = '00';
  } else if (idOfClickedElement.length === 2) {
    offset = getOffset(idOfClickedElement, 0);
  } else if (idOfClickedElement.length === 3) {
    offset = getOffset(idOfClickedElement, 1);
  } else {
    offset = getOffset(idOfClickedElement, 2);
  }

  const htmlLocation = idOfClickedElement - offset;
  const {
    visibleListPokemons, urlForDetails,
  } = await getPokemonSpecificUrl(offset, htmlLocation);
  const pokemonDetails = await getPokemonDetails(urlForDetails);

  if (pokemonDetails.types.length === 2) {
    const newPokemon = new TwoTypePokemon(
      visibleListPokemons,
      pokemonDetails,
      htmlLocation,
    );
    newPokemon.introducePokemon();
  } else {
    const newPokemon = new OneTypePokemon(
      visibleListPokemons,
      pokemonDetails,
      htmlLocation,
    );
    newPokemon.introducePokemon();
  }
}

export function putDetailsButton(localOffset) {
  $("td[id^='col2']").each((i) => {
    const currentCell = $("td[id^='col2']")[i];
    const detailsButton = document.createElement('button');
    detailsButton.type = 'button';
    detailsButton.innerHTML = 'Details';
    detailsButton.id = i + localOffset;
    detailsButton.className = 'inner-text';
    currentCell.innerHTML = '';
    currentCell.appendChild(detailsButton);

    detailsButton.onclick = function sendToDetails() {
      detail();
    };
  });
}

export function getImage(offsetValue) {
  $("td[id^='col3']").each(function putImage(i) {
    const localOffset = offsetValue + 1 + i;
    $(this).html('');
    $(this).prepend($('<img>', { id: 'theImg', src: `${baseUrlImageSource}${localOffset}${formatUrlImageSource}` }));
  });
}

export function showLoadingMessage() {
  $("td[id^='col1']").each(function putLoadingMessage() {
    $(this).html('Loading...');
  });
}

export function lockPreviousAtMainPage(offsetLocalValue) {
  if (offsetLocalValue === '00' || offsetLocalValue === 0) {
    previousButton.disabled = true;
  }
}

export function enableBackButton() {
  previousButton.disabled = false;
}

export function putPokemonCount(loadedPage) {
  const count = loadedPage.count;
  $('#pokemon-count').html(`${count} pokemons!`);
}
