var apiKey = '9016d79680b228468f8bc62eaad01307';
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';


// var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + apiKey + searchCity;

var searchCity = $("#searchCity").val();

// ----------------------------

//querying the openweathermap API for weather data in the city that is being searched
function searchWeather(searchCity) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&APPID=" + apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var currentWeatherImg = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";

        $("#city").html("<h1>" + response.name + " Weather Today</h1>");
        // $("#WeatherIcon").html(+ response.weather[0].icon);
        $("#WeatherIcon").attr("src", currentWeatherImg);
        $("#currentDate").html(moment().format( "MMMM Do"));
        $("#currentTempurature").html("<h3>" + 
        (Math.round ((response.main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));
        $("#currentHumidity").html("<p>Humidity: " + response.main.humidity + "%</p>");
        $("#WindSpeed").html("<p>Wind Speed: " + response.wind.speed + "</p>");
    });
  }

 


  function getForecast(searchCity) {
    //get 5 day forecast
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" 
    // + searchCity + "&APPID=" + apiKey;
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?id=" + searchCity + "&cnt=5 " + apiKey;

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&APPID=" + apiKey;

    // var queryURL= "https://api.openweathermap.org/data/2.5/forecast?id=" + Searchcity + "&APPID=9016d79680b228468f8bc62eaad01307&units=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log('5response :', response);
        // var WeatherImg = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
        $("#tempOne").html("<h3>" + 
        (Math.round ((response.list[0].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));
        $("#tempTwo").html("<h3>" + 
        (Math.round ((response.list[1].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));



        $("#humiOne").html("<p>Humidity: " + response.list[0].main.humidity + "%</p>");
        $("#humiTwo").html("<p>Humidity: " + response.list[2].main.humidity + "%</p>");


      


        }
    )};

 //event handler for search for city button
 $("#queryBtn").on("click", function(event) {
    event.preventDefault();
   var inputCity = $("#searchCity").val().trim();
    searchWeather(inputCity);
    getForecast(inputCity);

  });


 