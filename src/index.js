
import app from './app.js'
import {connectDB} from './db.js'


connectDB()
app.listen(6000)

console.log(' servidor iniciado en el puerto ' , 6000)