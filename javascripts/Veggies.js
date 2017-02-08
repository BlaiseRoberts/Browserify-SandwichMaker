"use strict";


// Private variable to store the different meat prices
var veggiePrices = {
	lettuce: 0.50,
	tomato: 0.50,
	onion: 0.25
};

//Augment the original object with another method
function addVeggies(veggie) {
  return veggiePrices[veggie];
}


module.exports = {addVeggies};

