/* Global Variables */
const dateElement = document.querySelector("#date");
const tempElement = document.querySelector("#temp");
const contentElement = document.querySelector("#content");
const button =document.querySelector("#generate");
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const key = "&appid=19b698c9f5f56f587451cc0b5b1e5440"
// const { request, get } = require("http");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// console.log(newDate);

// get api data fromopenweathermap.org 
let getApiData = async (baseUrl,zipCode,key)=>{
    const res = await fetch(baseUrl+zipCode+key);
    try{
        const data = await res.json();
        const temp = data.main.temp;
        // console.log(temp);
        return temp;
        
    }
    catch(error){
        console.log("Error", error);
    }
}
// request data from server
let update = async ()=>{
    const res = await fetch("/get");
    try{
        const data = await res.json();
        // console.log(data);
        dateElement.innerHTML = data.date;
        tempElement.innerHTML = data.temperature;
        contentElement.innerHTML = data.feeling;
    }
    catch(error){
        console.log("Error", error);
    }
}
// post data to the server
let postData = async (data={})=>{
    const post = await fetch("/post", {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },        
        body: JSON.stringify(data), 
    });
    try{
        // const data = await post.json();
        // console.log(data);
    }
    catch(error){
        console.log("Error", error);
    }
}
// postData({ardeshir:34});
// add eventlistener to Generate button
button.addEventListener("click",applyProcess);

// define applyProcess function
function applyProcess(){
    zipcodeValue = document.querySelector("#zip").value;
    feelingValue = document.querySelector("#feelings").value;
    getApiData(baseUrl,zipcodeValue,key,)
    .then(function(temp){
        postData({date:newDate,temperature:temp,feeling:feelingValue},)
        .then(update())
        })

}