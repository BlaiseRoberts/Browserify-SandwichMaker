"use strict";

//Globals
var meatPrice = 0;
var breadPrice = 0;
let TEMP;

//Browserify requires

let Meat = require('./Meat.js');
let Bread = require('./Bread.js');
let Cheese = require('./Cheese.js');
let Condiments = require('./Condiments.js');
let Veggies = require('./Veggies.js');
let Maker = require('./Maker.js');



//Selectors
$("#meat-chooser").change( () => {
  var selectedMeat = $("#meat-chooser option:selected").val();
  meatPrice = Meat.addMeat(selectedMeat);
});

$("#bread-chooser").change( () => {
  var selectedBread = $("#bread-chooser option:selected").val();  
  breadPrice = Bread.addBread(selectedBread);
});



//Cheese Checkboxes
$("input[value='american']").click( () => {
	var cheesePrice = Cheese.addCheese($("input[value='american']").val());
	 TEMP = $("input[value='american']").is(":checked") ? Maker.addTopping(cheesePrice) : Maker.removeTopping(cheesePrice);
});
$("input[value='swiss']").click( () => {
	var cheesePrice = Cheese.addCheese($("input[value='swiss']").val());
	TEMP = $("input[value='swiss']").is(":checked") ? Maker.addTopping(cheesePrice) : Maker.removeTopping(cheesePrice);
});
$("input[value='cheddar']").click( () => {
	var cheesePrice = Cheese.addCheese($("input[value='cheddar']").val());
	TEMP = $("input[value='cheddar']").is(":checked") ? Maker.addTopping(cheesePrice) : Maker.removeTopping(cheesePrice);
});


//Condiments Checkboxes
$("input[value='mayo']").click( () => {
	var condPrice = Condiments.addCond($("input[value='mayo']").val());
	TEMP = $("input[value='mayo']").is(":checked") ? Maker.addTopping(condPrice) : Maker.removeTopping(condPrice);
});
$("input[value='mustard']").click( () => {
	var condPrice = Condiments.addCond($("input[value='mustard']").val());
	TEMP = $("input[value='mustard']").is(":checked") ? Maker.addTopping(condPrice) : Maker.removeTopping(condPrice);
});


//Veggies Checkboxes
$("input[value='lettuce']").click( () => {
	var veggiePrice = Veggies.addVeggies($("input[value='lettuce']").val());
	TEMP = $("input[value='lettuce']").is(":checked") ? Maker.addTopping(veggiePrice) : Maker.removeTopping(veggiePrice);
});
$("input[value='tomato']").click( () => {
	var veggiePrice = Veggies.addVeggies($("input[value='tomato']").val());
	TEMP = $("input[value='tomato']").is(":checked") ? Maker.addTopping(veggiePrice) :	Maker.removeTopping(veggiePrice);
});
$("input[value='onion']").click( () => {
	var veggiePrice = Veggies.addVeggies($("input[value='onion']").val());
	TEMP = $("input[value='onion']").is(":checked") ? Maker.addTopping(veggiePrice) : Maker.removeTopping(veggiePrice);
});


//Print Sandwhich Total
$("button").click( () => {
	Maker.addTopping(meatPrice);
	Maker.addTopping(breadPrice);
	$("#total-price").html(`<h3>Your total price will be $${Maker.showTotal()}</h3>`);
	Maker.removeTopping(meatPrice);
	Maker.removeTopping(breadPrice);	
});