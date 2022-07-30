import styled from "styled-components";

export const FormContainer = styled.section`
    width: 670px;
    background-color: rgba(173, 49, 24, 0.6);
    padding: 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;

    .register__form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .register__input {
        height: 48px;
        width: 100%;
        padding: 8px 8px;
        margin-bottom: 36px;
        border: unset;
        outline: none;
        border-radius: 8px;
    }


    .register__input-border::after {
        content: '';
        display: block;
        height: 1px;
        width: 0;
        margin-bottom: 16px;
        background-color: #2589F5;
        transition: .3s ease-in-out;
    }

    .register__button {
        height: 48px;
        width: 100%;
        outline: none;
        background-color: #fff;
        margin-bottom: 32px;
        color: rgba(173, 49, 24, 0.6);
        font-size: 16px;
        font-weight: bold;
        border: unset;
        border-radius: 8px;
        cursor: pointer;
        transition: .5s ease-in-out;
    }

    .register__button:hover {
        filter: brightness(0.9);
    }

    textarea {
        letter-spacing: 1px;
        padding: 8px 8px;
        margin-bottom: 36px;
        line-height: 1.5;
        border-radius: 8px;
        border: unset;
        outline: none;
        box-shadow: 1px 1px 1px #999;
    }
`

