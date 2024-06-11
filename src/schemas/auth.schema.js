
// >>>>>>>>>>> esquema de validaciones con zod <<<<<<<<<<<<<<<<<<<<

import {z} from 'zod'

export const registerSchema = z.object ({
    username: z
    .string({  required_error:'nombre de usuario requerido'}),

    email: z
    .string({ required_error:'correo requerido'})
    .email({ message: 'invalido email'}),

    password: z
    .string({ required_error:'contraseña requerida'})
    .min(6,{ message: 'la contraseña no a superado el limite caracteres (6)'})

})

export const loginShema  = z.object ({

    email: z
    .string({required_error:'correo requerido'})
    .email({message:'correo invalido'}),
    password: z
    .string({required_error:'contraseña requerida'})
    .min(6,{message: 'contraseña no supera el limite de caracteres 6'})

})