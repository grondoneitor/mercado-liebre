const express = require("express")
const { INTEGER } = require("sequelize")
const app = express()
const Sequelize = require("sequelize")

// definimos los parametros de conexion a la base de datos
const sequelize = new Sequelize ("mercado_liebre","root","",{
    host: "localhost",
    dialect: "mysql"
})
// el modelo del prducto
const productsModel = sequelize.define("productos",{
    "id":{type: Sequelize.INTEGER, primaryKey: true, auto_increment: true} ,
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
    console.log("error al conectar la base de datos" + error )
})

productsModel.findAll({attributes:["product_name", "product_category","product_img","product_description"]})
    .then (function(productos){
        if (productos.length === 0) {
            console.log("No se encontraron resultados.")
        } else {
            const resultados = JSON.stringify(productos)
            console.log(resultados)
        }
    })
    .catch(function(error){
        console.log("Error al realizar la consulta:", error)
    })
