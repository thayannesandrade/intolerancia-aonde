import { SeeLocationButton } from "./home.style";

import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";

import { Container, ContainerText, ContainerImage } from "../../styles/containers";

import IMG1 from "../../assets/marcha-contra-intolerancia.jpg";
import INFOGRAFICO from "../../assets/panorama-das-religiões-no-brasil.png";

import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const navigateToListOfLocations = () => {
      navigate('/lista-de-locais');
    };

    return (
        <>
         <Container>
            <Title title="Home"/>
            <ContainerText>
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!" />
                <SeeLocationButton onClick={navigateToListOfLocations}>Consultar locais</SeeLocationButton>
            </ContainerText>

            <ContainerImage>
                <img src={IMG1} alt="Pessoas de religiões de matriz africana com cartaz na marcha a favor da liberdade religiosa em São Paulo que ocorreu no dia 08/08/2018 escrito: liberdade religiosa... um direito de todos." />
                <a href="https://ponte.org/sidnei-nogueira-so-vamos-combater-a-intolerancia-religiosa-com-dialogo-compreensao-e-a-negacao-de-uma-logica-capitalista/" target="_blank">
                    <figcaption>Marcha a favor da liberdade religiosa em São Paulo, 08/08/2018. Foto por: Sergio Silva - Ponte Jornalismo.</figcaption>
                </a>
            </ContainerImage>

            <ContainerText>
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!" />
            </ContainerText>

            <ContainerImage>
                <img src={INFOGRAFICO} alt="inforgráfico contendo a porcentagem de praticantes das religões: católica, evengélica, sem religião e umbanda ou candomblé." />
                <a href="https://censo2010.ibge.gov.br/noticias-censo?id=3&idnoticia=2170&view=noticia" target="_blank">
                    <figcaption>Fonte: IBGE 2010.</figcaption>
                </a>
            </ContainerImage>
         </Container>
        </>
    )
}

export default Home