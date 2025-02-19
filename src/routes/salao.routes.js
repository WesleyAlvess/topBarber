import express from "express";
const routes = express.Router();

import Salao from "../models/salao.js";

// Define routes
routes.post("/", async (req, res) => {
  try {
    const salao = await new Salao(req.body).save() // Cria uma nova instância de Salao com os dados do corpo da requisição.

    res.status(201).json({ salao }); // Retorna a instância salva com um status 201.

  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});

export default routes;
