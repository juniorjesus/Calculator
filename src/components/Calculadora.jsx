import React, { useState } from 'react'
import { Contenedor, ContResult } from '../style/SryledAll';


const numero = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const operandos = ['/', '*', '-', '+']


const Calculadora = () => {

    const [operacion, setOperacion] = useState('')

    const ActEstado = (e) => {
        setOperacion(operacion.concat(e.target.name))
    }

    const limpiar = () => {
        setOperacion('')
    }
    const Calificando = () => {

        try {
            setOperacion(eval(operacion).toString())
        } catch (error) {
            setOperacion("error")
        }
    }

    return (
        <Contenedor className="container bg-dark">
            <div class="row">
                <ContResult type="text" className="bg-dark" value={operacion} />
                
                <hr className="bg-secondary p-1" />
                <div class="col-sm-9">
                    {
                        numero.map((valor, index) => {
                            return (
                                <button name={valor} onClick={ActEstado} className="btn btn-secondary btn-lg m-2">{valor}</button>
                            )
                        })
                    }
                    <button onClick={limpiar} className="btn btn-danger btn-lg m-1">AC</button>
                    <button onClick={Calificando} className="btn btn-primary btn-lg m-1">=</button>
                </div>
                <div class="col-sm-3">
                    {
                        operandos.map((operador, index) => {
                            return (
                                <button name={operador} onClick={ActEstado} className="btn btn-secondary btn-lg m-2">{operador}</button>
                            )
                        })
                    }
                </div>
            </div>
        </Contenedor >
    )
}

export { Calculadora }
