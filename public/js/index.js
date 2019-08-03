// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $date = $("#date");
var $country = $("#country");
var $area = $("#area");
var $location = $("#location");
var $activity = $("#activity");
var $species = $("#species");
var $type = $("#type");
var $injury = $("#injury");
var $sumbitAddBtn = $("#submit1");


// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
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
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $p = $("<p>")
        .text(example.date + " "+ example.county+ " "+example.area+ " "+ example.location +
        "" + example.activity+ " "+ example.species+ " "+ example.type+ " "+example.injury)
        

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($p);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    // date: $exampleText.val().trim(),
    // description: $exampleDescription.val().trim()
    date: $date.val().trim(),
    country: $country.val().trim(),
    area: $area.val().trim(),
    location: $location.val().trim(),
    activity: $activity.val().trim(),
    species: $species.val().trim(),
    type: $type.val().trim(),
    injury: $injury.val().trim(),

  };

  if (!(example.date && example.country && example.area && example.location
     && example.activity && example.species && example.type && example.injury)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });
  
  $date.val("");
  $country.val("");
  $area.val("");
  $location.val("");
  $activity.val("");
  $species.val("");
  $type.val("");
  $injury.val("");
  // $exampleText.val("");
  // $exampleDescription.val("");
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
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$sumbitAddBtn .on("click", handleFormSubmit);
