/* Global Variables */

// const { request, get } = require("http");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// get api data fromopenweathermap.org 
let getApiData = async ()=>{
    const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=montreal&appid=");
    try{
        const data = await res.json();
        console.log(data.main.temp);
    }
    catch(error){
        console.log("error", error);
    }
}
// request data from server
let getRequest = async ()=>{
    const res = await fetch("/get");
    try{
        const data = await res.json();
        console.log(data.data);
    }
    catch(error){
        console.log("error merror", error);
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
        const data = await post.json();
        console.log(data);
    }
    catch(error){
        console.log("error", error);
    }
}
postData({ardeshir:34});