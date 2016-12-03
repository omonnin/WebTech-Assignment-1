/**
 * Created by Olivier on 28/11/2016.
 */
$(document).ready(function() {

    $("#weatherDisplay").toggle();

    $("#searchForm").submit(function() {

        getWeatherData($("#searchInput").val());

        return false;
    });



    function getWeatherData(city) {

        $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&cnt=5&APPID=d6389ceded596cfe82e3bf24da151398", function (data) {

            console.log(data);
            var day1 = new Date(data.list[0].dt * 1000);
            var day2 = new Date(data.list[1].dt * 1000);
            var day3 = new Date(data.list[2].dt * 1000);
            var day4 = new Date(data.list[3].dt * 1000);
            var day5 = new Date(data.list[4].dt * 1000);

            var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

            $("#weatherDisplay").html(
                '<div class="col-md-1"></div><div class="col-md-2 col-sm-12 dayDisplay text-center"><h1>' + Math.round(data.list[0].temp.min) + '/' + Math.round(data.list[0].temp.max) + '&#8451</h1><p>' + data.list[0].weather[0].description + '</p><p>' + data.list[0].humidity + '% humidity</p><p>' + week[day1.getDay()] + '</p></div>' +
                '<div class="col-md-2 col-sm-12 dayDisplay text-center"><h1>' + Math.round(data.list[1].temp.min) + '/' + Math.round(data.list[1].temp.max) + '&#8451</h1><p>' + data.list[1].weather[0].description + '</p><p>' + data.list[1].humidity + '% humidity</p><p>' + week[day2.getDay()] + '</p></div>' +
                '<div class="col-md-2 col-sm-12 dayDisplay text-center"><h1>' + Math.round(data.list[2].temp.min) + '/' + Math.round(data.list[2].temp.max) + '&#8451</h1><p>' + data.list[2].weather[0].description + '</p><p>' + data.list[2].humidity + '% humidity</p><p>' + week[day3.getDay()] + '</p></div>' +
                '<div class="col-md-2 col-sm-12 dayDisplay text-center"><h1>' + Math.round(data.list[3].temp.min) + '/' + Math.round(data.list[3].temp.max) + '&#8451</h1><p>' + data.list[3].weather[0].description + '</p><p>' + data.list[3].humidity + '% humidity</p><p>' + week[day4.getDay()] + '</p></div>' +
                '<div class="col-md-2 col-sm-12 dayDisplay text-center"><h1>' + Math.round(data.list[4].temp.min) + '/' + Math.round(data.list[4].temp.max) + '&#8451</h1><p>' + data.list[4].weather[0].description + '</p><p>' + data.list[4].humidity + '% humidity</p><p>' + week[day5.getDay()] + '</p></div><div class="col-md-1"></div>'
            );
            if($("#weatherDisplay").is(":hidden")){
                $("#weatherDisplay").toggle(400);
            }
        });
    }
});