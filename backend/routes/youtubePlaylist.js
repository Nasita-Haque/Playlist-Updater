const express = require('express');
const router = express.Router();


//Get Youtube Playlists

module.exports = () => {
router.get('/:playlistId', (req, res, next) => {
const start = (req) => {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      apiKey: 'AIzaSyDih-F6fBqIqEZmk4BRF0pQ8OLDgTjakiY',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
    }).then((req) => {
      return gapi.client.request({
        "path": "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + req.params.playlistId
      })
    })
     .then((response) => {
      console.log("ITEMS:", response.result.items)
      res.send();
     }) 
  }
  gapi.load('client', start(req));
})
  
}
