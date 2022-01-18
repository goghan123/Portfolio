/* eslint-disable linebreak-style */

import puppeteer from 'puppeteer';
import enterToMainPage from '../dom/enterToMainPage.js';
import newSearch from './newSearch.js';
import excelManager, { finalTableContent } from './excelManager.js';

const explorer = await puppeteer.launch({ regs: ['--proxy-server=https://190.246.38.135:8080'] });
const page = await explorer.newPage();

// Previamente usado: ['--proxy-server=http://201.217.245.229:49160']
// ['--proxy-server=https://140.227.211.47:8080']
// let intentosFallidos = 0;

export default async function runBot(dateOne, dateTwo, enterDistance) {
  try {
    const currentDate = new Date();
    console.log(currentDate);
    await enterToMainPage(page);

    for (let i = dateOne; i <= dateTwo; i += 1) {
      await newSearch(page, i.toString(), enterDistance);
    }

    excelManager(finalTableContent);

    await explorer.close();
    console.log('Sequence terminated');
  } catch (err) {
    console.log("Ah-Ah-Ah: you didn't say the magic word");
    console.log(err);
  }
}
