const path = require("path")
const fs = require("fs")
const users = require("../dataBase/usuariosBase.json")

const registerController = function(req,res){
      res.render(path.join(__dirname, "../../views/register.ejs"))
   }

   const usuarios = function(req,res){
 
         res.render(path.join(__dirname,"../../views/usuarios.ejs"), {users})
    
      
      // res.render(path.join(__dirname, "../../views/usuarios.ejs"), ({"users": nuevoUsers}))
   }
   const detalleUsuario = function(req,res){
      const {id} = req.params;
      const user = users.filter(e => e.id === parseInt(id))
      if(user){
         res.render(path.join(__dirname,"../../views/detalleUsuario.ejs"), {user})
       }else{
     
         res.send("not found 404")
       }
      
      // res.render(path.join(__dirname, "../../views/usuarios.ejs"), ({"users": nuevoUsers}))
   }
   const postNuevoUsuario = function(req,res){
      const {
         nombre,
         usuario,
         email,
         fechaNacimiento,
         domicilio,       
         contraseña,
         confirmarContraseña,
      } = req.body
   //  const newId = users[users.length - 1].id +1;
    const newId = (users[users.length - 1] && users[users.length - 1].id +1 )|| 1;
                 
    const img = req.file ? req.file.filename : " ";
    let newImg ;
    if(img.length > 0){
      newImg = `/images/users/${img}`
    }
    const nuevoUsuario ={
      id: newId,
      nombre,
      usuario,
      email,
      fechaNacimiento,
      domicilio,
      foto: newImg,
      contraseña,
      confirmarContraseña,
   }
  

   users.push(nuevoUsuario)
   const nuevosuarioJson =  JSON.stringify(users)
   fs.writeFileSync(path.join(__dirname, "../dataBase/usuariosBase.json"), nuevosuarioJson)
   res.redirect("/usuarios")
   }
   
const  editarUsuario  = function(req,res){
  const {id} = req.params;
  const userEdit = users.find(elem => elem.id === id)
  res.render(path.join(__dirname, "../../views/editarUsuario.ejs"),{userEdit})
}


const  usuarioEditado = function(req, res){

}

module.exports = {
   registerController,
   postNuevoUsuario,
   usuarios,
   detalleUsuario,
   editarUsuario , 
   usuarioEditado
}
// how to create a route to edit a product?