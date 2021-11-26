// This file gets TOMORROWS temp

const axios = require('axios').default; // axios.<method> will now provide autocomplete and parameter typings

const zipCode = 60552;
const api = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&cnt=1&appid=d96a40a85f84cbee00348053d187bb47&units=imperial`;


axios.get(api)
  .then(function weather(response: any): any {
    // handle success
    // console.log(response.data.list[0].main.temp);
    console.log(`Tomorrow's temperature in ${response.data.city.name}, ${response.data.city.country} is ${Math.round(response.data.list[0].main.temp)} degrees farenheit`)
  })
  .catch(function error(error: any): any {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });