

import {z} from 'zod'

export const createTaskShema = z.object({

    title: z
    .string({ required_error:'titulo requerido' }),
    description: z
    .string({required_error: 'descipcion en string'}),
    date: z
    .string()
    .date()
    .optional()

})