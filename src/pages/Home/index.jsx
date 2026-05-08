import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return (
        <>
        <h1>Bem vindo ao Home</h1>
        <Link to= '/Ex01'>
        <button> Vá para o exercicio 1</button>
        </Link>
        </>
    )
}

export default Home