 
 //Api for search parameter
 var search = "https://api.yelp.com/v3/businesses/search?q="

 //var inputTerm = ""
 //var inputLocation = ""
 var key = "Authorization: Bearer <yCkWYPtYSY8H9cVQ9b6BkhDcpejy-qJFLQcsvLVj2f9zO1Zep2UoYYh1QSn9O7n-2DF8p1tYQS2a0-ajEznSM4kTMrszw9pEW1aV5AGunnhWQXLYDjbHp2tJ_sT1XHYx>"


//onclick function for submit
$("#submit-button").on("click", function(event) {

//prevents page from reloading on form submit
event.preventDefault();

//make ajax request to the API
$.ajax({
    url: search,
    method: "GET"
}).then();

console.log(event); 
});