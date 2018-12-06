// Get references to page elements
var $nameText = $("#user_name");
var $shameText = $("#user_shame");
var $submitBtn = $("#submit_btn");
var $shameList = $("#shame-list");

var newMsg = {
  name: $nameText,
  shame: $shameText
}

// The API object contains methods for each kind of request we'll make
var API = {
  saveEntries: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/entries",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshEntries = function() {
  API.getEntries().then(function(data) {
    var $entries = data.map(function(entry) {
      var $a = $("<a>")
        .text(entry.text)
        .attr("href", "/entry/" + entry.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": entry.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    window.location.href = "http://theshamber.com/wallofshame";
  });
};
// handleNavBar is called to make nav bar function
var handleNavBar = function(event) {
  event
}
// handleFormSubmit is called whenever we submit a new name and shame
// Save the new N&S to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
//$submitBtn.on("click", handleFormSubmit);

$submitBtn.on("click", (function(event){
  event.preventDefault();
  $('#page').animate({opacity:0},400, function(){
    handleFormSubmit();
  });
}));
//$exampleList.on("click", ".delete", handleDeleteBtnClick);

var newRow = $("<tr>").append(
  $("<td>").text(newMsg.name),
  $("<td>").text(newMsg.shame),
);
