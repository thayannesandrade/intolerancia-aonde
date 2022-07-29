import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: rgba(173,49,24,0.5);
    color: #fff;
    text-align: center;
    border-radius: 8px;
    padding: 12px 12px;

    width: 90vw;
    height: 280px;

    .card__header > h2 {
      font-family: 'Source Code Pro', monospace !important;
    }

    .card__body {
      display: flex !important;
      align-items: center !important;
    }
`

