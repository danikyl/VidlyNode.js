const mongoose = require('mongoose');
const Joi = require('joi');
const generalDebug=require('./debug');

const movieSchema = new mongoose.Schema({
    id: Number,
    vote_average: Number,
    title: String,
    poster_url: String,
    genres: [ String ],
    release_date: String
});

const Movie = mongoose.model('Movie', movieSchema);

function movieValidator(movie) {
    const schema = {
        title: Joi.string().min(3).required()
    };
    return Joi.validate(movie, schema);
}

async function createMovie(id, vote_average, title, poster_url, genres, release_date){
    const movie = new Movie ({
        id: id,
        vote_average: vote_average,
        title: title,
        poster_url: poster_url,
        genres: genres,
        release_date: release_date
    });
    
    const result = await movie.save();
}
async function getAllMovies(req, res) {
    const allMovies = await Movie.find(); 
    res.send(allMovies);
}

//Creating movies samples on DB
/*
createMovie(19404, 9.3, "Dilwale Dulhania Le Jayenge", "https://image.tmdb.org/t/p/w200/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg", ["Comedy", "Drama", "Romance"], "1995-10-20");
createMovie(278, 8.6, "The Shawshank Redemption", "https://image.tmdb.org/t/p/w200/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg", ["Drama", "Crime"], "1994-09-23");
createMovie(238, 8.6, "The Godfather", "https://image.tmdb.org/t/p/w200/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg", ["Drama", "Crime"], "1972-03-14");
createMovie(372058, 8.5, "Your Name.", "https://image.tmdb.org/t/p/w200/xq1Ugd62d23K2knRUx6xxuALTZB.jpg", ["Romance", "Animation", "Drama"], "2016-08-26");
createMovie(240, 8.5, "The Godfather: Part II", "https://image.tmdb.org/t/p/w200/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg", ["Drama", "Crime"], "1974-12-20");
createMovie(424, 8.5, "Schindler's List", "https://image.tmdb.org/t/p/w200/yPisjyLweCl1tbgwgtzBCNCBle.jpg", ["Drama", "History", "War"], "1993-12-15");
createMovie(129, 8.5, "Spirited Away", "https://image.tmdb.org/t/p/w200/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg", ["Animation", "Family", "Fantasy"], "2001-07-20");
createMovie(497, 8.4, "The Green Mile", "https://image.tmdb.org/t/p/w200/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg", ["Fantasy", "Drama", "Crime"], "1999-12-10");
createMovie(637, 8.4, "Life Is Beautiful", "https://image.tmdb.org/t/p/w200/f7DImXDebOs148U4uPjI61iDvaK.jpg", ["Comedy", "Drama"], "1997-12-20");
createMovie(680, 8.4, "Pulp Fiction", "https://image.tmdb.org/t/p/w200/dM2w364MScsjFf8pfMbaWUcWrR.jpg", ["Thriller", "Crime"], "1994-09-10");
createMovie(550, 8.4, "Fight Club", "https://image.tmdb.org/t/p/w200/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg", ["Drama"],"1999-10-15");
createMovie(155, 8.4, "The Dark Knight", "https://image.tmdb.org/t/p/w200/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg", ["Drama","Thriller","Crime","Thriller"], "2008-07-16");
createMovie(539, 8.4, "Psycho", "https://image.tmdb.org/t/p/w200/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg", ["Drama","Horror","Thriller"], "1960-06-16");
createMovie(311, 8.4, "Once Upon a Time in America", "https://image.tmdb.org/t/p/w200/fqP3Q7DWMFqW7mh11hWXbNwN9rz.jpg", ["Drama","Crime"], "1984-05-23");
createMovie(389, 8.4, "12 Angry Men", "https://image.tmdb.org/t/p/w200/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg", ["Drama"], "1957-03-25");
createMovie(244786, 8.4, "Whiplash", "https://image.tmdb.org/t/p/w200/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg", ["Drama"], "2014-10-10");
createMovie(13, 8.4, "Forrest Gump", "https://image.tmdb.org/t/p/w200/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg", ["Comedy","Drama","Romance"], "1994-07-06");
createMovie(510, 8.4, "One Flew Over the Cuckoo's Nest", "https://image.tmdb.org/t/p/w200/2Sns5oMb356JNdBHgBETjIpRYy9.jpg", ["Drama"], "1975-11-18");
createMovie(12477, 8.4, "Grave of the Fireflies", "https://image.tmdb.org/t/p/w200/4u1vptE8aXuzb5zauZTmikyectV.jpg", ["Animation","Drama","War"], "1988-04-16");
createMovie(11216, 8.4, "Cinema Paradiso", "https://image.tmdb.org/t/p/w200/khYsM4UEqOY4nM9Bf8ecyZZkCm0.jpg", ["Drama","Romance"], "1988-11-17");
*/

module.exports = getAllMovies;