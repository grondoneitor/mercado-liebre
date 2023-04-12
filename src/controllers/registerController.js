const path = require("path")
const fs = require("fs")
const users = require("../dataBase/usuariosBase.json")
const db = require("../dataBase/models")


   const registerController = function(req,res){

          res.render(path.join(__dirname, "../../views/register.ejs"))
      
   }

   const usuarios = function(req,res){
      db.User.findAll()
      .then((users)=> {
   
         res.render(path.join(__dirname,"../../views/usuarios.ejs"), {users}) 
      })
    
      // res.render(path.join(__dirname, "../../views/usuarios.ejs"), ({"users": nuevoUsers}))
   }


   const detalleUsuario = function(req,res){
    db.User.findByPk(req.params.id)
       .then((users)=>{
         res.render(path.join(__dirname,"../../views/detalleUsuario.ejs"), {users})
       })
       .catch((error)=>{
        res.status(error)
       })

   }
   const postNuevoUsuario = function(req,res){
        
        db.User.create({    
            name: req.body.name,
            last_name: req.body.last_name,
            name_user: req.body.name_user,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            home: req.body.home,       
            password: req.body.password,
            confirm_password: req.body.confirm_password,
         
        })
      
   res.redirect("/usuarios")
   }
   
const  editarUsuario  = function(req,res){
    db.User.findByPk(req.params.id)
          .then((userEdit)=>{
            res.render(path.join(__dirname, "../../views/editarUsuario.ejs"),{userEdit})
          })

}

// no actualiza a los usuarios
const  usuarioEditado = function(req, res){
   console.log(req.body);
   db.User.update({
      name: req.body.name,
      last_name: req.body.last_name,
      name_user: req.body.name_user,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
      home: req.body.home,       
      password: req.body.password,
      confirm_password: req.body.confirm_password,
   },{
      where:{id: req.params.id}
   })
   res.redirect("/usuarios")
   
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