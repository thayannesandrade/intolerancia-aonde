import styled, { css } from "styled-components";

export const Container = styled.nav`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    

    background: rgb(85,250,184);
    background: linear-gradient(90deg, rgba(85,250,184,0.75) 10%, rgba(173,49,24,0.5998774509803921) 60%);

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: .5s;
    

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(0.7);
        transition: .7s;
    }

    nav > a {
        color: #fff;
        font-weight: 600;
        font-size: 20px;
    }

    nav > a:hover{
        filter: brightness(0.9);
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        > svg {
            transform: rotate(0deg);
        }

        > nav {
            transform: scale(1.5);
        }
    `}

`