import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { Container, ContainerText } from "../../styles/containers";

import CONTACTIMG from "../../assets/contact-me.svg"
import { ContainerImage } from "./sobre.style";

function Sobre() {
    return (
        <>
        <Container>
            <Title title="Sobre"/>
            <ContainerText>
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!"/>
            </ContainerText>
            <ContainerImage>
                    <img src={CONTACTIMG} alt="svg com uma mulher negra, de cabelos curtos e pretos, de blusa branca, calça preta e bota preta, segurando com a mão direita uma caixa de diálogo e na mão esquerda um balão de confirmação." />
            </ContainerImage>
        </Container>
        </>
    )
}

export default Sobre