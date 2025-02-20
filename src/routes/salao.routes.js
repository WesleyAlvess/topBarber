import express from "express";
const routes = express.Router();

import Salao from "../models/salao.js";
import Servico from "../models/servico.js"

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

routes.get("/servicos/:salaoId", async (req, res) => {
  try {
    const { salaoId } = req.params
    const servicos = await Servico.find({
      salaoId,
      status: 'Ativo'
    }).select('_id titulo')

    res.json({
      servicos: servicos.map(servico => ({
        label: servico.titulo,
        value: servico._id,
      }))
    })

  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
})




export default routes;
