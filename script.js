var apiKey = '9016d79680b228468f8bc62eaad01307';
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var locationQuery = 'Dallas,US';
$(document).ready(function () {
    $.ajax({
        url: baseUrl + locationQuery + '&appId=' + apiKey,
        method: 'GET'
    }).then(function (results) {
        console.log(results);
    });
});