const express = require('express');

const server = express();

server.use(express.json());

const animes = ['Kimetsu no Yaiba', 'Naruto', 'Bleach', 'One Piece', 'Dragon Ball Z', 'Attack on Titan', 'Fullmetal Alchemist', 'One Punch'];


//retorna 1 anime
server.get('/animes/:index', (req, res) => {
    const {
        index
    } = req.params;

    return res.json(animes[index]);
});

//retorna todos os animes
server.get('/animes', (req, res) => {
    return res.json(animes);
})

//adiciona um novo anime
server.post('/animes', (req, res) => {
    const {
        name
    } = req.body;
    animes.push(name);

    return res.json(animes);
})


//atualiza um anime
server.put('/animes/:index', (req, res) => {
    const {
        index
    } = req.params;
    const {
        name
    } = req.body;

    animes[index] = name;
    return res.json(animes);
})


//deleta um anime
server.delete('/animes/:index', (req, res) => {
    const {
        index
    } = req.params;

    animes.splice(index, 1);

    return res.json({
        message: "o anime foi deletado"
    })
})

server.listen(8082);