
$(document).ready(function () {

//adding click event listener
    $("#submit-button").on("click", function () {
    //   var cuisine = $(this).attr("#cuisine-type");
    //   var location = $(this).attr("#location");
    //   var cuisine = "chinese"
    //   var location = "nyc"
    //curl -X GET --header "Accept: application/json" --header "user-key: 7eab08941dfd95b142f6e1dd717a131b" "https://developers.zomato.com/api/v2.1/categories"

      var queryURL = "https://developers.zomato.com/api/v2.1/search";


//prevents page from reloading on form submit
event.preventDefault();



//make ajax request to the API
$.ajax({
    url: queryURL,

    headers: {
        'Accept': 'application/json',
        'user-key': '7eab08941dfd95b142f6e1dd717a131b',
 },

    method: "GET"
}).then(function(response) {
  console.log(response); 
});


});
});
