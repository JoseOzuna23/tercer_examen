import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ProyectoCurso = () => {    

        const [lista, setLista] = useState([])
    
        useEffect(() => {
    
            axios.get('http://localhost:8000/api/todos')
                .then((res) => {
                    console.log(res)
                    setLista(res.data)
                }).catch((error) => {
                    console.log(error)
                })
    
    
        }, [])
    return (

        <div className='border border-2 col-3 '>
            <h1 className='border border-2 m-0 p-0 bg-success'> En Progreso</h1>
            {
                lista.map((proyecto) => (

                    <div className='border border-2 m-3'>
                        <h2 className=''> {proyecto.proyecto}</h2>
                        <p> Fecha: {proyecto.fecha}</p>
                        <button className='btn btn-warning mb-2'> Mover para completar</button>

                    </div>
                ))
            }


        </div>
    )
}

export default ProyectoCurso
