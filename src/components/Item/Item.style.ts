import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;

        @media(min-width: 960px) {
            max-height: 143px
        }

        @media(min-width: 1024px) {
            max-height: 204px
        }
        @media(min-width: 1350px) {
            max-height: 210px
        }
        @media(min-width: 1575px) {
            max-height: 250px
        }

    }

    div {
        font-family: Arial;
        padding: 1rem;
        height: 100%;
    }
`;

