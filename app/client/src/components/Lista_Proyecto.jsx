import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Completado from './Completado'
import ProyectoCurso from './ProyectoCurso'
import { useParams, useNavigate } from 'react-router-dom'


const Lista_Proyecto = () => {

    const [lista, setLista] = useState([])
    

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:8000/api/todos')
            .then((res) => {
                console.log(res)
                setLista(res.data)
            }).catch((error) => {
                console.log(error)
                
            })


    }, [])



    const borrarProducto = () => {
        axios.delete(`http://localhost:8000/api/borrarproyecto/${id}`)
            .then((res) => {
                console.log(res)               
                navigate('/')
            }).catch((error) => {
                console.log(error)
            })

    }
    return (

        <>
            <h1>  Gestion de Proyectos</h1>
            <div className='principal'>

                <div className='border border-2 col-3 '>
                    <h1 className='border border-2 m-0 p-0 bg-secondary'> Proyecto</h1>
                    {
                        lista.map((proyecto) => (

                            <div className='border border-2 m-3'>
                                <h2 className=''> {proyecto.proyecto}</h2>
                                <p> Fecha: {proyecto.fecha}</p>                                                                
                                <button className='btn btn-success mb-2' onClick={borrarProducto}> Iniciar Proyecto</button>

                            </div>
                        ))
                    }


                </div>

                <ProyectoCurso />
                <Completado />

            </div>

        </>
    )
}

export default Lista_Proyecto
