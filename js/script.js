// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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
  

// fetching the current time for the present time.

// need to add the current time to future time
// and subtract an hour from the current time to the past time

var hour = $(".present-hour")
var getHour = dayjs().format("H:m A")
hour.text(getHour)

// Need to add the current day to the top of the calendar.
// Using dayjss
// Fun trick: instead of using a plugin to get ordinal
// You can concat "th" to the getday depending on format

var currentDay = $("#currentDay");
var getDay = dayjs().format("dddd, MMMM D")
currentDay.text(getDay + "th");

// usual variable set up

var pastEventInput = document.querySelector(".past-description");
var presentEventInput = document.querySelector(".present-description");
var futureEventInput = document.querySelector(".future-description");
var savePastButton = document.querySelector(".btn-past");
var savePresentButton = document.querySelector(".btn-present");
var saveFutureButton = document.querySelector(".btn-future");
var newPresentSlot = $("#hour10")



// past event code

// button event that executes the data store function and render

savePastButton.addEventListener("click", function(savePastEvent) {
savePastEvent.preventDefault();

pastEventData();
displayPastEvent();

});

// function for storing local data for the past event section

function pastEventData() {

  var pastEvent = {
    pastEventText: pastEventInput.value

  };

  localStorage.setItem("pastEvent", JSON.stringify(pastEvent));
}

// renders the past event in the past event text area which colorized by the gray box
// gets the data from local storage and makes it persist even on refresh

function displayPastEvent() {
  var pastEventArea = JSON.parse(localStorage.getItem("pastEvent"));
  if (pastEventArea !== null) {
    document.querySelector(".past-description").innerHTML = pastEventArea.pastEventText
  } else {
    return;
  }
}

// present event code will go here
// button event that executes the data store function and render

savePresentButton.addEventListener("click", function(savePresentEvent) {
  savePresentEvent.preventDefault();
  
  presentEventData();
  displayPresentEvent();
  
  });
  
  // function for storing local data for the present event section
  
  function presentEventData() {
  
    var presentEvent = {
      presentEventText: presentEventInput.value
  
    };
  
    localStorage.setItem("presentEvent", JSON.stringify(presentEvent));
  }
  
  // renders the past event in the present event text area which colorized by the gray box
  // gets the data from local storage and makes it persist even on refresh
  
  function displayPresentEvent() {
    var presentEventArea = JSON.parse(localStorage.getItem("presentEvent"));
    newPresentSlot.append()
    if (presentEventArea !== null) {
      document.querySelector(".present-description").innerHTML = presentEventArea.presentEventText
    } else {
      return;
    }
  }

  // future event code will go here
  // button event that executes the data store function and render

saveFutureButton.addEventListener("click", function(savefutureEvent) {
  savefutureEvent.preventDefault();
  
  futureEventData();
  displayFutureEvent();
  
  });
  
  // function for storing local data for the present event section
  
  function futureEventData() {
  
    var futureEvent = {
      futureEventText: futureEventInput.value
  
    };
  
    localStorage.setItem("futureEvent", JSON.stringify(futureEvent));
  }
  
  // renders the future event in the present event text area which colorized by the gray box
  // gets the data from local storage and makes it persist even on refresh
  
  function displayFutureEvent() {
    var futureEventArea = JSON.parse(localStorage.getItem("futureEvent"));
    if (futureEventArea !== null) {
      document.querySelector(".future-description").innerHTML = futureEventArea.futureEventText
    } else {
      return;
    }
  }
  
  // standard init function
  
  function init() {
    displayPastEvent()
    displayPresentEvent()
    displayFutureEvent()
  }
  
  init()
  