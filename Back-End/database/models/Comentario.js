module.exports=(sequelize, dataTypes) => {
    let alias ='Comentario'
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      contenido: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      path_foto: {
        type: dataTypes.STRING,
      },
      fecha: {
        type: dataTypes.DATEONLY,
        allowNull: false,
      }
    }
    let config ={
      tableName: 'comentarios',
      timestamps: false
    }
    const Comentario = sequelize.define(alias, cols, config)
  
    Comentario.associate = function(modelos){
        Comentario.hasMany(modelos.Publicacion, {
                as: "publicacion",
                foreignKey: "id_comentario"
            });
    }

    return Comentario;
  }