import { ContainerCard } from "./card.style"

function Card ({ local }) {
    return(
        <>
            <ContainerCard>
                <header className="card__header">
                    <h2> {local.localidade} </h2>
                </header>
                <div className="card__body">
                    <p> {local.ocorrido} </p>
                </div>
                <footer className="card__footer">
                    <p> {local.estado} </p>
                </footer>
            </ContainerCard>
        </>
    )
}

export default Card