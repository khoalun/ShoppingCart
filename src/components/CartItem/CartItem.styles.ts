import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    font-family: Arial;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    @media(min-width: 960px) {
        
        flex-direction: row;
    }
    div {
        flex: 1;
    }
    .information {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        @media(min-width: 960px) {
            display: flex;
            flex-direction: row;
        }
    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin: 0 auto;
        @media(min-width: 960px) {
            margin-left: 40px;
        }
    }
    

`