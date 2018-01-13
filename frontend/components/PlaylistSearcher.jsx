import React from 'react';

// <script src="https://apis.google.com/js/api.js"></script> 

// import retrievePlaylistItems from '../utilities/youtubeAPI.js';

class PlaylistSearcher extends React.Component{
	constructor(props){
		super(props);
		this.state = {playlistUrl: ''}

    this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount(){
    // window.onload = () => {
    //   function start() {
    //     // 2. Initialize the JavaScript client library.
    //     gapi.client.init({
    //       apiKey: 'YAIzaSyDIC70QkPGuavMugs4xgHYhuUO1mRys0cc',
    //       discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
    //       // clientId: '140223804679-9inepuht23m5hv2vftonvck3vspo1utu.apps.googleusercontent.com',
    //       // scope: 'https://www.googleapis.com/auth/youtube.readonly'
    //     })
    //     .then(function() {
    //       // 3. Initialize and make the API request.
    //       return gapi.client.playlistItemsList.list({
    //         'path': 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
    //         'maxResults': "25",
    //         "part": "snippet, contentDetails",
    //         "playlistID": "PLg9ZoCDcE834UolK4eJBxZtGwJRSt6cHy", 
    //       })
    //     })
    //     .then(function(response) {
    //       console.log(response.result);
    //       return response.result
    //     })
    //     .then(function(reason) {
    //       console.log('Error: ' + reason.result.error.message);
    //     });
    //   };
    //   // 1. Load the JavaScript client library.
    //   gapi.load('client', start);
    // }
  }

  handleChange(e) {
    console.log('value:',e.target.value)
    this.setState({playlistUrl: e.target.value})
	}

  handleSubmit(e){
    e.preventDefault()
    console.log('this was submitted')
  }

	render(){
		return (
  			<form onSubmit={this.handleSubmit}>
          <h1>Type in a playlist URL below.</h1>
  				<h1>PLg9ZoCDcE834UolK4eJBxZtGwJRSt6cHy</h1>
          <input className="playlistUrl" onChange={this.handleChange}/>
  				<input type="submit" value="Submit" />
  			</form>
		)
	}
}

export default PlaylistSearcher;