// Get references to page elements
var $date = $("#date");
var $country = $("#country");
var $area = $("#area");
var $location = $("#location");
var $activity = $("#activity");
var $species = $("#species");
var $type = $("#type");
var $injury = $("#injury");
var $submitBtn = $("#submit");

// The API object contains methods for save inputs
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
};

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
    alert("Your information was succesfuly added");
  });
  
  $date.val("");
  $country.val("");
  $area.val("");
  $location.val("");
  $activity.val("");
  $species.val("");
  $type.val("");
  $injury.val("");
};



// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
