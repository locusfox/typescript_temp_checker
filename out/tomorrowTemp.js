"use strict";
// This file gets TOMORROWS temp
const axios = require('axios').default; // axios.<method> will now provide autocomplete and parameter typings
// user input via readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let zipCode = rl.question("What zip code would you like to see tomorrow's temperature for? ", function (zipCode) {
    console.log(`Zip code chosen: ${zipCode}`);
    const api = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=d96a40a85f84cbee00348053d187bb47&units=imperial`;
    axios.get(api)
        .then(function (response) {
        // handle success
        const filteredData = response.data.list.filter(function (item) {
            return item.dt_txt.includes("21:00:00"); // this says to return the new array. It choose which to include within the new array because it looks for "21:00:00" in dt_txt.
        });
        console.log(`Tomorrow's temperature in ${response.data.city.name}, ${response.data.city.country} is ${Math.round(filteredData[0].main.temp)} degrees farenheit`);
    })
        .catch(function error(error) {
        // handle error
        console.log(error);
    })
        .then(function () {
        // always executed
    });
});
