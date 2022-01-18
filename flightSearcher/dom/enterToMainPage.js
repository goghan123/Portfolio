/* eslint-disable linebreak-style */

// NOTE: messageForHumans is the title and the explanation of what the next "paragraph"
// of code is about to do. In case of error, the terminal will show the title in which
// that error has occured.

export default async function enterToMainPage(page) {
  try {

    page.setDefaultNavigationTimeout(100000);
    await page.goto('https://www.despegar.com.ar/');

    let messageForHumans = 'MARK "SEARCH ONE WAY ONLY" OPTION';

    console.log(1);
    await page.evaluate(() => {
      const radioOneWay = document.querySelector('#ow-sbox5');
      radioOneWay.click();
    });
    console.log(2);

    messageForHumans = 'ENTER ORIGIN';

    await page.click('[type="text"]');
    await page.type('[type="text"]', 'bbuenos a', { delay: 3000 });
    console.log(3);
    await page.waitForSelector('[class="item"]', { timeout: 100000 });
    console.log(4);
    await page.keyboard.press('Enter', { delay: 2174 });
    console.log(5);

    messageForHumans = 'ENTER DESTINATION';

    const destino = await page.$$('.input-tag');
    await destino[1].click();
    await destino[1].type('nneuqu', { delay: 1300 });
    await page.waitForSelector('[class="item"]', { visible: 'true' });
    await page.keyboard.press('Enter', { delay: 1174 });
    
    messageForHumans = 'ENTER DEPARTURE DATE (ACTUALLY IT IS A DEMO, THE REAL DATES WILL BE FILTERED FROM CHILDREN PAGE)';

    await page.click('[readonly="true"]', { delay: 1054 });
    console.log(6);
    await page.evaluate(() => {
      const departureDate = document.getElementsByClassName('sbox5-monthgrid-datenumber');
      departureDate[43].click();
    });
    console.log(7);

    messageForHumans = 'SEARCH WITH ENTERED VARIABLES';

    await page.evaluate(() => {
      const search = document.getElementsByClassName('btn-text');
      search[1].click();
    });
    await page.waitForSelector('span.amount.price-amount', { timeout: 100000 });
    /*
    await pagina.waitForTimeout(3000).then(() =>
    pagina.screenshot({ path: 'foto1.jpg', fullPage: 'true' }));
    */
    console.log('8: succesful enter to children page');
  } catch (err) {
    console.log("Ah-Ah-Ah: you didn't say the magic word");
    console.log(`Error while entering at main page in step ${messageForHumans}`);
    console.log(err);
  }
}
