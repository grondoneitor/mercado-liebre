const express = require("express")
const route = express.Router();
const app = express()
const path = require("path")
 
const port = process.env.PORT || 3030

app.use(express.static('public'))

const loginController = require("./controllers/loginController")
const registerController = require("./controllers/registerController")
const homeController = require("./controllers/homeController")


app.listen(port, (req, res) => console.log(`Se esta corriendo el servidor ${port}`))


app.get("/", homeController.home)
app.get("/register", registerController.registro)
app.get("/login", loginController.formulario)

