/* eslint-disable linebreak-style */

export default class OneTypePokemon {
  constructor(data, moreDetailedData, locationInColumn) {
    this.htmlLocation = locationInColumn;
    this.name = data.results[locationInColumn].name;
    this.height = moreDetailedData.height;
    this.weight = moreDetailedData.weight;
    this.type = moreDetailedData.types[0].type.name;
  }

  introducePokemon() {
    const columnFourList = document.querySelectorAll('td[id^="col4"]');
    columnFourList.forEach((element) => element.innerHTML = '');
    const popUpMessageLocation = columnFourList[this.htmlLocation];
    const popUpMessageCell = $(popUpMessageLocation)[0];
    popUpMessageCell.innerHTML = `This is ${this.name}. Their height is ${this.height}, they have a weight of ${this.weight}, and they belong to the ${this.type} type.`;
  }
}
