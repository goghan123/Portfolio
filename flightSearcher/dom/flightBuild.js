/* eslint-disable linebreak-style */

import Flight from '../source/flightClass.js';
import enterNewOutwardDate from './newOutwardDate.js';

let flightID = 0;

async function getSearchDate(page) {
  const remoteSearchDateElement = await page.$('span._dpmg2--mobileControls-shortcut-date');
  const remoteSearchDate = await remoteSearchDateElement.getProperty('textContent');
  const dateOfSearch = await remoteSearchDate._remoteObject.value;
  return dateOfSearch;
}

async function getArrivalTimes(e, currentFlight) {
  const sameFlightAndCompanyTimeOptions = [];
  const flightTimesOptions = await currentFlight.$$('span.hour');
  const i = e * 2 + 1;
  const timeElementContent = await flightTimesOptions[i].getProperty('textContent');
  const time = await timeElementContent._remoteObject.value;
  sameFlightAndCompanyTimeOptions.push(time);
  return sameFlightAndCompanyTimeOptions;
}

async function getDepartureTimes(e, currentFlight) {
  const sameFlightAndCompanyTimeOptions = [];
  const flightTimesOptions = await currentFlight.$$('span.hour');
  const i = e * 2;
  const timeElementContent = await flightTimesOptions[i].getProperty('textContent');
  const time = await timeElementContent._remoteObject.value;
  sameFlightAndCompanyTimeOptions.push(time);
  return sameFlightAndCompanyTimeOptions;
}

async function getPrices(currentFlight) {
  const tentativePrices = await currentFlight.$$('span.amount.price-amount');
  const finalPriceElement = await tentativePrices[3].getProperty('textContent');
  const finalPrice = await finalPriceElement._remoteObject.value;
  return finalPrice;
}

async function getFlightDuration(e, currentFlight) {
  const sameFlightAndCompanyDurationOptions = [];
  const flightsDurationOptions = await currentFlight.$$('span.best-duration');
  const durationElementContent = await flightsDurationOptions[e].getProperty('textContent');
  const duration = await durationElementContent._remoteObject.value;
  sameFlightAndCompanyDurationOptions.push(duration);
  return sameFlightAndCompanyDurationOptions;
}

async function howManySubFlights(currentFlight) {
  const flightsSubOptions = await currentFlight.$$('span.name > span');
  const ammountOfSubFlights = await flightsSubOptions.length;
  return ammountOfSubFlights;
}

async function getAirlines(e, currentFlight) {
  const sameFlightAndCompanyDurationCompany = [];
  const flightsOptions = await currentFlight.$$('span.name > span');
  const airlineElementContent = await flightsOptions[e].getProperty('textContent');
  const airlineName = await airlineElementContent._remoteObject.value;
  sameFlightAndCompanyDurationCompany.push(airlineName);
  return sameFlightAndCompanyDurationCompany;
}

export default async function buildFlight(page, date) {
  const flightsOfThisSearch = await page.$$('div.cluster-container.COMMON');
  await console.log('-------------');
  await console.log('-------------');
  await console.log(`There where detected ${flightsOfThisSearch.length} prices:`);

  if (flightsOfThisSearch.length < 1) {
    console.log('Retrying search');
    await enterNewOutwardDate(page, date);
  } else {
    for (let i = 0; i < flightsOfThisSearch.length; i += 1) {
      const currentFlight = await flightsOfThisSearch[i];
      const ammountOfSubFLights = await howManySubFlights(currentFlight);
      const date = await getSearchDate(page);
      for (let e = 0; e < ammountOfSubFLights; e += 1) {
        flightID += 1;
        const airline = await getAirlines(e, currentFlight);
        const price = await getPrices(currentFlight);
        const arrivalTime = await getArrivalTimes(e, currentFlight);
        const departureTime = await getDepartureTimes(e, currentFlight);
        const flightDuration = await getFlightDuration(e, currentFlight);
        const newFlight = new Flight(
          flightID,
          price,
          airline,
          date,
          departureTime,
          arrivalTime,
          flightDuration,
        );
        newFlight.automaticPrint();
        newFlight.reportToExcel();
      }
    }
  }
}
