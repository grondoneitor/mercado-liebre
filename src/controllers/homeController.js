const path = require("path")
const productos = require("../dataBase/productosBase")

const home = (req, res) =>{
   res.render(path.join(__dirname, "../../views/home.ejs"),{"allProductos": productos})
}
const productosDetail = (req, res) =>{
   const { id }= req.params
   const idProducto = productos.find(e => e.id === parseInt(id))
  if(idProducto){
    res.render(path.join(__dirname,"../../views/productosDetail.ejs"), {idProducto})
  }else{

    res.send("not found 404")
  }
}

 
module.exports  = {
   home,
   productosDetail
}