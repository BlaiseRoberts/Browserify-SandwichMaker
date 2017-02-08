"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = ((maker) => {

  // Private variable to store the different meat prices
  var meatPrices = {
  	turkey: 3.00,
  	ham: 2.00,
  	chicken: 4.00,
  	"no-meat": 0
  };

  //Augment the original object with another method
  maker.addMeat = (meat) => {
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);