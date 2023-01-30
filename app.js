const express = require("express")
const app = express()
const path = require("path")
 
const port = process.env.PORT || 3030
app.set("view engine", "ejs")
app.use(express.static('public'))
app.listen(port, (req, res) => console.log(`Se esta corriendo el servidor ${port}`))

const homeRouter = require("./src/rutas/homeRoutes")
const loginRouter = require("./src/rutas/loginRoutes")
const registerRouter = require("./src/rutas/registerRoutes")


app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
