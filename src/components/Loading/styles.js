import styled from 'styled-components';

export const ContainerLoading = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;

    img {
        animation-name: flutter;
        animation-duration: .5s;
        animation-iteration-count: infinite;

        @media (max-width: 600px) {
            width: 60px;
        }

        @keyframes flutter {
            0% {margin-top: 0px}
            50% {margin-top: 50px}
            100% {margin-top: 0px}
        }
    }

`