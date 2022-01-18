/* eslint-disable linebreak-style */

import { finalTableContent } from './excelManager.js';

export default class Flight {
  constructor(id, price, airline, date, departureTime, arrivalTime, flightDuration) {
    this.id = id;
    this.price = price;
    this.airline = airline;
    this.date = date;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.flightDuration = flightDuration;
  }

  automaticPrint() {
    console.log('');
    console.log(`Flight of date ${this.date}:`);
    console.log(`Departure from (Buenos Aires) at ${this.departureTime}`);
    console.log(`Arrival at Neuquén at ${this.arrivalTime}`);
    console.log(`Duration of flight: ${this.flightDuration}`);
    console.log(this.airline);
    console.log(`Final price per passenger: $${this.price}`);
    console.log(`Flight id: ${this.id}`);
    console.log('');
  }

  reportToExcel() {
    const rows = [this.id, 'Buenos Aires', 'Neuquen', this.date, this.departureTime,
      this.arrivalTime, this.flightDuration, this.airline, this.price];
      finalTableContent.push(rows);
  }
}
