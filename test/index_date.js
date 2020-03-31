require('../utils/date_utils');

// var d = Date.parseDate("9/5/05", "n/j/y");
// var d = Date.parse("2005-10-05 12:13 am", "Y-m-d g:i a");
console.log("3/30/20".toDate('m/d/Y'));
console.log("1/15/20".toDate('m/d/Y').getTime());
// console.log(new Date(1000, 2, 30));
// console.log(d);
console.log("1/15/100".toDate('m/d/Y').getTime() < "3/30/20".toDate('m/d/Y').getTime());