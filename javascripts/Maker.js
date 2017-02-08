"use strict";

// Private variable to store the price
var totalPrice = 0;
let maker = {};
// Return the public interface that other code can interact with

maker.addTopping = function(toppingPrice) {
  totalPrice += toppingPrice;
};

maker.removeTopping = function(toppingPrice) {
  totalPrice -= toppingPrice;
};

maker.showTotal = function() {
	return totalPrice.toFixed(2);
};

module.exports = maker;