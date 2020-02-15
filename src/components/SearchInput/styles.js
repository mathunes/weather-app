import styled from 'styled-components';

export const SearchInputContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    @media(max-width: 600px) {
        width: 100%;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    border-radius: 30px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    height: 50px;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.05);
    width: 400px;
    max-width: 400px;

    @media(max-width: 600px) {
        width: 90%;
    }

    button {
        background-color: transparent;
        border: 0;
        padding: 5px;

        img {
            width: 25px;
        }

        &:hover {
            cursor: pointer;
        }
    }

    input {
        height: 100%;
        background-color: transparent;
        border: 0;
        padding: 5px;
        font-size: 16px;
        width: 100%;
        text-align: left;
    }
`