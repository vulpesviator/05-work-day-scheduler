// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // This for loop creates a div row for each time block in a normal workday and then populates the description area with any saved events in Local Storage  
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
  
  var saveBtn = $(".saveBtn")
  // This function listens to when the save button on a time block is clicked and saved the input to local storage with the hour id
  saveBtn.on("click", function(event) {
    event.preventDefault();
    var id = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
   
    localStorage.setItem(id, description);
  })

  // This function checks the current hour and adds the appropriate class to a timeblock for whether it is in past, the present hour, or in the future
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
  // Interval checks the time every 15 minutes
  setInterval(timeCheck, 900000);

  // Displays the current day and date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
