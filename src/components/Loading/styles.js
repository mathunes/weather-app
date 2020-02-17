import styled from 'styled-components';

export const ContainerLoading = styled.div`
    width: 100%;
    height: 100%;
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

        @keyframes flutter {
            0% {margin-top: 0px}
            50% {margin-top: 50px}
            100% {margin-top: 0px}
        }
    }

`