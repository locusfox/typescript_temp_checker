"use strict";
// This file gets the CURRENT temperature
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const axios = require('axios');
// const city = "Chicago";
let city = rl.question("What city?", (answer) => {
});
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d96a40a85f84cbee00348053d187bb47&units=imperial`;
// This tells axios to grab the url defined above, THEN run the function "response"
axios.get(url)
    .then(function response(hello) {
    console.log(`It is currently ${hello.headers.date} and the weather is ${Math.round(hello.data.main.temp)} degrees`);
});
// the function is named response and it is expecting ANYthing to return. 
// the function is to log in the console the current time by getting that blob of data from the url "called hello" and finding headers then date. 
// Then it gets the current temp by getting the blod of data "called hello" then going to data, main, and temp and rounding the temp to the nearest integer using Math.round().
