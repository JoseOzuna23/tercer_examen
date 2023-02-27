const mongoose = require ('mongoose')
const ProyectoSchema = mongoose.Schema({
    proyecto:{
        type:String,
        required: [true, 'Ingrese el nombre del proyeecto'],
        minLength:[3, 'Nombre de pelicula no puede ser menor a 3 caracteres'],
    },
    fecha:{
        type: Date, default: new Date('10-05-2022'),
        required: [true, 'Ingrese el nombre del proyeecto'],
    },
    
}, {timestamps:true})
const Proyectos = mongoose.model('Proyectos', ProyectoSchema)
module.exports = Proyectos