const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8000

// requerir archivo de configuracions
require('./config/mongoose.config')

//milddleware (ayuda para hacer consulta de tipo post)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

cors
app.use(cors({
    origin:'http://localhost:3000'
}))

// importar las rutas de nuestro servido back end (sirv para facilitar al usuario elegir si desea eliminar o editar )
const Rutas = require('./routes/proyecto.routes')
Rutas(app)
app.listen(PORT, ()=>{
    console.log(`servidor corriendo${PORT}`)
})