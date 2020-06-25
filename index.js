/*
  Status : discontinued
  Author : Pranjal Bareth
  Date 	 : 26 JUNE 2020
  Time   : 02:22 AM
*/
const request = require('request');
con1st argv = require ('yargs').argv;
const apiKey = 'de01d72d79ed41a14adefd8069ae91f5';
//...
//...
app.post('/', function (req, res) {
  let city = argv.c || 'bilaspur';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})