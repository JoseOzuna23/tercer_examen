const Proyectos = require ('../models/proyecto.models')


const crearProyecto = (req, res)=>{
    Proyectos.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)        

    })
}

const obtenerProyecto = (req, res)=>{
    Proyectos.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        
    })

}

const eliminarProyecto = (req, res)=>{
    Proyectos.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


module.exports = {
    crearProyecto,
    obtenerProyecto,
    eliminarProyecto
}
