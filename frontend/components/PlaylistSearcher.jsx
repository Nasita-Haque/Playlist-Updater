import React from 'react';

class PlaylistSearcher extends React.Component{
	constructor(props){
		super(props);
		this.state = {playlistUrl: ''}

		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		console.log(e.target.value)
	}
	render(){
		return (
			<form>
				<h1>Type in a playlist URL below.</h1>
				<input className="playlistUrl" onChange={this.handleChange}/>
			</form>
		)
	}
}

export default PlaylistSearcher;