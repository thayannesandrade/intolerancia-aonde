import { useState } from "react";
import Title from "../../components/Title/Title"
import Text from "../../components/Text/Text"

import { Container, ContainerText } from "../../styles/containers";
import { FormContainer } from "./cadastroDeLocais.style"



function CadastroDeLocais() {
    const [localidade, setLocalidade] = useState('');
    const [estado, setEstado] = useState('');
    const [ocorrido, setOcorrido] = useState('');
    const [mensagem, setMensagem] = useState('');
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        if (localidade !== '' && ocorrido !== '' && estado !== '') {
            try {
                const url = `http://localhost:3000/locais/`;
                let response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        localidade: localidade,
                        ocorrido: ocorrido,
                        estado: estado,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                let data = await response.json();
                setLocalidade('');
                setEstado('');
                setOcorrido('');
                setMensagem('Local inserido com sucesso!');
            } catch (err) {
                console.log(err);
            }
        } else {
            setMensagem('Preencha todos os campos!');
        }
    }

    return (
        <>
        <Container>
            <Title title="Cadastro de Locais"/>
            <ContainerText>
                <Text text="Lorem ipsum dolor sit amet. Qui possimus accusantium aut molestiae eius quo numquam provident qui voluptas similique. Ea repudiandae rerum aut voluptatem Quis aut obcaecati recusandae in itaque error. Ut earum nemo sit odio eligendi ab facilis dignissimos!" />
            </ContainerText>

            <FormContainer>
                <form 
                    className="register__form"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="register__input" 
                        name="localidade" 
                        id="localidade" 
                        type="text" 
                        placeholder="ex: Mesquita, baixada fluminense - Rio de Janeiro"
                        value={localidade}
                        onChange={(e) => setLocalidade(e.target.value)} 
                    />
                    <span className="register__input-border"></span>
            
                    <input
                        className="register__input" 
                        id="estado" 
                        name="estado" 
                        placeholder="ex: Rio de Janeiro"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)} 
                    />
                    
                    <span className="register__input-border"></span>

                    <textarea
                        rows="5" cols="33"
                        id="ocorrido" 
                        name="ocorrido" 
                        placeholder="Relate o que aconteceu"
                        value={ocorrido}
                        onChange={(e) => setOcorrido(e.target.value)} 
                    />
                    
                    <button
                        className="register__button" 
                        type="submit"
                    > 
                        Cadastrar 
                    </button>
                </form>
            </FormContainer>


            <div className="message">{mensagem ? <p>{mensagem}</p> : null}</div>
        </Container>
        </>
    )
}

export default CadastroDeLocais