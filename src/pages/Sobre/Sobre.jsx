import { useState } from "react";

import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { Container, ContainerText } from "../../styles/containers";

import CONTACTIMG from "../../assets/contact-me.svg"
import { ContainerImage, FormContainer } from "./sobre.style";

function Sobre() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [status, setStatus] = useState('');
    
    let handleSendEmail = async (e) => {
        e.preventDefault();
        if (nome !== '' && email !== '' && mensagem !== '') {
            try{
                setNome('');
                setEmail('');
                setMensagem('');
                setStatus('Seu e-mail foi enviado, obrigada!');
            } catch (err) {
                console.log(err);
            }
        } else {
            setStatus('Por favor, preencha todos os campos!');
        }
    }

    return (
        <>
        <Container>
            <Title title="Sobre"/>
            <ContainerText>
                <Text text="Aluna da {reprograma} do curso de front-end, 25 anos, do Rio de Janeiro. Sou uma tecnologista entusiasmada, dando os primeiros passos na jornada de desenvolvimento de software."/>
                <br />
                <Text text="Este projeto surgiu com o objetivo de ajudar a comunidade pertencente a religiões marginalizadas e incentivar a denúncia de casos de intolerância religosa. Se você tem interesse em colaborar com o projeto, entre em contato através do formulário abaixo, vai ser um prazer. Obrigada :)"></Text>
            </ContainerText>
            <ContainerImage>
                    <img src={CONTACTIMG} alt="svg com uma mulher negra, de cabelos curtos e pretos, de blusa branca, calça preta e bota preta, segurando com a mão direita uma caixa de diálogo e na mão esquerda um balão de confirmação." />
            </ContainerImage>

            <FormContainer>
                <form 
                    className="contact__form"
                >
                    <input
                        className="contact__input" 
                        name="nome" 
                        id="nome" 
                        type="text" 
                        placeholder="ex: Júlio César Brito"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                    <span className="register__input-border"></span>
            
                    <input
                        className="contact__input" 
                        name="email" 
                        id="email"
                        type="email" 
                        placeholder="ex: email@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    
                    <span className="register__input-border"></span>

                    <textarea
                        rows="5" cols="33"
                        id="mensagem" 
                        name="mensagem" 
                        placeholder="Digite sua mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)} 
                    />
                    
                    <a
                        className="contact__button" 
                        href="mailto:thayannesandrade@gmail.com"
                        onClick={handleSendEmail}
                    > 
                        Enviar 
                    </a>
                </form>
            </FormContainer>
            <div className="status">
                {status ? 
                    <p>{status}</p> : null}
            </div>
        </Container>
        </>
    )
}

export default Sobre