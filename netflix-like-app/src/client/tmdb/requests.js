const TMDB_API_KEY = "8d8d22ef82b3cffb9f84bdb46c11d3b7";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
};

export default requests;