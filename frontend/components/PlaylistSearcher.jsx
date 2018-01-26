import React from 'react';
import axios from 'axios';

class PlaylistSearcher extends React.Component{
	constructor(props){
		super(props);
		this.state = {playlistURL: ''}

    this.handleURLChange = this.handleURLChange.bind(this)
		this.handleURLSubmit = this.handleURLSubmit.bind(this)
	}

  handleURLChange(e) {
    console.log('value:',e.target.value)
    this.setState({playlistURL: e.target.value})
	}

  handleURLSubmit(e){
    e.preventDefault()
    console.log("STATE", this.state.playlistURL);

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
  			<form onSubmit={this.handleURLSubmit}>
          <h1>Type in a playlist URL below.</h1>
  				<h1>PLg9ZoCDcE834UolK4eJBxZtGwJRSt6cHy</h1>
          <input className="playlistURL" onChange={this.handleURLChange}/>
  				<input type="submit" value="Submit" />
  			</form>
		)
	}
}

export default PlaylistSearcher;
