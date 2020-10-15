// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 4000;
const server = app.listen(port,listening);
function listening(){
    console.log(`Server is connected on port ${port}`);
}
// handle get
app.get("/get",(req,res)=>{
    res.send({data:50});
    console.log("web is up");

})
// handle post
app.post("/post",(req,res)=>{
    projectData=req.body;
    console.log(projectData);

})

