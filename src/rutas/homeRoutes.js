const express = require("express")

const homeRouter = express.Router()

const {productoDeDB} = require("../controllers/homeController")

homeRouter.get("/", productoDeDB)
// homeRouter.get("/buscar", buscandoProducto)

module.exports = homeRouter