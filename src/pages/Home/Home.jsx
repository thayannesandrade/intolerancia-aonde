import { SeeLocationButton } from "./home.style";

import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";

import { Container, ContainerText, ContainerImage } from "../../styles/containers";

import IMG1 from "../../assets/marcha-contra-intolerancia.jpg";
import INFOGRAFICO from "../../assets/panorama-das-religiões-no-brasil.png";
import DENUNCIAS from "../../assets/denuncias.png";

import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const navigateToListOfLocations = () => {
      navigate('/lista-de-locais');
    };

    return (
        <>
         <Container>
            <Title title="IntolerânciaAonde"/>
            <ContainerText>
                <Text text="Os casos de intolerância religiosa no Brasil tem aumentado de forma exponencial e, por conta disso se fez necessário, uma forma de tentar manter-se seguro. Com a colaboração da comunidade, aqui você encontra de forma simples os locais aonde aconteceram crimes de intolerância religiosa." />
                <SeeLocationButton onClick={navigateToListOfLocations}>Consultar locais</SeeLocationButton>
            </ContainerText>
        
            <div 
                style={{
                    margin: "100px auto"
                }}>
            </div>

            <ContainerText>
                <Text text="A falta de conhecimento sobre a diversidade cultural e religiosa presente no Brasil, que é fomentada desde a invasão colonizadora a fim de apagar a existência de determinados povos, traz como consequência a perseguição e demonização dos cultos." />
            </ContainerText>

            <ContainerImage>
                <img src={IMG1} alt="Pessoas de religiões de matriz africana com cartaz na marcha a favor da liberdade religiosa em São Paulo que ocorreu no dia 08/08/2018 escrito: liberdade religiosa... um direito de todos." />
                <a href="https://ponte.org/sidnei-nogueira-so-vamos-combater-a-intolerancia-religiosa-com-dialogo-compreensao-e-a-negacao-de-uma-logica-capitalista/" target="_blank">
                    <figcaption>Marcha a favor da liberdade religiosa em São Paulo, 08/08/2018. Foto por: Sergio Silva - Ponte Jornalismo.</figcaption>
                </a>
            </ContainerImage>

            <ContainerText>
                <Text text="Desde o Brasil Colônia, as religiões mais perseguidas são as tradições indígenas e as religiões afro-brasileiras. Os colonizadores europeus, numa tentativa de apagar a existência das tradições indígenas e também a prática religiosa trazida pelos escravizados reprimiram estas tradições trazendo a obrigatoriedade da prática da fé que eles professavam - o catolicismo." />
                <br />
                <Text text="No código penal de 1890, o espiritismo era considerado crime. Em 1988, o marco para a liberdade de crença se deu a partir da Constituição que dizia que o Brasil é um pais laico e que a liberdade de culto não pode ser violada.  Em 13 de Maio de 1997, foi criada a  Lei nº 9.459 que considera discriminação ou preconceito de raça, cor, etnia e religião crime sob pena de reclusão e pagamento de multa mas, ainda assim, nos dias atuais é expressivo o aumento no número de casos de intolerância religiosa no Brasil." />
                <br />
                <Text text="Os últimos dados do Instituto Brasileiro de Geografia e Estatística (IBGE) realizado no ano de 2010, onde foram entrevistadas cerca de 191 milhões de pessoas, das quais aproximadamente 589 mil se declaram de religões consideradas de matriz afro-brasileiras. Porém, podemos estimar que atualmente existe um número maior tendo em vista a defasagem de dados, visto que o último censo foi realizado há 12 anos." />
            </ContainerText>

            <ContainerImage>
                <img src={INFOGRAFICO} alt="inforgráfico contendo a porcentagem de praticantes das religões: católica, evengélica, sem religião e umbanda ou candomblé." />
                <a href="https://censo2010.ibge.gov.br/noticias-censo?id=3&idnoticia=2170&view=noticia" target="_blank">
                    <figcaption>Fonte: IBGE 2010.</figcaption>
                </a>
            </ContainerImage>


            <ContainerText>
                <Text text="Além das religiões destacadas no gráfico acima, o censo também identificou outras religiões que são praticadas no pais, sendo: tradições indigenas (com 0,033%), testemunhas de jeová (0,73%), judeus (0,56%), dentre outras." />
                <br />
                <Text text="No código penal de 1890, o espiritismo era considerado crime. Em 1988, o marco para a liberdade de crença se deu a partir da Constituição que dizia que o Brasil é um pais laico e que a liberdade de culto não pode ser violada.  Em 13 de Maio de 1997, foi criada a  Lei nº 9.459 que considera discriminação ou preconceito de raça, cor, etnia e religião crime sob pena de reclusão e pagamento de multa mas, ainda assim, nos dias atuais é expressivo o aumento no número de casos de intolerância religiosa no Brasil. Dados do balanço Disque 100 - Ministério da Mulher, Família e Direitos Humanos trás um panorama dos números de denúncia." />
            </ContainerText>

            <ContainerImage>
                <img src={DENUNCIAS} alt="inforgráfico contendo o valor absoluto de denúncias de casos de intolerância religiosa no Brasil." />
                <a href="https://www.brasildefato.com.br/2020/01/21/denuncias-de-intolerancia-religiosa-aumentaram-56-no-brasil-em-2019" target="_blank">
                    <figcaption>Fonte: Balanço Disque 100 - Ministério da Mulher, Família e Direitos Humanos</figcaption>
                </a>
            </ContainerImage>
         </Container>
        </>
    )
}

export default Home