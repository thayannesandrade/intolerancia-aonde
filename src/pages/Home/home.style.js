import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

export const ContainerText = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 12px 12px;

    button{
        width: 175px;
        height: 34px;
        background: rgba(173, 49, 24, 0.4);
        color: #000;
        border-radius: 5px;
        border: none;
        margin-top: 25px;
    }
`

export const ContainerImage = styled.figure`
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 12px 12px;

    img{
        max-width: 100%;
        max-height: 100%;
    }



`

