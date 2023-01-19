const path = require("path")

const registerController = {
   registro: function(req, res){
    res.sendFile(path.join(__dirname, "../views/register.html"))
   }
}

module.exports = registerController