var apiKey = '9016d79680b228468f8bc62eaad01307';
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';


// var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + apiKey + searchCity;

var searchCity = $("#searchCity").val();

//querying the openweathermap API for weather data in the city that is being searched
function searchWeather(searchCity) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&APPID=" + apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var currentWeatherImg = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
//taking the response and inputting it into the HTML elements
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

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&APPID=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log('5response :', response);
        // Dates for 5 day forecast cards
        $("#DayOne").html(moment().add(1,'day').format( "MMMM Do"));
        $("#DayTwo").html(moment().add(2,'day').format( "MMMM Do"));
        $("#DayThree").html(moment().add(3,'day').format( "MMMM Do"));
        $("#DayFour").html(moment().add(4,'day').format( "MMMM Do"));
        $("#DayFive").html(moment().add(5,'day').format( "MMMM Do"));
        



        //making variables for the weather icons
        var WeatherImg = "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png";
        var WeatherImgTwo = "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png";
        var WeatherImgThree = "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png";
        var WeatherImgFour = "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png";
        var WeatherImgFive = "https://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + "@2x.png";

        //FIVE DAY FORECAST WEATHER ICON INTO THE HTML
        $("#WeatherIconOne").attr("src", WeatherImg);
        $("#WeatherIconTwo").attr("src", WeatherImgTwo);
        $("#WeatherIconThree").attr("src", WeatherImgThree);
        $("#WeatherIconFour").attr("src", WeatherImgFour);
        $("#WeatherIconFive").attr("src", WeatherImgFive);


        ///FIVE DAY FORECAST TEMPERATURES
        $("#tempOne").html("<h3>" + 
        (Math.round ((response.list[8].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));
        $("#tempTwo").html("<h3>" + 
        (Math.round ((response.list[16].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));
        $("#tempThree").html("<h3>" + 
        (Math.round ((response.list[24].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));
        $("#tempFour").html("<h3>" + 
        (Math.round ((response.list[32].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));
        $("#tempFive").html("<h3>" + 
        (Math.round ((response.list[39].main.temp -273.15) * 1.80 +32 )+ " &degF</h3>"));


        //FIVE DAY FORECAST HUMIDITY
        $("#humiOne").html("<p>Humidity: " + response.list[8].main.humidity + "%</p>");
        $("#humiTwo").html("<p>Humidity: " + response.list[16].main.humidity + "%</p>");
        $("#humiThree").html("<p>Humidity: " + response.list[24].main.humidity + "%</p>");
        $("#humiFour").html("<p>Humidity: " + response.list[32].main.humidity + "%</p>");
        $("#humiFive").html("<p>Humidity: " + response.list[39].main.humidity + "%</p>");
        }
    )};




 //event handler for search for city button for both the one day and 5 day forecast
 $("#queryBtn").on("click", function(event) {
    event.preventDefault();
   var inputCity = $("#searchCity").val().trim();
    searchWeather(inputCity);
    getForecast(inputCity);

  });


 