/* eslint-disable linebreak-style */

export default async function enterNewOutwardDate(page, date, desiredMonthID) {
  
    console.log('2.1');
    await page.$$eval(
      'em.btn-text',
      (buttons) => buttons.map((button) => {
        if (button.textContent === 'Modificar') { // NOTE: Modificar = Modify
          button.click();
        }
      }),
    );
  
    console.log('2.2');
    await page.evaluate(() => {
      const toEnterDeparture = document.querySelectorAll('[placeholder="Ida"]');
      toEnterDeparture[0].click();
    });
  
    try {
      const clickInNewDate = await page.waitForTimeout(3010).then(() => {
        page.evaluate(
          (date, desiredMonthID) => {
            const allTheDates = document.querySelectorAll('span._dpmg2--date-number');
            const searchedDates = [];
            allTheDates.forEach((element) => {
              if (element.textContent === date) {
                searchedDates.push(element);
              }
            });
            searchedDates[desiredMonthID].click();
          },
          date,
          desiredMonthID,
        );
      });
    } catch (err) {
      console.log("Ah-Ah-Ah: you didn't say the magic word");
      console.log('Clicking error in new page');
      console.log(err);
      return await clickInNewDate;
    }
  
    await page.waitForTimeout(1000).then(() => {
      page.$$eval(
        'em.btn-text',
        (buttons) => buttons.map((button) => {
          if (button.textContent === 'Buscar') {
            button.click();
          }
        }),
      );
    });
  }
