const path = require("path")

const loginController = {
   formulario: function (req, res ) {
        res.sendFile(path.join(__dirname, "../views/login.html"))
    }
}


module.exports = loginController