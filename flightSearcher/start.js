/* eslint-disable linebreak-style */
import runBot from "./source/central.js";

//////Instructions://///////////////////////////////////////////////////////////////
// 1. Enter the days of the range of search. They can be the same.
// 2. Enter the distance with the desired month without zeros. For example: if we are
// in February and we want to search in May, we enter distanceWithMonth = 3; and if we
// are in June and aim to February of the next year, we enter distance = 8.
// 3. Launch tool: before starting the program we must launch npm, a fundmental tool.
// Press Ctrl+Ñ to open the terminal and enter "npm ini". Press enter to launch it and
// then enter to the questions the terminal asks.
// 4. Run program: enter "node start.js" right there at the terminal.
// 5. That's all. The final results will be seen in the Excel "Search_results" in the
// "Results" folder. Note 1: for new searches it is recommended to quit the Excel of
// the previous search from where it is so the next search doesn't overwrite the file.
// Note 2: it isn't necessary to make step 3 to run the program for second time.
////////////////////////////////////////////////////////////////////////////////////

const dateOfSearch1 = 2;
const dateOfSearch2 = 15;
const distanceWithMonth = 5;







runBot(dateOfSearch1, dateOfSearch2, distanceWithMonth);
