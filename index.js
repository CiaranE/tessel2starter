'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');

// Turn one of the LEDs on to start.
tessel.led[0].on();
tessel.led[2].on();

// Blink!
setInterval(() => {
  tessel.led[0].toggle();
  tessel.led[1].toggle();
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 2000);

console.log("Rainbow madness!!! (Press CTRL + C to stop)");
