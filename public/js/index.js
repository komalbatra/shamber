$(document).ready(function() {
  var $nameText = $("#user_name");
  var $shameText = $("#user_shame");

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
  //Event listener
  $(document).on("submit", insertShame);
});
