// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// location variables
var currentDayDisplayOnPage = document.querySelector("#currentDay");
// jQuery Selectors. (n.d.). W3Schools. Retrieved March 18, 2023, from https://www.w3schools.com/jquery/jquery_selectors.asp
// var AM9Div = $("#hour-9");
// var AM10Div = $("#hour-10");
// var AM11Div = $("#hour-11");
// var PM12Div = $("#hour-12");
// var PM01Div = $("#hour-13");
// var PM02Div = $("#hour-14");
// var PM03Div = $("#hour-15");
// var PM04Div = $("#hour-16");
// var PM05Div = $("#hour-17");

var AM9Div = document.querySelector("#hour-9");
var AM10Div = document.querySelector("#hour-10");
var AM11Div = document.querySelector("#hour-11");
var PM12Div = document.querySelector("#hour-12");
var PM01Div = document.querySelector("#hour-13");
var PM02Div = document.querySelector("#hour-14");
var PM03Div = document.querySelector("#hour-15");
var PM04Div = document.querySelector("#hour-16");
var PM05Div = document.querySelector("#hour-17");

var timeOnCalArray = [
  {div: AM9Div,
  value: 9},
  {div: AM10Div,
  value: 10}, 
  {div: AM11Div,
  value: 11},
  {div: PM12Div,
  value: 12},
  {div: PM01Div,
  value: 13},
  {div: PM02Div,
  value: 14},
  {div: PM03Div,
  value: 15},
  {div: PM04Div,
  value: 16},
  {div: PM05Div,
  value: 17}
];

// ----------DATE----------
// grab's today's date
var todaysDate = dayjs().format("dddd MMMM D YYYY");
var todaysDay = dayjs().format("dddd");
var todaysMonthAndDate = dayjs().format("MMMM D");
var todaysYear = dayjs().format("YYYY");

var pullCurrentDate = todaysDay + ", " + todaysMonthAndDate + ", " + todaysYear;
console.log(pullCurrentDate);

//inject today's date onto the top of the app
currentDayDisplayOnPage.innerHTML = pullCurrentDate;

// ----------TIME----------
// grab current time
var currentHour = dayjs().format("H");
console.log(currentHour);

for (i = 0; i < timeOnCalArray.length; i++){
  if (timeOnCalArray[i].value == currentHour){
    timeOnCalArray[i].div.classList.add("present");
    timeOnCalArray[i].div.classList.remove("past");
    timeOnCalArray[i].div.classList.remove("future");
  } else if (timeOnCalArray[i].value < currentHour){
    timeOnCalArray[i].div.classList.add("past");
    timeOnCalArray[i].div.classList.remove("present");
    timeOnCalArray[i].div.classList.remove("future");
  } else if (timeOnCalArray[i].value > currentHour){
    timeOnCalArray[i].div.classList.add("future");
    timeOnCalArray[i].div.classList.remove("present");
    timeOnCalArray[i].div.classList.remove("past");
  }  
}

var now = dayjs();
console.log(now);

// gets date of current month
dayjs().date();

// --------------------FIRST ATTEMPT--------------------
// for (i = 0; i < timeOnCalArray.length; i++){
//   if (timeOnCalArray[i].value == currentHour){
//     timeOnCalArray[i].div.classList.add("present");
//     timeOnCalArray[i].div.classList.remove("past");
//     timeOnCalArray[i].div.classList.remove("future");
//   } else if (timeOnCalArray[i].value < currentHour){
//     timeOnCalArray[i].div.classList.add("past");
//     timeOnCalArray[i].div.classList.remove("present");
//     timeOnCalArray[i].div.classList.remove("future");
//   } else if (timeOnCalArray[i].value > currentHour){
//     timeOnCalArray[i].div.classList.add("future");
//     timeOnCalArray[i].div.classList.remove("present");
//     timeOnCalArray[i].div.classList.remove("past");
//   }  
// }

// compare current time to timeblock time
// var AM9 = 9;
// if (AM9 == currentHour){
//   AM9Div.classList.add("present");
//   AM9Div.classList.remove("past");
//   AM9Div.classList.remove("future");
// } else if (AM9 < currentHour){
//   AM9Div.classList.add("past");
//   AM9Div.classList.remove("present");
//   AM9Div.classList.remove("future");
// } else if (AM9 > currentHour){
//   AM9Div.classList.add("future");
//   AM9Div.classList.remove("present");
//   AM9Div.classList.remove("past");
// }

