module.exports=(sequelize, dataTypes) => {
    let alias ='Publicacion'
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      id_comentario: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      id_autor: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      id_perfil: {
        type: dataTypes.INTEGER,
        allowNull: false,
      }
    }
    let config ={
      tableName: 'publicaciones',
      timestamps: false
    }
    const Publicacion = sequelize.define(alias, cols, config)
  
    Publicacion.associate = function(modelos){
        Publicacion.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "id_autor"
        });
        Publicacion.belongsTo(modelos.Comentario, {
            as: "comentario",
            foreignKey: "id_comentario"
        });
    }

    return Publicacion;
  }