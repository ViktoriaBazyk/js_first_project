'use strict';


let numberOfMovies; 
// + converts a string to a number, in this case we work with numbers 

/* isNan this is a method that takes an argument inside itself, 
   check it and if we don't have a number inside, than it returns 
   the truth that is not a number
 */
function start() {
    numberOfMovies = +prompt("How many movies have you watched?", ' ');

    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)) { 
        numberOfMovies = +prompt("How many movies have you watched?", ' ');
    }
}
// start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('One of the last viewd movies?', ' '), // ниже приведен автоматизированный код
      b = prompt('What rating will You give?', ' '),
      c = prompt('One of the last viewd movies?', ' '),
      d = prompt('What rating will You give?', ' ');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */ 

// We wrapped the loop in the function to call it as needed
function rememberMyMovies() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last viewd movies?', ' '),
              b = prompt('What rating will You give?', ' ');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyMovies ();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Quit a few movies have been viewd');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a movie fan');
    } else {
        console.log('Error');
    }
}

// detectedPersonalLevel();

/* function showMyDB(hidden) { // teacher's example
    if (!hidden) { // the value false from DB is passed here and ! chanched it to true
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); */ 

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre is under the number ${i}`, ' ');
        personalMovieDB.genres[i - 1] = genre; // -1 because in the let we don't start from zero
    }
}
writeYourGenres();