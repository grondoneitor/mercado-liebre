const path = require("path")
// const productos = require("../dataBase/productosBase.json")
const db = require("../dataBase/models")

const productoDeDB = (req, res )=>{
   //  console.log(db.findAll())
   db.Producto.findAll()
   .then((productos) => {
     res.render("home", {productos: productos})       
   })
   .catch((error)=>{
     console.log(error);
     res.send(error)
   })
 
           
   }



// const buscandoProducto = (req, res) =>{
//  const { nombre } = req.query;
//  const producto = productos.filter(e => e.nombre.toUpperCase().includes(nombre.toUpperCase()));
//  producto.length !=0 ? res.render(path.join(__dirname,"../../views/partials/productosDetail.ejs"), {producto}) : res.status(404);

// }
 
module.exports  = {
   productoDeDB,
   // buscandoProducto
}