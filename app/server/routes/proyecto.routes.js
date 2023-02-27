const ControladorProyecto = require('../controllers/proyecto.controllers')

module.exports = (app) =>{
    
    app.post('/api/nuevo', ControladorProyecto.crearProyecto)  
    app.get('/api/todos', ControladorProyecto.obtenerProyecto)  
    app.delete('/api/borrarproyecto/:id', ControladorProyecto.eliminarProyecto)
    
    
}