const express = require("express")

const registerRouter = express.Router()

const { registerController} = require("../controllers/registerController")

registerRouter.get("/register", registerController)


module.exports =  registerRouter