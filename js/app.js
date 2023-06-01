const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjI1YTQ1OGUyOWYwZmM3MmY3M2NmOWI2N2Q0Y2RhZSIsInN1YiI6IjY0NzQ3OTM2Y2MyNzdjMDBhNzQ1ZTkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s7NxkvQgNu-c9D-N1Zs4Ae3m1qnf4ipY3X3zQd4XseA'
  }
};

const button = document.querySelector('.submit');
const searchInput = document.querySelector('.movie_serach');
const cardTitles = document.querySelectorAll('.card-title');

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjI1YTQ1OGUyOWYwZmM3MmY3M2NmOWI2N2Q0Y2RhZSIsInN1YiI6IjY0NzQ3OTM2Y2MyNzdjMDBhNzQ1ZTkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s7NxkvQgNu-c9D-N1Zs4Ae3m1qnf4ipY3X3zQd4XseA",
  },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    let movies = response.results;
    let movieCards = "";

    movies.forEach((movie) => {
      movieCards += `
      <div id="livecards-box" class="Cards-box" onclick="alertID(${movie.id})">
          <div class="col">
            <div class="movie-card">
              <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" class="card-img">
              <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">${movie.overview}</p>
                <p>평점<span class="rank">${movie.vote_average}</span></p>
              </div>
            </div>
          </div>
        </div>
      `
    });
    document.getElementById("livecards-box").innerHTML = movieCards;
  })
  .catch((err) => console.error(err));


//검색 기능
function buttonClick() {
  const value = document.querySelector('.movie_serach').value.trim().toLowerCase();
  const cardTitles = document.querySelectorAll('.card-title');
  const cardTitlesArray = Array.from(cardTitles);

  cardTitlesArray.filter(title => {
    if (title.innerText.toLowerCase().includes(value)) {
      title.closest('.Cards-box').style.display = 'block';
    } else {
      title.closest('.Cards-box').style.display = 'none';
    }
  });
}


//Enter 기능
function keypress(e){
  let text = document.querySelector(".movie_serach").value;
  if(e.keyCode == 13){
    buttonClick(txt)
  }
}


//영화 Alert 기능
function alertID(value) 
{alert("영화 id:"+value)}
