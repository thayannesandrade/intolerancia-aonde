import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";

import { ContainerCard } from "./listaDeLocais.style";
import { Container, ContainerText } from "../../styles/containers";

import { useEffect, useState } from "react";

// let locais = [
//     {
//         "id": 1,
//         "localidade": "Bairro Vila da Penha, zona zorte do Rio de Janeiro",
//         "ocorrido": "Uma menina de 11 anos foi agredida por um grupo de religiosos no bairro da Vila da Penha, localizado na zona norte do estado do Rio de Janeiro",
//         "estado": "Rio de Janeiro"
//       },
//       {
//         "id": 2,
//         "localidade": "Terreiro Logun Edé - Juca Rosa, Eunápolis - Bahia",
//         "ocorrido": "Grupo de evangélicos após realizar uma pregação em frente ao terreiro, depredou o assentamento dedicado ao orixá Exu",
//         "estado": "Bahia"
//       },
//       {
//         "localidade": "Parada de Lucas, zona norte do Rio de Janeiro",
//         "ocorrido": "Traficantes da região passaram de moto pelos locais do bairro avisando que a partir daquele momento, era proibido qualquer tipo de ritauis de macumba.",
//         "estado": "Rio de Janeiro",
//         "id": 3
//       }
// ]

function ListaDeLocais() {
    const [local, setLocal] = useState([]);
    const url = `http://localhost:3000/locais`;

    useEffect(() => {
        async function loadLocal() {
            const response = await fetch(url);
            const data = await response.json();

            setLocal(data);
        }

        loadLocal();
    }, [])

    return (
        <>
        <Container>
            <Title title="Lista de Locais"/>
            <ContainerText>
                <Text text="Confira aqui nesta página os locais que ocorreram casos de intolerância religiosa listados pela comunidade:" />
            </ContainerText>

            <ContainerCard>
                {local.map(
                    (local, index) => <Card key={index} local={local} /> 
                )}
            </ContainerCard>
        </Container>    
        </>
    )
}

export default ListaDeLocais