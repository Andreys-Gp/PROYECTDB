import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccesToken} from '../libs/jwt.js'
import { token } from 'morgan'
import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js';

// >>>>>>>>>>>>>>> registro usuarios >>>>>>>>>>>>>>>>>

export const register = async (req, res) => {
    const {email, password, username} = req.body

   try {

    const userFound =  await User.findOne({email})
    if(userFound) return res.status(400).json([' el email ya esta en uso'])

   const passwordHash =  await bcrypt.hash(password, 10)

    const newUser = new User({
        username,
        email,
        password: passwordHash
    })

   const userSaved = await newUser.save()
   const token = await createAccesToken({ id: userSaved._id })
    res.cookie('token', token)

     res.json({
        id: userSaved._id,
        username: userSaved.username,
        email:  userSaved.email,
        createAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt
    }) 

   } catch (error) {
    res.status(500).json({ message: error.message})
}

    
}


//>>>>>>>>>>>>>>>>>> login uauarios <<<<<<<<<<<<<<<

export const login = async (req, res) => {

    const {email, password } = req.body

    try {
    const userFound =  await User.findOne({ email })

    if(!userFound) return res.status(400).json({ message: 'usuario no encontrado'})
    
    const isMatch =  await bcrypt.compare(password, userFound.password)
    if(!isMatch) return res.status(400).json({ message: ' incorrecto contraseña '})
        
    const token = await createAccesToken({ id: userFound._id })
     res.cookie('token', token)
 
      res.json({
         id: userFound._id,
         username: userFound.username,
         email:  userFound.email,
         createAt: userFound.createdAt,
         updatedAt: userFound.updatedAt
     }) 
 
    } catch (error) {
     res.status(500).json({ message: error.message})
 }
 
     
}

//>>>>>>>>>>>>>>>>>>>>>>> logout <<<<<<<<<<<<<<<<<<<<<<<<<<

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}


//>>>>>>>>>>>>>>>>>>>>proteccion de rutas <<<<<<<<<<<<<<<<<<<<<<<

export const profile = async (req, res) => {
   const userFound = await User.findById(req.user.id)

   if (!userFound) return res.status(400).json({ message: 'usuario no encontrado'})

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email:  userFound.email,
        createAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
        })
    
}


// >>>>>>>>>>>>>> VERIFY DEL FROMT <<<<<<<<<<<<<<<<<<<<<<<<<<

export const verify = async (req , res) => {
  const {token} =  req.cookies
  if(!token) return res.status(401).json({ message: 'no autorizado' })

    jwt.verify(token, TOKEN_SECRET , async (err, user)=>{
        if(err) return res.status(401).json({ message: 'no autorizado'})

        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({ message: 'no autorizado'})

         return res.json({
            id: user
         })   
    })
    
}