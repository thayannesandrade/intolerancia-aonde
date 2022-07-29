import { useState } from "react";
import Title from "../../components/Title/Title"
import Text from "../../components/Text/Text"
import { Container, ContainerText } from "../../styles/containers";



function CadastroDeLocais() {
    const [localidade, setLocalidade] = useState('');
    const [ocorrido, setOcorrido] = useState('');
    const [estado, setEstado] = useState('');
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
                setEstado('');
                setLocalidade('');
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

            <form onSubmit={handleSubmit}>
                <label htmlFor="localidade">Localidade</label>
                <input 
                    name="localidade" 
                    id="localidade" 
                    type="text" 
                    placeholder="ex: Mesquita, baixada fluminense - Rio de Janeiro"
                    value={localidade}
                    onChange={(e) => setLocalidade(e.target.value)} 
                />
                <br /><br />
                <label htmlFor="ocorrido">Descreva o que aconteceu</label>
                <textarea 
                    id="ocorrido" 
                    name="ocorrido" 
                    placeholder="Relate o que aconteceu"
                    value={ocorrido}
                    onChange={(e) => setOcorrido(e.target.value)} 
                />
                <br /><br />
                <label htmlFor="estado">Qual estado?</label>
                <input 
                    id="estado" 
                    name="ocorrido" 
                    placeholder="ex: Rio de Janeiro"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)} 
                />
                <button type="submit"> Enviar </button>
            </form>
            <div className="message">{mensagem ? <p>{mensagem}</p> : null}</div>
        </Container>
        </>
    )
}

export default CadastroDeLocais