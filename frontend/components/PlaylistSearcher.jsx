import React from 'react';

// <script src="https://apis.google.com/js/api.js"></script> 

// import retrievePlaylistItems from '../utilities/youtubeAPI.js';

class PlaylistSearcher extends React.Component{
	constructor(props){
		super(props);
		this.state = {playlistURL: ''}

    this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

  handleChange(e) {
    console.log('value:',e.target.value)
    this.setState({playlistURL: e.target.value})
	}

  handleSubmit(e){
    e.preventDefault()
    console.log('this was submitted')
    console.log("STATE", this.state.playlistURL)

    let playlistID = this.state.playlistURL

    function requestPlaylistItems(playlistID) {
      console.log('working')
     return gapi.client.request({
        "path": "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistID
      })
     .then((response) => {
      console.log("ITEMS:", response.result.items)
     })
    }
    requestPlaylistItems(playlistID)
  }

	render(){
		return (
  			<form onSubmit={this.handleSubmit}>
          <h1>Type in a playlist URL below.</h1>
  				<h1>PLg9ZoCDcE834UolK4eJBxZtGwJRSt6cHy</h1>
          <input className="playlistURL" onChange={this.handleChange}/>
  				<input type="submit" value="Submit" />
  			</form>
		)
	}
}

export default PlaylistSearcher;