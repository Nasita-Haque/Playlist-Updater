import React from 'react';

class PlaylistSearcher extends React.Component{
	render(){
		return (
			<form>
				<h1>Type in a playlist URL below.</h1>
				<input className="playlistUrl"/>
			</form>
		)
	}
}

export default PlaylistSearcher;