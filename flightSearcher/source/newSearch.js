/* eslint-disable linebreak-style */
import buildFlight from '../dom/flightBuild.js';
import enterNewOutwardDate from '../dom/newOutwardDate.js';

export default async function newSearch(page, date, idOfDesiredMonth) {
  console.log('Entering to new page');
  await enterNewOutwardDate(page, date, idOfDesiredMonth);
  await page.waitForNavigation({ timeout: 100000 });
  await buildFlight(page, date, idOfDesiredMonth);
}
