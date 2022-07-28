import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background:  rgba(173, 49, 24, 0.6);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;

    .logo {
        max-width: 150px;
        max-height: 150px;
        border: 1px solid #ffff;
        border-radius: 100px;
    }

    .logo > img {
        width: 100%;
        height: 100%;

    }

    .navbar {
        font-size: 1.3em;
        font-weight: 600;
        display: flex;
        padding: 14px 16px;
        gap: 60px;
        justify-content: space-around;
    }

    .navbar > a {
        color: #ffff;
    }

    .mobile {
        display: none;
    }

    @media(max-width: 922px) {
      .mobile {
        display: initial;
        color: #ffff;
      }
      > .navbar {
        display: none;
      }
    }



`