const express = require("express")

const homeRouter = express.Router()

const { home, buscandoProducto} = require("../controllers/homeController")

homeRouter.get("/", home)
homeRouter.get("/buscar", buscandoProducto)

module.exports = homeRouter