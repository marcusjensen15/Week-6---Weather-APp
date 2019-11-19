// import { test } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// function test2() {
//   console.log('this is the front end');
// } test2();

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec08703756715c97cd6bb29f1ded1ec8`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.otherDetail').text(`The id for the country is ${response.sys.country}.`);
      $('.otherDetail2').text(`The longitude is ${response.coord.lon} .`);
    }
  });
});
