
$(document).ready(function () {

//adding click event listener
    $("#buttons").on("click", function () {
      var cuisine = $(this).attr("#cuisine-type");
      var location = $(this).attr("#location");
      var apiKey = "Authorization: Bearer <yCkWYPtYSY8H9cVQ9b6BkhDcpejy-qJFLQcsvLVj2f9zO1Zep2UoYYh1QSn9O7n-2DF8p1tYQS2a0-ajEznSM4kTMrszw9pEW1aV5AGunnhWQXLYDjbHp2tJ_sT1XHYx>"
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cuisine + location + apiKey;
console.log(response)

//  //Api for search parameter
//  var search = "https://api.yelp.com/v3/businesses/search?q="

//  //var inputTerm = ""
//  //var inputLocation = ""
//  var key = "Authorization: Bearer <yCkWYPtYSY8H9cVQ9b6BkhDcpejy-qJFLQcsvLVj2f9zO1Zep2UoYYh1QSn9O7n-2DF8p1tYQS2a0-ajEznSM4kTMrszw9pEW1aV5AGunnhWQXLYDjbHp2tJ_sT1XHYx>"


// //onclick function for submit
// $("#submit-button").on("click", function(event) {

//prevents page from reloading on form submit
event.preventDefault();

//make ajax request to the API
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
  console.log(response); 
});


});
});
