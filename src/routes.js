const express = require("express");
const routes = express.Router();

const MovieController = require("./controllers/MoviesController");

// Rota responsavel por listar todos filmes/series cadastrados no banco de dados
routes.get("/movies", MovieController.index);

// Rota que mostra detalhes de um filme/serie
routes.get("/info/:id", MovieController.getInfo);

// Rota que adiciona um comentario
routes.post("/addcom/:id", MovieController.addCom);

// Rota para inserir novos objetos no banco
routes.post("/insert", MovieController.insert);

// Rota para inserir novos objetos no banco varios ao mesmo tempo
routes.post("/insertall", MovieController.insertall);

// Rota para atualizar um registro
routes.put("/update/:id", MovieController.update);

// Rota para apagar um registro
routes.delete("/delete/:id", MovieController.delete);

// Rota para recuperar quais filmes o usuario comentou
routes.get("/getcoms/:userid", MovieController.getMoviesCom);

// Rota para procurar um filme pelo nome
routes.get("/search/:term", MovieController.search);

// Rota para remover um comentario
routes.get("/remcom/:movieid/:comid", MovieController.remCom);

module.exports = routes;
