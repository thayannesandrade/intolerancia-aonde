import styled from "styled-components";

const Container = styled.footer`
    background:  rgba(173, 49, 24, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    color: #fff;
    font-size: 15px;
    width: 100%;
    flex-shrink: 0;

    a {
        color: #fff;
        text-decoration: none;
    }

    @media (min-width: 923px) {
        font-size: 24px;
    }
` 
export default Container