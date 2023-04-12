const path = require("path")
const fs = require("fs")
// let productos = require("../dataBase/productosBase.json")
const db = require("../dataBase/models")

const venderProducto = (req, res )=> {
    res.render(path.join(__dirname, "../../views/venderProducto.ejs"))
}


   const postNuevoProducto = function(req,res){
    db.Producto.create({
      product_name: req.body.nombre,
      product_category: req.body.categoria,
      product_img: req.body.img,
      product_description: req.body.descripcion
    })

   res.redirect("/")
}



  const productosDetail = (req, res) =>{
    console.log(req.params.id+ "este es el id")
    db.Producto.findByPk(req.params.id )
      .then((producto)=> {
        res.render("productosDetail", {producto: producto})})}


////////////////////////////////////////////
 // PASANDO DE LA BASE DE DATOS JSON A MYSQL

  const editarProducto =(req, res )=> {
        db.Producto.findByPk(req.params.id)
             .then((editarProducto)=>{
                   res.render(path.join(__dirname, "../../views/editarProductos.ejs"), {editarProducto})
                  })}


  const productoEditado = (req, res) => {
    db.Producto.update({
      product_name: req.body.nombre,
      product_category: req.body.categoria,
      product_img: req.body.img,
      product_description: req.body.descripcion
    },{
      where: {id: req.params.id}
    })
    res.redirect("/");
  
  };
  


module.exports = {
    venderProducto,
    postNuevoProducto,
    editarProducto,
    productoEditado,
    productosDetail,
}

