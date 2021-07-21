'use strict';


/* isNan this is a method that takes an argument inside itself, 
   check it and if we don't have a number inside, than it returns 
   the truth that is not a number
*/



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies have you watched?", ' ');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { 
            personalMovieDB.count = +prompt("How many movies have you watched?", ' ');
        }
    },
    rememberMyMovies: function() {
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
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Quit a few movies have been viewd');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a movie fan');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre is under the number ${i}`);
            
            if (genre === '' || genre == null) {
                console.log('You didn\'t specify the genre');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre; // -1 because in the let we don't start from zero
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} is ${item}`);
        }); 
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyMovies();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function showMyDB(hidden) { // teacher's example
    if (!hidden) { // the value false from DB is passed here and ! chanched it to true
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat); */ 

 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


// code optimization, deleted const 
/* function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is under the number ${i}`, ' '); 
    }
}
writeYourGenres(); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


