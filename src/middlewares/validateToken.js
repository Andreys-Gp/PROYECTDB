import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

// >>>>>>>>>>>>>>> son funciones que se ejecutan antes de ingresar a una rruta<<<<<<<<<<<<<<<<<<<<<

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if(!token)
     return res.status(401).json({ message: 'token no autorizado denegado'})
    jwt.verify(token, TOKEN_SECRET , (err, user) => { 
        if(err) return res.status(403).json({ message: ' token invalido '})
            req.user = user 

            next()
        })
    
}