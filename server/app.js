const express = require("express")
const { API_VERSION } = require("./constants")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

//Importar las rutas
const authRoutes = require("./routers/auth.router")
const userRouters = require("./routers/user.router")
const menuRouters = require("./routers/menu.router")

//Configurar Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Configurar carpeta Estaticos
app.use(express.static("uploads"))

//Configurar Headers HTTP - CORS
app.use(cors())


//Configuramos Rutas
app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`,userRouters)
app.use(`/api/${API_VERSION}`, menuRouters)

module.exports = app