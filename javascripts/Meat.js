"use strict";


  
var meatPrices = {
	turkey: 3.00,
	ham: 2.00,
	chicken: 4.00,
	"no-meat": 0
};

//Augment the original object with another method
function addMeat(meat) {
  return meatPrices[meat];
}

module.exports = {addMeat};
