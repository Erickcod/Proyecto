const jwt = require("jsonwebtoken")

function asureAuth(req,res,next){
    if (!req.headers.authorization) {
        res.status(403).send({msg: "La peticion no tiene la cabecera de autenticacion"})
    }

    const token = req.headers.authorization.replace("Bearer ", "")
    try {
        const payload = jwt.decode(token)
        const { ex } = payload
        const currentData = new Date().getTime()

        if (ex <= currentData) {
            return res.status(400).send({msg: "El token ha expirado"})
            
        }
        req.user= payload
        next()

    } catch (error) {
        return res.status(400).send({msg:"Token Invalidado"})
    }

}

module.exports = {
    asureAuth
}