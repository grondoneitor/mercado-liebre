module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",{ // "User": nombre de mi JS hace referencia a la tabla de usuarios de mi base de datos
        id:{
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            auto_increment: true
        }, 
        name:{
            type: DataTypes.STRING
        } ,
        last_name:{
            type: DataTypes.STRING
        } ,
        name_user:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        date_of_birth:{
            type: DataTypes.DATE
        },
        home:{
            type: DataTypes.STRING
        },   
        password:{
            type: DataTypes.STRING
        },
        confirm_password:{
            type: DataTypes.STRING
        }
     }, // el modelo de mi tabla: aca pongo las columnas de DB con los mismo nombres, definiendo sus tipo de datos-
     {
        tableName: "user", // aca configuro como se llama mi tabla de productos en mi DB
        timestamps: false
     }
     )
    
    
     return User

}
