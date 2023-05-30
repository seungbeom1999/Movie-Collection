const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjI1YTQ1OGUyOWYwZmM3MmY3M2NmOWI2N2Q0Y2RhZSIsInN1YiI6IjY0NzQ3OTM2Y2MyNzdjMDBhNzQ1ZTkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s7NxkvQgNu-c9D-N1Zs4Ae3m1qnf4ipY3X3zQd4XseA'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

const button = document.querySelector('.submit');
const searchInput = document.querySelector('.movie_serach');
const cardTitles = document.querySelectorAll('.card-title');
const CardBox = document.querySelector('.card-box');

function buttonClick() {
  const value = document.querySelector('.movie_serach').value.trim().toLowerCase();
  const cardTitles = document.querySelectorAll('.card-title');
  
  cardTitles.forEach(title => {
    if (title.innerText.toLowerCase().includes(value)) {
      //includes란 안에 잇는 값이 .으로 되어잇는 값에 있으면 true 없으면 false를 나타낸다.
      // title.closest('.card-box').style.display = 'block';
      title.closest('.card-box').style.display = 'block';
      //closest은 상위요소를 찾는 메소드
    } else {
      title.closest('.card-box').style.display = 'none';
    }
  });
}
