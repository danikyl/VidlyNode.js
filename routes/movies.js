const express = require ('express');
const rout_Movies = express.Router();
const getAllMovies=require('./../Movie');
const generalDebug = require('./../debug');


rout_Movies.get('/', (req, res) => {
    getAllMovies(req, res);
});

/*rout_Movies.get('/:id', (req, res) => {
    movie = movies.find((g) => g.id == req.params.id);
    if (!movie) return res.status(404).send('movie not found!');
    res.send(movie);
});
rout_Movies.put('/:id', (req,res) => {
    movie=movies.find((c)=> c.id==req.params.id);
    if (!movie) return res.status(404).send("movie not found!");
    const {error}=movieValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    movie.name=req.body.name;
    res.send(movie);
});

rout_Movies.delete('/:id', (req, res) => {
    movie = movies.find((c) => c.id == req.params.id);
    if (!movie) return res.status(404).send("movie not found!");
    movies.splice(movies.indexOf(movie));
    res.send(movie);
});

rout_Movies.post('/', (req, res)=> {
    const {error} = movieValidator(req.body);
    if (error) return res.send(error.details[0].message);
    const movie = {
        id: movies.length+1,
        name: req.body.name
    };
    movies.push(movie);
    return res.send(movie);
});*/

module.exports=rout_Movies;