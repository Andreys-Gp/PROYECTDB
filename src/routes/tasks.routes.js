// >>>>>>>>>>>>>>>>>>task añadir tareas autenticar <<<<<<<<<<<  
import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {getTask,
        createTask,
        getTasks,
        updateTask,
        deleteTask
    } from '../controllers/tasks.controller.js'

const router = Router()

    router.get('/tasks', authRequired, getTasks)
    router.delete('/tasks/:id', authRequired, getTask)
    router.post('/tasks', authRequired , createTask)
    router.get('/tasks/:id', authRequired, deleteTask)
    router.put('/tasks/:id', authRequired, updateTask)




export default router   