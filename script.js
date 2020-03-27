// HTML Nodes
let currentDay = document.getElementById("currentDay");
let m = moment();

// Parsing moment.js object
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
const dateAndTime = m.format("dddd, MMMM Do YYYY, h:mm:ss a");



// Display current time and date on page
currentDay.innerText = "Today is " + " " + dateAndTime;

9
10
11
12
13
14
15
16
17

btn9 = document.getElement
btn10 = document.getElementsByTagName("td")
btn11
btn12
btn13
btn14
btn15
btn16
btn17

inp9
inp10
inp11
inp12
inp13
inp14
inp15
inp16
inp17

console.log(btn9);
console.log(btn10);
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
console.log(dateAndTime);