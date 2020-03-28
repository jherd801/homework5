// HTML Nodes
let currentDay = document.getElementById("currentDay");
let currentTime = document.getElementById("currentTime");
let m = moment();
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");
let btn17 = document.getElementById("btn17");
// Task input fields
let inp9 = document.getElementById("inp9");
let inp10
let inp11
let inp12
let inp13
let inp14
let inp15
let inp16
let inp17


// Parsing moment.js object
const mHour = m.format("hh");
const date = m.format("dddd, MMMM Do YYYY");
const time = m.format("h:mm a");


// Display current time and date on page
currentDay.innerText = "Today is " + " " + date;
currentTime.innerText = "Current time is " + " " + time;


// Add items to local storage
let task9 = localStorage.getItem("task9");

inp9.textContent = task9;

// btn9.addEventListener("click", function() {
//     let task9 = inp9.value;   
//     localStorage.setItem("task9", task9);
// });

button.addEventListener("click", function(clicked_id) {

    console.log(clicked_id);
    console.log(this);
    console.log(this.parentNode.previousSibling);
    console.log(this.parentNode.previousSibling.firstElementChild.id);
    console.log(this.parentNode.previousSibling.firstElementChild.value);
    console.log(this.id);
})

// Write function to get id from element


// Apply style to highlight if time block is in past, present, or future
// ??? if td id number < mHour then apply style .past, else if td id number = mHour then apply style .present, else apply style . future

let row9 = 9;
let row10 = 10;
let row11 = 11;
let row12 = 12;
let row13 = 13;
let row14 = 14;
let row15 = 15;
let row16 = 16;
let row17 = 17;


// Save button onClick event listeners





// Troubleshooting console logs
const mString = m.toString();
const mWeekDay = m.format("dddd");
const mMonth = m.format("MMMM");
const mDay = m.format("DD");
const mYear = m.format("YYYY");
const mWeek = m.format("w");
const mGMTOffset = m.format("ZZ");
const mMinute = m.format("mm");
const mAMPM = m.format("A");

// console.log(mString);
// console.log(mWeekDay);
// console.log(mMonth);
// console.log(mDay);
// console.log(mYear);
// console.log(mWeek);
// console.log(mGMTOffset);
// console.log(typeof mHour);
// console.log(mMinute);
// console.log(mAMPM);
// console.log(time);
// console.log(date);
// console.log(task9);