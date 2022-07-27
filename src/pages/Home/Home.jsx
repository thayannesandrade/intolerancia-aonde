import Title from "../../components/Title/Title"
import Text from "../../components/Text/Text"
import { Container, ContainerText, ContainerImage } from "./home.style"
import IMG1 from "../../assets/marcha-contra-intolerancia.jpg"

function Home() {
    return (
        <>
         <Container>
            <Title title="Home"/>
            <ContainerText>
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!" />
                <button>Consultar Locais</button>
            </ContainerText>
            <ContainerImage>
                <img src={IMG1} alt="" />
            </ContainerImage>
            <ContainerText>
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!" />
            </ContainerText>
            
         </Container>
        </>
    )
}

export default Home