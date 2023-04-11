const path = require("path")
const fs = require("fs")
let productos = require("../dataBase/productosBase.json")
const db = require("../dataBase/models")

const venderProducto = (req, res )=> {
    res.render(path.join(__dirname, "../../views/venderProducto.ejs"))
}
// const homeProductos = (req, res )=> {
//     res.render(path.join(__dirname, "../../views/home.ejs"),{productos})
// }

   const postNuevoProducto = function(req,res){
    const {
        nombre,
        precio, 
        descuento ,
        caracteristicas,
      
    } = req.body;
                const newId = (productos[productos.length - 1] && productos[productos.length - 1].id + 1 ) || 1;
                let img = req.file ? req.file.filename : ""; 
                console.log(req.file);
                let newImg ;
  if(img.length > 0){
    newImg = `/images/productos/${img}`
  }
  const nuevoProducto ={
    id: newId,
    nombre,
    precio, 
    descuento,
    img: newImg,
    caracteristicas,
    
 }
 console.log(img);
   productos.push(nuevoProducto)
   const nuevoProductoJson =  JSON.stringify(productos)
   fs.writeFileSync(path.join(__dirname, "../dataBase/productosBase.json"), nuevoProductoJson)
   res.redirect("/")
}


 const productosDetail = (req, res) =>{
  let productos = require("../dataBase/productosBase.json")
    const { id }= req.params
    const producto = productos.find(e => e.id === parseInt(id))
   if(producto){
     res.render(path.join(__dirname,"../../views/productosDetail.ejs"), {producto})
   }else{
 
     res.send("not found 404")
   }
 }


const editarProducto =(req, res )=> {
  const {id} = req.params;
  const editarProducto = productos.find(elem => elem.id == id  )
  res.render(path.join(__dirname, "../../views/editarProductos.ejs"), {editarProducto})
}


  const productoEditado = (req, res) => {
    const { id } = req.body;
    const index = productos.findIndex(elem => elem.id == id);
    
   let img = req.file ? req.file.filename : ""; 
    console.log(img)
    let newImg ;
      if(img.length > 0){
              newImg = `/images/productos/${img}`
        }else{
          console.log("no se encontro la img")
        }        
    // console.log(newImg)

    if (index !== -1) {
      productos[index].nombre = req.body.nombre;
      productos[index].precio = req.body.precio;
      productos[index].descuento = req.body.descuento;
      productos[index].img = newImg ;
  

      console.log(productos[index].img)
      const nuevoProductoJson = JSON.stringify(productos);
      fs.writeFileSync(path.join(__dirname, "../dataBase/productosBase.json"), nuevoProductoJson);
      res.redirect("/");
    } else {
      res.send("Producto no encontrado");
    }
  };

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
  

module.exports = {
    venderProducto,
    postNuevoProducto,
    // homeProductos,
    editarProducto,
    productoEditado,
    productosDetail,
    productoDeDB
    // 
}


// const productoFinal= productos.forEach(elem=>{
//   if(req.body.id){
//     elem.nombre = req.body.nombre;
//     elem.precio = req.body.precio;
//     elem.descuento = req.body.descuento;
//     elem.img = req.body.img;

//   }
//   console.log(req.body.id)
// })

// productos.push(productoFinal)
// const nuevoProductoJson =  JSON.stringify(productos)
// fs.writeFileSync(path.join(__dirname, "../dataBase/productosBase.json"), nuevoProductoJson)

// res.redirect("/")
