module.exports=(sequelize, dataTypes) => {
    let alias ='Usuario'
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nombres: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      apellidos: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      contraseña: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      apodo: {
        type: dataTypes.STRING
      },
      path_foto: {
        type: dataTypes.STRING
      }
    }
    let config ={
      tableName: 'usuarios',
      timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config)
  
    Usuario.associate = function(modelos){
        Usuario.hasMany(modelos.Publicacion, {
                as: "publicacion",
                foreignKey: "id_autor"
            });
    }

    return Usuario;
  }