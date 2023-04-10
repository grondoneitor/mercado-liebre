const express = require("express")
const app = express()
const path = require("path")

const methodOverride = require("method-override")

const port = process.env.PORT || 3033
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride("_method"))
app.listen(port, (req, res) => console.log(`Se esta corriendo el servidor ${port}`))

const homeRouter = require("./src/rutas/homeRoutes")
const loginRouter = require("./src/rutas/loginRoutes")
const registerRouter = require("./src/rutas/registerRoutes")
const productoRouter = require("./src/rutas/ProductoRoutes")

app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(productoRouter)

// const express = require("express")
const { INTEGER } = require("sequelize")
// const app = express()
const Sequelize = require("sequelize")

// definimos los parametros de conexion a la base de datos
const sequelize = new Sequelize ("mercado_liebre","root","",{
    host: "localhost",
    dialect: "mysql"
})
// el modelo del prducto
const products = sequelize.define("productos",{
    "id":{type: Sequelize.INTEGER, primaryKey: true} ,
    "product_name": Sequelize.STRING,
    "product_category": Sequelize.STRING ,
    "product_img":Sequelize.STRING , 
    "product_description":Sequelize.STRING
})

sequelize.authenticate()
.then(function(){
    console.log("se conecto a la base datos")
})
.catch(function(error){
    console.log("error al conectar la base de dats" + error )
})
