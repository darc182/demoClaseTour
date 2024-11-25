// Requerir módulos 
import express from 'express'

import cloudinary from 'cloudinary'
import fileupload from 'express-fileupload'
import dotenv from 'dotenv'

import routerTour from './routers/tour_routes.js'

import routerUser from './routers/user_routes.js'

//para usar el archivo env
//para acceder a las variables globales de .env: process.env.nombreVariable
dotenv.config()


// Inicializaciones
const app = express()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//para guardar la imagenes de forma temporal
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))


// Variables 
app.set('port', process.env.puertito || 3000)



// Middlewares
app.use(express.json())


// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

// Rutas - Tour
app.use('/api',routerTour)

// Rutas - Users
app.use('/api',routerUser)


// Exportar la variable app 
export default app



