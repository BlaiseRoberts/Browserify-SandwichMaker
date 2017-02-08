"use strict";

// Private variable to store the different meat prices
var breadPrices = {
	white: 3,
	wheat: 2,
	rye: 4,
	sourdough: 3
};

//Augment the original object with another method
function addBread (bread){
  return breadPrices[bread];
}

module.exports = {addBread};

