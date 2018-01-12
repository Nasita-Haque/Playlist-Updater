 
import google from 'googleapis';
import googleAuth from 'google-auth-library';
import ''

const playlistId, nextPageToken, prevPageToken;

const apiKey = "AIzaSyDIC70QkPGuavMugs4xgHYhuUO1mRys0cc";
const baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems"

const retrievePlaylistItems = (playlistID) => {
	const fullURL = baseURL + playlistID
	axios.get('fullURL')
	.then((data) => {
		console.log('This is the data:', data)
	})
	.catch((error) => {
		console.log(error)
	});
}
