// Importamos la variables de entorno
const mongoose = require('mongoose')
const app = require('./app')
const { DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, IP_SERVER } = require('./constants')

const PORT = process.env.PORT || 3000

//Seteamos stricquery a falso
mongoose.set('strictQuery', false)

//Conectar a Mongo
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
    (error) => {
        if (error) throw error

        app.listen(PORT, () => {
            console.log("#######################");
            console.log("#### MERN API REST ####");
            console.log("######## V1 API #######");
            console.log("#######################");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
        })
    }
)