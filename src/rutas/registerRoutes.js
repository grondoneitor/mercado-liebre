const express = require("express")

const registerRouter = express.Router()
const path = require("path")
const multer = require("multer")
const { registerController, postNuevoUsuario,usuarios,detalleUsuario, editarUsuario, usuarioEditado} = require("../controllers/registerController")

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        let folder = path.join(__dirname, '../../public/images/users/');
        cb(null, folder)
    },
    filename:(req, file, cb)=>{
         const newFile = `usuarios-${Date.now()}${path.extname(file.originalname)}`
        cb(null, newFile)
    }
})
const upload = multer({storage})

registerRouter.get("/register", registerController)
registerRouter.post("/register", upload.single("foto") ,postNuevoUsuario)

registerRouter.get("/usuarios", usuarios)
registerRouter.get("/usuarios/:id", detalleUsuario)

registerRouter.get("/editar-usuario/:id", editarUsuario)
registerRouter.put("/editar-usuario", usuarioEditado)
module.exports =  registerRouter