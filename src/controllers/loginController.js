const path = require("path")

const loginController = function (req, res ) {
        res.render(path.join(__dirname, "../../views/login.ejs"))
    }


module.exports = {
    loginController,
    
}