import styled from 'styled-components';

export const ContainerComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    padding: 100px 0;
    background: url( ${props => props.weather} ) no-repeat center center fixed; 
    background-size: cover;

    @media(max-width: 600px) {
        padding: 50px 0;
    }
`