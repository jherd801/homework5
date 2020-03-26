// HTML Nodes
let currentDay = document.getElementById("currentDay");
let m = moment();
const mString = m.toString();
const mWeekDay = m.format("dddd");
const mMonth = m.format("MMMM");
const mDay = m.format("DD");
const mYear = m.format("YYYY");
const mWeek = m.format("w");
const mGMTOffset = m.format("ZZ");
const mHour = m.format("hh");
const mMinute = m.format("mm");
const mAMPM = m.format("A");

// Parsing moment.js object
console.log(mString);
console.log(mWeekDay);
console.log(mMonth);
console.log(mDay);
console.log(mYear);
console.log(mWeek);
console.log(mGMTOffset);
console.log(mHour);
console.log(mMinute);
console.log(mAMPM);