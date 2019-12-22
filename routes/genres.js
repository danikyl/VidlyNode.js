const express = require ('express');
const rout_Genres = express.Router();
const Joi = require('joi');

const genres = [
    {id: 1, name: 'Horror'}, 
    {id: 2, name: 'Romance'},
    {id: 3, name: 'Comedy'},
    {id: 4, name: 'Thriller'}
];

rout_Genres.get('/', (req, res) => {
    res.send(genres);
});
rout_Genres.get('/:id', (req, res) => {
    genre = genres.find((g) => g.id == req.params.id);
    if (!genre) return res.status(404).send('Genre not found!');
    res.send(genre);
});
rout_Genres.put('/:id', (req,res) => {
    genre=genres.find((c)=> c.id==req.params.id);
    if (!genre) return res.status(404).send("Genre not found!");
    const {error}=genreValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    genre.name=req.body.name;
    res.send(genre);
});

rout_Genres.delete('/:id', (req, res) => {
    genre = genres.find((c) => c.id == req.params.id);
    if (!genre) return res.status(404).send("Genre not found!");
    genres.splice(genres.indexOf(genre));
    res.send(genre);
});

rout_Genres.post('/', (req, res)=> {
    const {error} = genreValidator(req.body);
    if (error) return res.send(error.details[0].message);
    const genre = {
        id: genres.length+1,
        name: req.body.name
    };
    genres.push(genre);
    return res.send(genre);
});



function genreValidator(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}

module.exports=rout_Genres;