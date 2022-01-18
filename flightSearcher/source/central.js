/* eslint-disable linebreak-style */

import puppeteer from 'puppeteer';
import enterToMainPage from '../dom/enterToMainPage.js';
import newSearch from './newSearch.js';
import excelManager, { finalTableContent } from './excelManager.js';

const explorer = await puppeteer.launch({ regs: ['--proxy-server=https://190.246.38.135:8080'] });
const page = await explorer.newPage();

export default async function runBot(dateOne, dateTwo, enterDistance) {
  try {
    const currentDate = new Date();
    console.log(currentDate);
    await enterToMainPage(page);
  } catch (err) {
    console.log("Ah-Ah-Ah: you didn't say the magic word");
    console.log("Error at main page");
    console.log(err);
  }
  try {
    for (let i = dateOne; i <= dateTwo; i += 1) {
      await newSearch(page, i.toString(), enterDistance);
    }

    excelManager(finalTableContent);

    await explorer.close();
    console.log('Sequence terminated');
  } catch (err) {
    console.log("Ah-Ah-Ah: you didn't say the magic word");
    console.log("Error while processing new search");
    console.log(err);
  }
}
