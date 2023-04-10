const express = require("express")
const productoRouter = express.Router()
const path = require("path")
const multer = require("multer")
const {venderProducto, postNuevoProducto,  productoEditado, editarProducto, productosDetail} = require("../controllers/productoController")

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
       const folder = path.join(__dirname, "../../public/images/productos")
        cb(null,folder )
    },
    filename:(req, file, cb)=>{
         const newFile = `producto-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newFile)
    }
})

const upload = multer({storage})
productoRouter.get("/vender", venderProducto)
productoRouter.post("/vender", upload.single("img") ,postNuevoProducto)

// productoRouter.get("/", homeProductos)
productoRouter.get("/producto/:id",upload.single("img"),productosDetail)


productoRouter.get("/editar-producto/:id", upload.single("img"),editarProducto)
productoRouter.put("/editar-producto",upload.single("img"),productoEditado)

module.exports = productoRouter
  