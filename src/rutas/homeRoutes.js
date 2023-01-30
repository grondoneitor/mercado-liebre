const express = require("express")

const homeRouter = express.Router()

const { home,  productosDetail} = require("../controllers/homeController")

homeRouter.get("/", home)
homeRouter.get("/producto/:id", productosDetail)

module.exports = homeRouter