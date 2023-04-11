const path = require("path")
const productos = require("../dataBase/productosBase.json")

// const home = (req, res) =>{
//   const productos = require("../dataBase/productosBase.json")
//    res.render(path.join(__dirname, "../../views/home.ejs"),{productos})
// }


const buscandoProducto = (req, res) =>{
 const { nombre } = req.query;
 const producto = productos.filter(e => e.nombre.toUpperCase().includes(nombre.toUpperCase()));
 producto.length !=0 ? res.render(path.join(__dirname,"../../views/partials/productosDetail.ejs"), {producto}) : res.status(404);

}
 
module.exports  = {
   // home,
   buscandoProducto
}