// var AM10 = 10;
// if (AM10 == currentHour){
//   AM10Div.classList.add("present");
//   AM10Div.classList.remove("past");
//   AM10Div.classList.remove("future");
// } else if (AM10 < currentHour){
//   AM10Div.classList.add("past");
//   AM10Div.classList.remove("present");
//   AM10Div.classList.remove("future");
// } else if (AM10 > currentHour){
//   AM10Div.classList.add("future");
//   AM10Div.classList.remove("present");
//   AM10Div.classList.remove("past");
// }

// var AM11 = 11;
// if (AM11 == currentHour){
//   AM11Div.classList.add("present");
//   AM11Div.classList.remove("past");
//   AM11Div.classList.remove("future");
// } else if (AM11 < currentHour){
//   AM11Div.classList.add("past");
//   AM11Div.classList.remove("present");
//   AM11Div.classList.remove("future");
// } else if (AM11 > currentHour){
//   AM11Div.classList.add("future");
//   AM11Div.classList.remove("present");
//   AM11Div.classList.remove("past");
// }

// var PM12 = 12;
// if (PM12 == currentHour){
//   PM12Div.classList.add("present");
//   PM12Div.classList.remove("past");
//   PM12Div.classList.remove("future");
// } else if (PM12 < currentHour){
//   PM12Div.classList.add("past");
//   PM12Div.classList.remove("present");
//   PM12Div.classList.remove("future");
// } else if (PM12 > currentHour){
//   PM12Div.classList.add("future");
//   PM12Div.classList.remove("present");
//   PM12Div.classList.remove("past");
// }

// var PM01 = 13;
// if (PM01 == currentHour){
//   PM01Div.classList.add("present");
//   PM01Div.classList.remove("past");
//   PM01Div.classList.remove("future");
// } else if (PM01 < currentHour){
//   PM01Div.classList.add("past");
//   PM01Div.classList.remove("present");
//   PM01Div.classList.remove("future");
// } else if (PM01 > currentHour){
//   PM01Div.classList.add("future");
//   PM01Div.classList.remove("present");
//   PM01Div.classList.remove("past");
// }

// var PM02 = 14;
// if (PM02 == currentHour){
//   PM02Div.classList.add("present");
//   PM02Div.classList.remove("past");
//   PM02Div.classList.remove("future");
// } else if (PM02 < currentHour){
//   PM02Div.classList.add("past");
//   PM02Div.classList.remove("present");
//   PM02Div.classList.remove("future");
// } else if (PM02 > currentHour){
//   PM02Div.classList.add("future");
//   PM02Div.classList.remove("present");
//   PM02Div.classList.remove("past");
// }

// var PM03 = 15;
// if (PM03 == currentHour){
//   PM03Div.classList.add("present");
//   PM03Div.classList.remove("past");
//   PM03Div.classList.remove("future");
// } else if (PM03 < currentHour){
//   PM03Div.classList.add("past");
//   PM03Div.classList.remove("present");
//   PM03Div.classList.remove("future");
// } else if (PM03 > currentHour){
//   PM03Div.classList.add("future");
//   PM03Div.classList.remove("present");
//   PM03Div.classList.remove("past");
// }

// var PM04 = 16;
// if (PM04 == currentHour){
//   PM04Div.classList.add("present");
//   PM04Div.classList.remove("past");
//   PM04Div.classList.remove("future");
// } else if (PM04 < currentHour){
//   PM04Div.classList.add("past");
//   PM04Div.classList.remove("present");
//   PM04Div.classList.remove("future");
// } else if (PM04 > currentHour){
//   PM04Div.classList.add("future");
//   PM04Div.classList.remove("present");
//   PM04Div.classList.remove("past");
// }

// var PM05 = 17;
// if (PM05 == currentHour){
//   PM05Div.classList.add("present");
//   PM05Div.classList.remove("past");
//   PM05Div.classList.remove("future");
// } else if (PM05 < currentHour){
//   PM05Div.classList.add("past");
//   PM05Div.classList.remove("present");
//   PM05Div.classList.remove("future");
// } else if (PM05 > currentHour){
//   PM05Div.classList.add("future");
//   PM05Div.classList.remove("present");
//   PM05Div.classList.remove("past");
// }



// var currentMinute = dayjs().format("m");
// console.log(currentMinute);