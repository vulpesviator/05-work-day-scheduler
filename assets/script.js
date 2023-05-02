// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  for (var i = 9; i <= 17; i++) {
    var hourId = "hour-" + i;
    var idVal = localStorage.getItem('hour-' + i);
    var hourText = (i < 12) ? i + "AM" : (i === 12) ? "NOON" : i - 12 + "PM";
    
    var row = $("<div>").attr("id", hourId).addClass("row time-block")
    var hourVal = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hourText);
    var descriptionVal = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3);
    var createSaveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    var saveIcon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");

    row.append(hourVal, descriptionVal, createSaveBtn.append(saveIcon));
    $(".container-lg").append(row);
    
    $(`#hour-${i} .description`).val(idVal);
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var saveBtn = $(".saveBtn")

  saveBtn.on("click", function(event) {
    event.preventDefault();
    var id = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
   
    localStorage.setItem(id, description);
  })

  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function timeCheck() {
    var hour = dayjs().hour();
    var timeBlock = $('.time-block')

    timeBlock.each(function() {
      var timeblockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeblockHour < hour) {
        $(this).removeClass("present future").addClass("past");
      } else if (timeblockHour === hour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }

    })

  }

  timeCheck();

  setInterval(timeCheck, 900000);

    //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
