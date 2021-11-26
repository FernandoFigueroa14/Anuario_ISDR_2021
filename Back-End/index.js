//Importando la biblioteca express
const express = require('express');
const path = require('path');
const cors=require('cors')
const cookies = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const { Sequelize } = require('sequelize'); //Conexión base de datos
const userConfigDB = require('./database/config/config');
const db = require('./database/models');

const indexRouter = require('./routes/indexRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const comentariosRouter = require('./routes/comentariosRouter');
const userLoggedMiddleware = require('./public/js/userLoggedMiddleware')

const app = express();

const PORT = process.env.PORT | 8080;

//Configuración de cors para recibir peticiones desde otros origenes
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}
app.use(cors(corsOptions))

//Establecer un middleware que configure donde se encuentran los recursos públicos
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookies());
app.use(session( {secret: "Acceso seguro Coralio", resave: false, saveUninitialized: false} ));
app.use(userLoggedMiddleware);

app.use(indexRouter);
app.use(usuarioRouter);
app.use(comentariosRouter);

db.sequelize.sync()
            .then(
                app.listen(PORT, () => {
                    console.log(`Server running on Port: ${PORT} :D`);
                }))
            .catch(err=>console.log(err))

const checkConectionDB = async () => {
    const userConfigDB_Development = userConfigDB.development
    const sequelize = new Sequelize(userConfigDB_Development.database, userConfigDB_Development.username, userConfigDB_Development.password, {
      host: userConfigDB_Development.host,
      port: userConfigDB_Development.port,
      dialect: userConfigDB_Development.dialect
    })
    try {
      await sequelize.authenticate()
      console.log('Connection to MySQL DataBase has been established successfully');
    } catch (error) {
      console.error('Unable to connect to the database: ', error)
    }
  };
  
  checkConectionDB();