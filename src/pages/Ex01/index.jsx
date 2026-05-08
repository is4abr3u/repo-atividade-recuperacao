import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Ex01() {

    const [valor, setValor] = useState("")
    const [resultado, setResultado] = useState()
    function conta(event) {
        event.preventDefault()
        console.log()
        setResultado(Number(valor)*0.2)
    }

    return (
        <>
            <h1>Bem vindo ao Exercicio 1</h1>
            <Link to='/Ex02'>
                <button> Vá para o exercicio 2</button>
            </Link>

            <form onSubmit={conta}>
                <label> Digite o valor do depósito:</label>
                <input type="number"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
            <p>{resultado}</p>
        </>
    )
}

export default Ex01