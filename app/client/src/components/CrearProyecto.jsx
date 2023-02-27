import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const CrearProyecto = () => {
    const [proyecto, setProyecto] = useState('')
    const [fecha, setFecha] = useState('')    

    const nagiate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/nuevo', {
            proyecto,
            fecha
        }).then((res) => {
            console.log(res);
        nagiate('/')

        }).catch((error) => {
            console.log(error)
            
        })
    }
    return (
        <div>
            <div className='col-6 mx-auto'>



                <h1> Crear Proyecto </h1>
                <div className='border border-4 p-2'>

                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor='' className='form-label mt-3'> Proyecto </label>
                            <input type="text" className='form-control' onChange={(e) => setProyecto(e.target.value)} />
                            
                        </div>
                        <div>
                            <label htmlFor='' className='form-label mt-3'> Fecha </label>
                            <input type="date" className='form-control' onChange={(e) => setFecha(e.target.value)} />

                        </div>
                        <button className='btn btn-danger mt-2 pl-5'> Crear Proyecto</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default CrearProyecto
