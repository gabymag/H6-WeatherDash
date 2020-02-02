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


    //   var iconcode = a.weather[0].icon;
    //   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // var todaysDate = moment.unix(response.dt).format("MM/DD/YYYY | h:mm a");
    // var todayDate = moment();

        $("#city").html("<h1>" + response.name + " Weather Today</h1>");
        // $("#WeatherIcon").html(+ response.weather[0].icon);
       $("#WeatherIcon").attr("<img src>", response.weather[0][1]);
        $("#currentDate").html(moment().format( "MMMM Do"));
        

    //    $('<img>').attr('src',response.Poster);

        // $("#main_weather").html(json.weather[0].main);
        // $("#description_weather").html(json.weather[0].description);
        // $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        // $("#temperature").html(json.main.temp);
        // $("#pressure").html(json.main.pressure);
        // $("#humidity").html(json.main.humidity);
   








    
    });
  }


  //event handler for search for city button
  $("#queryBtn").on("click", function(event) {
    event.preventDefault();
   var inputCity = $("#searchCity").val().trim();
    searchWeather(inputCity);
  });


