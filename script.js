var apiKey = '9016d79680b228468f8bc62eaad01307';
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + apiKey + searchCity;

var searchCity = $("#searchCity").val();

// ----------------------------

//querying the openweathermap API for weather data in the city that is being searched
function searchWeather(searchCity) {
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&APPID=" + apiKey;
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    


    
    });
  }


  //event handler for search for city button
  $("#queryBtn").on("click", function(event) {
    event.preventDefault();
   var inputCity = $("#searchCity").val().trim();
    searchWeather(inputCity);
  });


