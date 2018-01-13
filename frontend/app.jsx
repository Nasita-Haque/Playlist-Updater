import React from 'react';
import ReactDOM from 'react-dom';

//Files
import PlaylistSearcher from './components/PlaylistSearcher.jsx';

class App extends React.Component {

	componentDidMount(){
      function start() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
          apiKey: 'YAIzaSyDIC70QkPGuavMugs4xgHYhuUO1mRys0cc',
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
          // clientId: '140223804679-9inepuht23m5hv2vftonvck3vspo1utu.apps.googleusercontent.com',
          // scope: 'https://www.googleapis.com/auth/youtube.readonly'
        }). then(function(){
          console.log('working')
        })
      // 1. Load the JavaScript client library.
    }
      gapi.load('client', start);
	}
	render(){
		return (
			<PlaylistSearcher />
		)
			
	}
};

ReactDOM.render(<App />, document.getElementById('app'));