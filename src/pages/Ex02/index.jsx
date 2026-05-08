import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Ex02() {
     const [valor, setValor] = useState("")
     const [valor1, setValor1] = useState("")
    const [resultado, setResultado] = useState()
    function conta(event) {
        event.preventDefault()
        console.log()
        setResultado(Number(valor)+Number(valor1))
    }

    return (
        <>
            <h1>Bem vindo ao Exercicio 2 </h1>
            <Link to='/'>
                <button> Volte para o Home</button>
            </Link>

            <form onSubmit={conta}>
                <label> Digite o valor 0:</label>
                <input type="number"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                />

                <label> Digite o valor 1:</label>
                <input type="number"
                    value={valor1}
                    onChange={(event) => setValor1(event.target.value)}
                />

                <button type='submit'>Enviar</button>
            </form>
            <p>{resultado}</p>
        </>
    )
}

export default Ex02