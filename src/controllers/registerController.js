const path = require("path")

const registerController = function(req,res){
      res.render(path.join(__dirname, "../../views/register.ejs"))
   }

// function(req, res){
//    res.sendFile(path.join(__dirname, "../views/register.html"))
//   }
module.exports = {
   registerController
}