// >>>>>>>>>>>>>>>>>>task añadir tareas autenticar <<<<<<<<<<<  
import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {getTask,
        createTask,
        getTasks,
        updateTask,
        deleteTask
    } from '../controllers/tasks.controller.js'
import {createTaskShema} from '../schemas/task.chema.js'
import {validateSchema} from '../middlewares/validator.middleware.js'

const router = Router()

    router.get('/tasks', authRequired, getTasks)
    router.post('/tasks', authRequired,validateSchema(createTaskShema), createTask)
    router.get('/tasks/:id', authRequired, getTask)
    router.put('/tasks/:id', authRequired, updateTask)
    router.delete('/tasks/:id', authRequired, deleteTask)
   




export default router   