// HTML Nodes
let currentDay = document.getElementById("currentDay");
let currentTime = document.getElementById("currentTime");
let m = moment();
let btn9 = $("#btn9");
let btn10 = $("#btn10");
let btn11 = $("#btn11");
let btn12 = $("#btn12");
let btn13 = $("#btn13");
let btn14 = $("#btn14");
let btn15 = $("#btn15");
let btn16 = $("#btn16");
let btn17 = $("#btn17");

// Task input fields
let inp9 = document.getElementById("inp9");
let inp10 = document.getElementById("inp10");
let inp11 = document.getElementById("inp11");
let inp12 = document.getElementById("inp12");
let inp13 = document.getElementById("inp13");
let inp14 = document.getElementById("inp14");
let inp15 = document.getElementById("inp15");
let inp16 = document.getElementById("inp16");
let inp17 = document.getElementById("inp17");

// let buttonClickedID = this.parentNode.previousSibling.firstElementChild.id
// Parsing moment.js object
const mHour = parseInt(m.format("hh"));
const date = m.format("dddd, MMMM Do YYYY");
const time = m.format("h:mm a");


// Display current time and date on page
currentDay.innerText = "Today is " + " " + date;
currentTime.innerText = "Current time is " + " " + time;


// Function to add hour specific text area inputs to local storage
$("button").on("click", function() {
    localStorage.setItem(this.parentNode.previousSibling.firstElementChild.id, this.parentNode.previousSibling.firstElementChild.value);

    // console.log(this);
    // console.log(this.parentNode.previousSibling);
    // console.log(this.parentNode.previousSibling.firstElementChild.id);
    // console.log(this.parentNode.previousSibling.firstElementChild.value);
    // console.log(this.id);
});


// Set text area content to key value stored in local storage
let task9 = localStorage.getItem("inp9");
inp9.textContent = task9;
let task10 = localStorage.getItem("inp10");
inp10.textContent = task10;
let task11 = localStorage.getItem("inp11");
inp11.textContent = task11;
let task12 = localStorage.getItem("inp12");
inp12.textContent = task12;
let task13 = localStorage.getItem("inp13");
inp13.textContent = task13;
let task14 = localStorage.getItem("inp14");
inp14.textContent = task14;
let task15 = localStorage.getItem("inp15");
inp15.textContent = task15;
let task16 = localStorage.getItem("inp16");
inp16.textContent = task16;
let task17 = localStorage.getItem("inp17");
inp17.textContent = task17;

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
// const mString = m.toString();
// const mWeekDay = m.format("dddd");
// const mMonth = m.format("MMMM");
// const mDay = m.format("DD");
// const mYear = m.format("YYYY");
// const mWeek = m.format("w");
// const mGMTOffset = m.format("ZZ");
// const mMinute = m.format("mm");
// const mAMPM = m.format("A");

// console.log(mString);
// console.log(mWeekDay);
// console.log(mMonth);
// console.log(mDay);
// console.log(mYear);
// console.log(mWeek);
// console.log(mGMTOffset);
console.log(typeof mHour);
// console.log(mMinute);
// console.log(mAMPM);
// console.log(time);
// console.log(date);
// console.log(task9);

// Console logs to find clicked button id and associated text area


// let task9 = inp9.value;   
// localStorage.setItem("task9", task9);
// let task10 = inp10.value;   
// localStorage.setItem("task10", task10);
// let task11 = inp11.value;   
// localStorage.setItem("task11", task11);
// let task12 = inp12.value;   
// localStorage.setItem("task12", task12);
// let task13 = inp13.value;   
// localStorage.setItem("task13", task13);
// let task14 = inp14.value;   
// localStorage.setItem("task14", task14);
// let task15 = inp15.value;   
// localStorage.setItem("task15", task15);
// let task16 = inp16.value;   
// localStorage.setItem("task16", task16);
// let task17 = inp17.value;   
// localStorage.setItem("task17", task17);
