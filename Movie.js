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
/*createMovie
createMovie
createMovie
createMovie
createMovie
createMovie
createMovie
createMovie
createMovie
createMovie*/

module.exports = getAllMovies;