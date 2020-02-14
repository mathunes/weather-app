import styled from 'styled-components';

export const ContainerWeatherFiveDays = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    width: 400px;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 20px;
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

        li {
            font-weight: 600;
            margin: 0 10px;

            &:hover {
                cursor: pointer;
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
        margin: 0 5px;

        span {
            font-size: 14px;
        }
    }
`