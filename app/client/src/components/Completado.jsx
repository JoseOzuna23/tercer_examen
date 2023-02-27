import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Completado = () => {

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
        <div className='border border-2 col-4 '>
            <h1 className='border border-2 m-0 p-0 bg-primary'> Completado</h1>
            {
                lista.map((proyecto) => (
                    <div className='border border-2 m-3'>
                        <h2 className=''> {proyecto.proyecto}</h2>
                        <p> Fecha: {proyecto.fecha}</p>
                        <button className='btn btn-danger mb-2'> Eliminar</button>
                    </div>
                ))
            }


        </div>
    )
}

export default Completado
