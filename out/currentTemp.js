"use strict";
// Variable on top of file the says zip code:
// axios to fetch weather 
// log the temp for tomorrow in the terminal
// API Key - d96a40a85f84cbee00348053d187bb47
const axios = require('axios');
const url = `http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=d96a40a85f84cbee00348053d187bb47&units=imperial`;
// Make a request for a user with a given ID
// axios.get(url)
//     .then(function (response: any) {
//         // handle success
//         console.log(`In Chicago it is currently ${response} farenheit`);
//     }) // response.data.main.temp
//     .catch(function (error: any) {
//         // handle error
//         console.log(error);
//     })
//     .finally(function () {
//         console.log("all done!");
//         // always executed
//     });
axios.get(url)
    .then(function response(hello) {
    // console.log(`It is currently ${hello.headers.date} and the weather is ${Math.round(hello.data.main.temp)} degrees`);
    console.log(hello);
});
// This tells axios to grab the url defined above, THEN run the function "response" 
