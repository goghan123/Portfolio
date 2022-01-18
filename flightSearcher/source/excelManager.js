/* eslint-disable linebreak-style */

import xlsx, { write } from 'xlsx';
import path from 'path';

export let finalTableContent = [];

export default function excelManager(rows) {
  const newBook = xlsx.utils.book_new();
  const dataAboutPage = [
    [
      'id',
      'origin',
      'destination',
      'date',
      'departure_time',
      'arrival_time',
      'flight_duration',
      'airline',
      'final_price_per_passenger',
    ],
    ...rows,
  ];
  const newPage = xlsx.utils.aoa_to_sheet(dataAboutPage);
  xlsx.utils.book_append_sheet(newBook, newPage, 'Results');
  xlsx.writeFile(newBook, path.resolve('./Results/Search_results.xlsx'));
}
