"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", function(data){
        $('#fortune-text').html(data);
        // console.log(data);
     }
        );
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    // var zipcodeInput = {
    //     "forcast": $("#zipcode-field").val()
    // };

    $.get(url, function(data){
        console.log(data['forecast']);
        $("#weather-info").html(data['forecast']);
        // $("#weather-info").html(data.forecast); could also be done this way
    })
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    var formInput = {
        
    }
    $.post("/order-melons", data)
}

$("#order-form").on('submit', orderMelons);


