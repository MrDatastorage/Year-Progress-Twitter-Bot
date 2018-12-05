/**
 * Year Progress Twitter Bot in NodeJS
 * This Twitter Bot post the year progress in percents in a tweet.
 *
 * Author Victor Nizeyimanaa
 * Date 05-12-2018
 * License: MIT
 */

// Our Twitter library
const twitter = require('twit');

// We need to include our configuration file
const T = new twitter(require('./config.js'));

// Cron for daily post
const CronJob = require('cron').CronJob;

// Define year, and the current year etc.. math..
const days = 365;

// Current Date
const now = new Date();

// Gets the year, using local time
const start = new Date(now.getFullYear(), 0, 0);

// Diffrent
const diff = now - start;

// Calc one day
const oneDay = 1000 * 60 * 60 * 24;

// Calc current day
const currentDay = Math.floor(diff / oneDay);

// Calc current passed perc of the year
const currentPerc = currentDay / days * 100;

// Unicode Bar Styles
const bar_styles = [
	'▁▂▃▄▅▆▇█',
	'⣀⣄⣤⣦⣶⣷⣿',
	'⣀⣄⣆⣇⣧⣷⣿',
	'○◔◐◕⬤',
	'□◱◧▣■',
	'□◱▨▩■',
	'□◱▥▦■',
	'░▒▓█',
	'░█',
	'⬜⬛',
	'▱▰',
	'▭◼',
	'▯▮',
	'◯⬤',
	'⚪⚫',
];

const specialDayEmoji = {
    christmas: '🎄 🌟 ❄️ 🎁 🎅 🦌 #christmas',
    newyeareve: '🍾 🧨 🎆 #newyear'
}

// Show them in the console
console.log('Current day : ' + currentDay);
console.log('Current perc : ' + currentPerc);
console.log('Testing the bar' + make_bar(currentPerc, bar_styles[1]) + ' ' + currentPerc.toFixed(2) + '%');

// Cronjob for daily post
new CronJob('0 0 * * *', function() {
    postyearProgress(currentPerc, bar_styles);
  }, null, true, 'UTC');

// Function for Twitter post
function postyearProgress(currentPerc, bar_styles) {

    
	// Post a tweet if it is a special day like christmas, new year eve etc.... 
    var special = 1;
    var bar = make_bar(currentPerc, bar_styles[1]) + ' ' + currentPerc.toFixed(2) + '% #YearProgress 🍾';

	
	// Twitter post
	T.post('statuses/update', { status: bar}, function(err, data, response) {
        console.log(data)
      })


}

// Function for generating the amazing progress bar
function repeat(s, i) {
	var r = '';
	for (var j = 0; j < i; j++) r += s;
	return r;
}

function make_bar(perc, bar_style) {

	var p = perc;

	var d, full, m, middle, r, rest, x,
		min_delta = Number.POSITIVE_INFINITY,
		full_symbol = bar_style[bar_style.length - 1],
		n = bar_style.length - 1;
	if (p == 100)
		return repeat(full_symbol, 10);
	p = p / 100;

	for (var i = 25; i >= 1; i--) {
		x = p * i;
		full = Math.floor(x);
		rest = x - full;
		middle = Math.floor(rest * n);
		if (p != 0 && full == 0 && middle == 0) middle = 1;
		d = Math.abs(p - (full + middle / n) / i) * 100;
		if (d < min_delta) {
			min_delta = d;
			m = bar_style[middle];
			if (full == i) m = '';
			r = repeat(full_symbol, full) + m + repeat(bar_style[0], i - full - 1);
		}

		return r;
	}

}


// TODO
// Special days like christmas etc...
function specialDay() {

    var day = now.getDate();
    var month = now.getMonth();
    const specialDays = [
        [12],   // Month 1
        [4, 14], // Month 2 
        [], // Month 3
        [1], // Month 4
        [11], // Motnh 5
        [14], // Month 6
        [], // Month 7 
        [], // Month 8
        [], // Month 9
        [], // Month 10
        [], // Month 11
        [] //Month 12
    ]

    for (let i = 0; i < specialDays.length; i++) {
        for (let j = 0; j < specialDays[i].length; j++) {
            console.log(specialDays[i][j])
            switch (specialDays[i][j]) {
                 
            }
        }
    }

}

function leap_year(start) {

	year = start;
	if (year % 4 == 0) {
		return days = 366;
	} else {
		return days = 365;
	}

}
