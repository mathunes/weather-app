import styled from 'styled-components';

export const ContainerComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;    
    background: url( ${props => props.weather} ) no-repeat center center fixed; 
    background-size: cover;

`