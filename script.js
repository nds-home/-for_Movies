let numberOfFilms;
function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememerMyfilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = +prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a != a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememerMyfilms();

function detectPersonalMuvies() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalMuvies();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDb(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`"Ваш любимый жанр?" ${i}`);
  }
}
writeYourGenres();

// ================================================================================

// let num = 31;
// // num == 30 ? console.log("true") : console.log("false");

// for (let i = 1; i <= 35; i++) {
//   num++;
//   console.log(num);
// // }
