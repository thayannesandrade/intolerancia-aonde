import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";

import { ContainerCard } from "./listaDeLocais.style";
import { Container, ContainerText } from "../../styles/containers";
import { useEffect, useState } from "react";

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
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!" />
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