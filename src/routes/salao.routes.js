import express from "express";
const routes = express.Router();

import Salao from "../models/salao.js";

// Define routes
routes.post("/", async (req, res) => {
  try {
    console.log('Corpo da requisição:', req.body);

    const salao = await new Salao(req.body).save() // Cria uma nova instância de Salao com os dados do corpo da requisição.

    console.log(salao);
    

    res.status(201).json({ salao }); // Retorna a instância salva com um status 201.

  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
});

export default routes;
