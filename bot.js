/**
* Year Process Twitter Bot in NodeJS
* This Twitter Bot post the year progress in percents in a tweet.
*
* Author Victor Nizeyimanaa
* Date 05-12-2018
* License: MIT
*/

// Our Twitter library
var twitter = require('twit');

// We need to include our configuration file
var T = new twitter(require('./config.js'));

// Define year, and the current year etc.. math..
var days = 365;

// Current Date
var now = new Date();

// Gets the year, using local time
var start = new Date(now.getFullYear(), 0, 0);

// Diffrent
var diff = now - start;

// Calc one day
var oneDay = 1000 * 60 * 60 * 24;

// Calc current day
var currentDay = Math.floor(diff / oneDay);

// Calc current passed perc of the year
var currentPerc = currentDay / days * 100;

// Show them in the console
console.log('Current day : ' + currentDay);
console.log('Current perc : ' + currentPerc);


// Function
function postyearProcess(){


    
}


// etc...