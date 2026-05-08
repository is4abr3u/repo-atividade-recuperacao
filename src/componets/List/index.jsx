import './style.css'

function List() {
    return (
        <>
            <h1> ÁREA DE SESSOES</h1>
            <h2>lista de bolos</h2>

            <ul>
                <li> bolo de milho</li>
                <li> bolo de chocolate</li>
                <li> bolo de cenoura</li>
            </ul>

            <h2>lista de bolos ordenada por preferencia</h2>

            <ol>
                <li> bolo de cenoura</li>
                <li> bolo de chocolate</li>
                <li> bolo de milho</li>
            </ol>
        </>
    )
}

export default List