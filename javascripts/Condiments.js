"use strict";

// Private variable to store the different meat prices
var condPrices = {
	mustard: 0.30,
	mayo: 0.40
};

//Augment the original object with another method
function addCond (cond) {
  return condPrices[cond];
}

module.exports = {addCond};
