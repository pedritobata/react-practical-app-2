
//https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09

const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "2709f9b758154ca08c58fd3976e92ad8";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location
    .hash.substring(1)
    .split('&')
    .reduce((accumulator, current) => {
        const parts = current.split('=');
        accumulator[parts[0]] = decodeURIComponent(parts[1]);
        return accumulator;
    },{});
} 

export const loginUrl = `${authEndpoint
}?client_id=${clientId
}&redirect_uri=${redirectUri
}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

