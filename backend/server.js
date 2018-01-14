//Express
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const axios = require('axios');
let gapi;

//Files
const expressMiddleware = require('./middleware/index.js');

//Middleware
expressMiddleware(app);

// //Youtube Route
// app.get('/:playlistId', (req, res, next) => {
// 	let request = req
// const start = () => {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//       apiKey: '',
//       discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
//     }).then(() => {
//       return gapi.client.request({
//         "path": "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + request.params.playlistId
//       })
//     })
//      .then((response) => {
//       console.log("ITEMS:", response.result.items)
//       res.send();
//      }) 
//   }
//   gapi.load('client', start());
// });

// Frontend Route
	axios.get('https://apis.google.com/js/api.js')
    .then(function (response) {
      console.log('recieved gapi')
      gapi = response
    })
    .then(function(){
      app.get('/', (req, res) => {
      	res.sendFile(path.join(__dirname, '../frontend/index.html'));
      });


      app.listen(port, () => console.log('Running on 3000'));

    })
    .catch(function (error) {
      console.log(error);
    });



//Export App
module.exports = app;