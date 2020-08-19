import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Auth/Login';
import { getTokenFromUrl } from './client/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerContext } from './DataLayer/DataLayer';
import Player from './pages/Player/Player';

const spotify = new SpotifyWebApi();

function App() {

  //const [ mytoken, setToken ] = useState(null);
  const [{ token }, dispatch] = useDataLayerContext();

  //console.log('I have a token 👉', token);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log('Got a hash 👽', hash);
    // console.log('Got a token 👽', token);
    if(hash.access_token){
      localStorage.setItem('spotifyToken',hash.access_token);
    }
    
    const savedToken = "";// localStorage.getItem("spotifyToken");
   

    if(savedToken){
      spotify.setAccessToken(savedToken);

      dispatch({
        type: "SET_TOKEN",
        token: savedToken
      });

      spotify.getMe()
      .then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        //console.log('playlists',playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
      
    }
    //console.log('I have a HASH 👉', hash);
    
  }, [dispatch]);
  
  
  //console.log('User logged in 👽', _token);

  return (
    <div className="App">
      {
        true ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
