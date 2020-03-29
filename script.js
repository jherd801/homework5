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

// Row elements for conditional styling
let row9 = document.getElementById("row9");
let row10 = document.getElementById("row10");
let row11 = document.getElementById("row11");
let row12 = document.getElementById("row12");
let row13 = document.getElementById("row13");
let row14 = document.getElementById("row14");
let row15 = document.getElementById("row15");
let row16 = document.getElementById("row16");
let row17 = document.getElementById("row17");


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
});


// Set text area content to key & value stored in local storage
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
function color9 () {
    if (mHour === 9) {
        row9.className = "present";
    } else if (mHour < 9) {
        row9.className = "future"
    } else {
        row9.className = "past"
    }
};
color9();

function color9 () {
    if (mHour === 9) {
        row9.className = "present";
    } else if (mHour < 9) {
        row9.className = "future"
    } else {
        row9.className = "past"
    }
};
color10();

function color10 () {
    if (mHour === 10) {
        row10.className = "present";
    } else if (mHour < 10) {
        row10.className = "future"
    } else {
        row10.className = "past"
    }
};
color10();

function color11 () {
    if (mHour === 11) {
        row11.className = "present";
    } else if (mHour < 11) {
        row11.className = "future"
    } else {
        row11.className = "past"
    }
};
color11();

function color12 () {
    if (mHour === 12) {
        row12.className = "present";
    } else if (mHour < 12) {
        row12.className = "future"
    } else {
        row12.className = "past"
    }
};
color12();

function color13 () {
    if (mHour === 13) {
        row13.className = "present";
    } else if (mHour < 13) {
        row13.className = "future"
    } else {
        row13.className = "past"
    }
};
color13();

function color14 () {
    if (mHour === 14) {
        row14.className = "present";
    } else if (mHour < 14) {
        row14.className = "future"
    } else {
        row14.className = "past"
    }
};
color14();

function color15 () {
    if (mHour === 15) {
        row15.className = "present";
    } else if (mHour < 15) {
        row15.className = "future"
    } else {
        row15.className = "past"
    }
};
color15();

function color16 () {
    if (mHour === 16) {
        row16.className = "present";
    } else if (mHour < 16) {
        row16.className = "future"
    } else {
        row16.className = "past"
    }
};
color16();

function color17 () {
    if (mHour === 17) {
        row17.className = "present";
    } else if (mHour < 17) {
        row17.className = "future"
    } else {
        row17.className = "past"
    }
};
color17();



