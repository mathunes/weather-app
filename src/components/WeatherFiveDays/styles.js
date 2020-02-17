import styled from 'styled-components';

export const ContainerWeatherFiveDays = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    height: 182px;
    margin: 20px auto;
    border-radius: 20px;
    padding: 20px 20px;
    background-color: rgba(0, 0, 0, 0.05);
    width: 400px;
    max-width: 400px;

    @media(max-width: 600px) {
        width: 90%;
    }
`

export const NavbarDays = styled.nav`

    display: flex;
    flex-direction: column;
    align-items: center;

    &:after {
        content: ' ';
        position: relative;
        width: 50%;
        height: 1px;
        margin: 20px auto;
        background-color: #c4c4c4;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            font-weight: 600;
            margin: 0 10px;

            &:hover {
                cursor: pointer;
            }

            @media(max-width: 600px) {
                margin: 0 7px;
                font-size: 14px;
            }
        }
    }   
`

export const ContainerForecast = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 7px;

        @media(max-width: 600px) {
            margin: 0 3px;
        }

        span {
            font-size: 13px;

            &:last-child {
                font-weight: 600;
            }

            @media(max-width: 600px) {
                font-size: 12px;
            }
        }

        img {
            width: 30px;

            @media(max-width: 600px) {
                width: 20px;
            }
        }
    }   
`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    img {
        width: 50px;
    }
`
