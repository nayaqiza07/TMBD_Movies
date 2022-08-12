// API
const API_KEY = "api_key=5d439a27d0479b5dba039b448019f1ed";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.querySelector("#main");

getMovies = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
};

getMovies(API_URL);

showMovies = (data) => {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img
    src="${IMG_URL + poster_path}"
    alt="${title}"
    />

    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `;

    main.appendChild(movieEl);
  });
};

getColor = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};
