import styled from "styled-components"

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    @media(min-width: 923px) {
      margin: 0 auto;
      padding: 30px 0; 
    }
`

export const ContainerText = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 12px 12px;

    @media(min-width: 923px) {
      margin: 20px auto;
      max-width: 1120px; 
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
        border-radius: 10px;
    }

    figcaption {
        text-align: center;
        
    }

    @media (min-width: 923px) {
        max-width: 1120px;
    }
`