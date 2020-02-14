import styled from 'styled-components';

export const WeatherNowContainer = styled.div`
    border-radius: 50px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    width: 400px;
    max-width: 400px;
    /* height: 50px; */
    padding: 0 10px;
    margin: 0 auto;
`

export const HeaderWeather = styled.div`
    display: flex;
`

export const MainWeather = styled.div`
    display: flex;

    div:first-child {
        display: flex;
    }
`