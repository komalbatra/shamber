// Added in some code that may be useful for index.js file.  See all Mary adds below
$(document).ready(function() {
  //DECLARING VARIABLES
  var $nameText = $("#user_name");
  var $shameText = $("#user_shame");
  var $shameContainer = $("#shame-list");
  var shames;

  //ALL FUNCTIONS
  //_________________________________
  //Function for capturing user input
  function insertShame(event) {
    event.preventDefault();
    var shameInput = {
      name: $nameText.val().trim(),
      shame: $shameText.val().trim(),
      score: 1
    };
    //validate if input is null
    if (
      $nameText.val().trim().length < 1 ||
      $shameText.val().trim().length < 1
    ) {
      alert("You must submit both name and shame!");
      return;
    } else {
      //post user input to database
      $.post("/api/shames", shameInput);
      //clear form
      $("#user_name").val("");
      $("#user_shame").val("");
      console.log(shameInput);
      //alert that the form was submitted
      alert(
        "Your Shame was captured sucessfully. You suck for posting your shame!!"
      );
      return;
    }
  }

  // Function for grabbing shames from database and updating wall
  function getShames() {
    $.get("/api/shames", function(data) {
      console.log("Shames", data);
      shames = data;
      if (shames.length < 1) {
        alert("This sucks! No shames have been shared yet!");
      } else {
        initializeRows();
      }
    });
  }

  // Function for appending shames inside shame container
  function initializeRows() {
    $shameContainer.empty();
    for (i = 0; i < shames.length; i++) {
      var messageH2 = $("<h5>");
      messageH2.css({
        "text-align": "center",
        "margin-top": "30px",
        color: "white"
      });
      messageH2.html(
        "Name: " +
          shames[i].name +
          "<br>" +
          "Shame: " +
          shames[i].shame +
          "<br>" +
          "---->Posted On:" +
          shames[i].createdAt //Can anyone fix this date format without moment.js?
      );
      $shameContainer.append(messageH2);
    }
  }
  //Event listener
  $(document).on("submit", insertShame);

  getShames();
});
