import styled from "styled-components";


export const SeeLocationButton = styled.button`
    width: 175px;
    height: 34px;
    background: rgba(173,49,24,0.6);
    color: #000;
    border-radius: 8px;
    border: none;
    margin-top: 25px;
    color: #fff;
    font-weight: bold;

    &:hover{
      filter: brightness(0.9);  
    }
    

    @media (min-width: 923px) {
        width: 300px;
        height: 72px;
        font-size: 20px;
    }
`

