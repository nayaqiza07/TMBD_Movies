// API
const API_KEY = "api_key=5d439a27d0479b5dba039b448019f1ed";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

getMovies = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
getMovies(API_URL);
