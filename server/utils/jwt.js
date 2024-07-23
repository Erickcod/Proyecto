const jwt = require("jsonwebtoken")
const {JWT_SCRET_KEY} =require ("../constants")
const { model } = require("mongoose")

function createAccessToken(user){
    const expirationToken = new Date()
    expirationToken.setHours(expirationToken.getHours()+3)

    const payload ={
        token_type: "access",
        user_id: user._id,
        iat: Date.now(),
        ex: expirationToken.getTime()

    }

    return jwt.sign(payload, JWT_SCRET_KEY)
}


function createrefreshAccessToken(user){
    const expirationToken = new Date()
    expirationToken.setMonth(expirationToken.getMonth()+1)

    const payload ={
        token_type: "refresh",
        user_id: user._id,
        iat: Date.now(),
        ex: expirationToken.getTime()

    }

    return jwt.sign(payload, JWT_SCRET_KEY)
}


function decoded(token){

    return jwt.decode(token, JWT_SCRET_KEY,true)
}


module.exports ={
    createAccessToken,
    createrefreshAccessToken,
    decoded
}