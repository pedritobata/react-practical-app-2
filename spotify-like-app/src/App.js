import React, { useEffect , useState} from 'react';
import './App.css';
import Login from './pages/Auth/Login';
import { getTokenFromUrl } from './client/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerContext } from './DataLayer/DataLayer';
import Player from './pages/Player/Player';

const spotify = new SpotifyWebApi();

function App() {

  //const [ token, setToken ] = useState(null);
  const [{ user , token}, dispatch] = useDataLayerContext();

  console.log('I have a token 👉', token);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    //setToken(_token);

   

    if(_token){
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token
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

    
  }, []);
  
  
  //console.log('User logged in 👽', token);

  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
