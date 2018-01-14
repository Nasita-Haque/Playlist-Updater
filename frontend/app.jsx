import React from 'react';
import ReactDOM from 'react-dom';

//Files
import PlaylistSearcher from './components/PlaylistSearcher.jsx';
import myKey from './secret/config.js';

class App extends React.Component {

	// componentDidMount(){
    //   const start = () => {
    //     // 2. Initialize the JavaScript client library.
    //     gapi.client.init({
    //       apiKey: myKey,
    //       discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
    //     }).then(() => {
    //       console.log('working')
    //     })
    // }
    //   // 1. Load the JavaScript client library.
    //   gapi.load('client', start);
	// }
	render(){
		return (
			<PlaylistSearcher />
		)
	}
};

ReactDOM.render(<App />, document.getElementById('app'));