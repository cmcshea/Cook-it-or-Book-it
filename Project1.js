
$(document).ready(function () {

    //adding click event listener
    $("#submit-button").on("click", function () {
        var cuisine = $("#cuisine-type").val().trim();
        // var cuisine = $(this).attr("#cuisine-type");
        console.log(cuisine); 
        //   var location = $(this).attr("#location");
        //   var cuisine = "chinese"
        //   var location = "nyc"
        //curl -X GET --header "Accept: application/json" --header "user-key: 7eab08941dfd95b142f6e1dd717a131b" "https://developers.zomato.com/api/v2.1/categories"
       
        https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=pizza&count=10

        var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q="
        var cuisineType = cuisine;
        var searchCount = "10";
        var searchURL = queryURL + cuisineType + "&count=" + searchCount;

        //prevents page from reloading on form submit

        event.preventDefault();


        //make ajax request to the API
        $.ajax({
            url: searchURL,
            method: "GET",
            // mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'user-key': '7eab08941dfd95b142f6e1dd717a131b',
            },
        })
        //function to retrieve date from Zomato api
        .done(function (response) {
            var results = response.restaurants;
            console.log(results);
            //define object attributes to pull to app
            results.forEach(function(r) {
            //define variables for each attribute
            var imageUrl = r.restaurant.featured_image;
            var name = r.restaurant.name;
            var menu = r.restaurant.menu_url;
            // var location = ;
            // var priceRange = ;

            console.log(menu)
            //website, location, price, hours

            //create image tags
            var restaurantImage = $("<img>");
            restaurantImage.attr("src", imageUrl);
            restaurantImage.attr("alt", "restaurant image");
            // console.log(restaurantImage)
            var newRow = $("<tr>").append(
                $("<th>").text(name),
                $("<td>").html('<img src="'+imageUrl+'">'),
                $("<td>").html(name),
                $("<td>").text(menu),
            );
                console.log(newRow)

            //Append the new row to the table
            $("#show_results_here").append(newRow);

            });


        //     var widget = $("<iframe>")

        //      //setting src attribute of the image to a property
        //      widget.attr("src", searchURL);

        //      widget.append(response);
            

        //           //prepending the babyDiv to the HTML page
        // $(".widget_wrap").prepend(widget);

        });


    });
});