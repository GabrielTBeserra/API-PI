const express = require("express");
const fs = require("fs");
var path = require("path");
const routes = express.Router();

const MovieController = require("./controllers/MoviesController");

// Rota responsavel por listar todos filmes/series cadastrados no banco de dados
routes.post("/movies", MovieController.getAll);

/*// Rota que mostra um usuario especifico
routes.get("/profile/:id", MovieController.show);
// Rota que faz a atualizacao de um perfil
routes.put("/profile/:id", MovieController.update);
// Rota que deleta algum perfil
routes.delete("/profile/:id", MovieController.destroy);
// Verifica a existencia de um email (Para questoes de cadastro)
routes.get("/verifyemail/:email", MovieController.verifyEmail);*/

module.exports = routes;
