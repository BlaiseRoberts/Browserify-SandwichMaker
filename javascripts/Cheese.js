"use strict";


// Private variable to store the different meat prices
var cheesePrices = {
	american: 1.00,
	swiss: 1.00,
	cheddar: 1.00
};

//Augment the original object with another method
function addCheese(cheese){
  return cheesePrices[cheese];
}


module.exports = {addCheese};



