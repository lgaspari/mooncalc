var MoonCalc = require('./mooncalc');

var date = new Date();
var moonData = MoonCalc(date);

console.log(moonData);
