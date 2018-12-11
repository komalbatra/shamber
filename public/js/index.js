$(document).ready(function() {
  var $nameText = $("#user_name");
  var $shameText = $("#user_shame");
  var $shameContainer = $("#shame-list"); //(Mary add)
  var shames; //(Mary add)

  getShames();

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
  //Mary's Code
  function getShames() {
    $.get("/api/shames", function(data) {
      console.log("Shames", data);
      shames = data;
      if (!shames || !shames.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }
  // Function for appending shames inside shame container (MARY add)
  function initializeRows() {
    $shameContainer.empty();
    var shamesToAdd = [];
    for (var i = 0; i < shames.length; i++) {
      console.log(shamesToAdd);
      //shamesToAdd.push(createNewRow(shames[i]));
    }
    $shameContainer.append(shamesToAdd);
  }
  // This function displays a message when there are no shames (MARY add)
  function displayEmpty() {
    $shameContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      "No shames yet for this category, navigate <a href='/'>here</a> in order to create a new shame."
    );
    $shameContainer.append(messageH2);
  }
  //__________________
  //Event listener
  $(document).on("submit", insertShame);
});
