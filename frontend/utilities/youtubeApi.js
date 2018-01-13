 'use strict'

import google from 'googleapis';


//Generating Authentication URL
const OAuth2 = google.auth.OAuth2;
const clientId = "140223804679-9inepuht23m5hv2vftonvck3vspo1utu.apps.googleusercontent.com";
const clientSecret = "Xk4AOkKYwFrGwrnhVH9ygiCY";
const redirectURL = "http://localhost:3000/";

const oauth2Client = new OAuth2(
  clientId,
  clientSecret,
  redirectURL
);


//Get URL permission for Youtube API
const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: "https://www.googleapis.com/auth/youtube.readonly"
});


//Retrieve Access Token
oauth2Client.getToken(code, function (err, tokens) {
  if (!err) {
  	console.log("Token:", tokens)
    oauth2Client.setCredentials(tokens);
  } else {
  	console.log("Error occurred:", err)
  }
});


//Intiitalize service client to make API calls 
var youtube = google.youtube({
	"version": "v3", 
	auth: oauth2Client 
});


//Extracting Playlist Items
const retrievePlaylistItems = (playlistID) => {
	youtube.playlistItemsList.list({
		'maxResults': "25",
		"part": "snippet, contentDetails",
		"playlistID": playlistID, 
	}, (err, playlistItems) => {
		console.log("Data:", err ? err.message : playlistItems)
	})
}

export default retrievePlaylistItems;

// const retrievePlaylistItems = (playlistID) => {
// 	const fullURL = baseURL + playlistID
// 	axios.get('fullURL')
// 	.then((data) => {
// 		console.log('This is the data:', data)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	});
// }

