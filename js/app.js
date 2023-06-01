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

// 검색기능 구현화
function buttonClick() {
  const value = document.querySelector('.movie_serach').value.trim().toLowerCase();
  const cardTitles = document.querySelectorAll('.card-title');
  const cardTitlesArray = Array.from(cardTitles);
  //Array로 배열로 바꿔주는 방법
  // from은 객체나 이터러블 객체를 바꿀수있게 해준다.
  // 위의 요소는 이터러블 객체이다.
  // console.log(cardTitlesArray)
  // cardTitles.forEach(title => {
  //   if (title.innerText.toLowerCase().includes(value)) {
  //     //includes란 안에 잇는 값이 .으로 되어잇는 값에 있으면 true 없으면 false를 나타낸다.
  //     // title.closest('.card-box').style.display = 'block';
  //     title.closest('.Cards-box').style.display = 'block';
  //     //closest은 상위요소를 찾는 메소드
  //   } else {
  //     title.closest('.Cards-box').style.display = 'none';
  //   }
  // });
  cardTitlesArray.filter(title => {
    if (title.innerText.toLowerCase().includes(value)) {
      title.closest('.Cards-box').style.display = 'block';
    } else {
      title.closest('.Cards-box').style.display = 'none';
    }
  });
}
//Enter키를 눌러도 값이 동일하게 구현화 
// function keypress(){
//   if(window.Event.keyCode == 13){
//     console.log("keypress")
//   } 
// }
function keypress(e){
  // let txt = document.getElementsByClassName("movie_serach").value;
  let text = document.querySelector(".movie_serach").value;
  //13번인 이유는 enter의 keyCode가 13번이기 때문이다. 번호마다 키보드의 키가 다르다.
  if(e.keyCode == 13){
    buttonClick(txt)
  }
}
// function keypress(e){
//   let txt = document.getElementById(".txt").value;
//   let code = e.code
//   if(code == 13){
//     console.log("입력값" + txt)
//   }
// }