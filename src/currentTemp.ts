// This file gets the CURRENT temperature

const axios = require('axios');
const city = "Chicago";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d96a40a85f84cbee00348053d187bb47&units=imperial`;


// This tells axios to grab the url defined above, THEN run the function "response"
axios.get(url)
    .then(function response(hello: any): any {
        console.log(`It is currently ${hello.headers.date} and the weather is ${Math.round(hello.data.main.temp)} degrees`);
    })

// the function is named response and it is expecting ANYthing to return. 
// the function is to log in the console the current time by getting that blob of data from the url "called hello" and finding headers then date. 
// Then it gets the current temp by getting the blod of data "called hello" then going to data, main, and temp and rounding the temp to the nearest integer using Math.round().