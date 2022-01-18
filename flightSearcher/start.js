/* eslint-disable linebreak-style */
import runBot from "./source/central.js";

//////Instructions://///////////////////////////////////////////////////////////////
// 1. Enter the days of the range of search. They can be the same.
// 2. Enter the distance with the desired month without zeros. For example: if we are
// in February and we want to search in May, we enter distanceWithMonth = 3; if we are
// in June but we want to search in February of the next year, we enter distance = 8.
// 3. Launch tool: before starting the program we must launch npm, a fundamental tool.
// Press Ctrl+Ñ to open the terminal and enter "npm ini". Press enter to launch it and
// then enter to the questions that will appear in the terminal.
// 4. Run program: enter "node start.js" right there at the terminal.
// 5. That's all. The final results appear in the Excel "Search_results" in the
// "Results" folder. Note 1: for new searches it is recommended to get the Excel of the
// previous search out of there so the next search doesn't overwrite the file.
// Note 2: it isn't necessary to accomplish step 3 to run the program for second time.
////////////////////////////////////////////////////////////////////////////////////

const dateOfSearch1 = 2;
const dateOfSearch2 = 4;
const distanceWithMonth = 4;

// TO CHANGE CITIES: TYPE THE NEW DEPARTURE IN LINE 25 AND THE NEW ARRIVAL IN LINE 36.
// IMPORTANT: DUE TO A BUG OF THE WEBSITE, MISTYPING MAY BE REQUIRED WHILE ENTERING NEW
// CITIES REPEATING THE FIRST CHARACTER AS IT IS NOW AND WRITING ONLY HALF OF THE CITY
// NAME. THAT'S THE REASON FOR WHICH VARIABLES COULDN'T BE CREATED TO ENTER NEW CITIES.





runBot(dateOfSearch1, dateOfSearch2, distanceWithMonth);
