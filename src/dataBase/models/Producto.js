module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto",{ // "Producto": nombre de mi JS hace referencia a la tabla de productos de mi base de datos
        id:{
         type: DataTypes.INTEGER, 
            primaryKey: true, 
            auto_increment: true
        }, 
        product_name:{
            type: DataTypes.STRING
        } ,
        product_category:{
            type: DataTypes.STRING
        } ,
        product_img:{
            type: DataTypes.STRING
        } ,
        product_description:{
            type: DataTypes.STRING
        } 
     }, // el modelo de mi tabla: aca pongo las columnas de DB con los mismo nombres, definiendo sus tipo de datos-
     {
        tableName: "productos", // aca configuro como se llama mi tabla de productos en mi DB
        timestamps: false
     }
     )
    
    
     return Producto

}
