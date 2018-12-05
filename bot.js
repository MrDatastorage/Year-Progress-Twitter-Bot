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
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var currentDay = Math.floor(diff / oneDay);
var currentPerc = currentDay / days * 100;


console.log('Current day : ' + currentDay);
console.log('Current perc : ' + currentPerc);


// Function
function postyearProcess(){


    
}


// etc...