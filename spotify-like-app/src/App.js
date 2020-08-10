import React, { useEffect , useState} from 'react';
import './App.css';
import Login from './pages/Auth/Login';
import { getTokenFromUrl } from './client/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {

  const [ token, setToken ] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    setToken(_token);

    if(_token){
      spotify.setAccessToken(_token);

      spotify.getMe()
      .then(user => {
        console.log(user);
      });
    }

    console.log('I have a token 👉', hash);
  }, []);

  return (
    <div className="App">
      {
        token ? <h1>I'm logged in!!</h1> : <Login />
      }
    </div>
  );
}

export default App;
