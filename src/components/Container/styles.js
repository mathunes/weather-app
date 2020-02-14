import styled from 'styled-components';

export const ContainerComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    padding: 100px 0;
    background-image: url(
        ${props => props.weather}
    );
`