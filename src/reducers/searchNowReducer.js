const initialState = {
    loading: false,
    data: {},
    error: null,
    found: false,
    bgWeather: 'sunny'
}

export default function searchNowReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_WEATHER_NOW_STARTED':
            return {
                loading: true,
                found: true
            };
        case 'SEARCH_WEATHER_NOW_SUCCESS':
            return {
                loading: false,
                data: action.weatherData,
                error: null,
                found: true,
                bgWeather: action.weatherData.weather.map((item => {
                    if (['Smoke', 'Dust', 'Ash'].includes(item.main)) {
                        return 'dust';
                    } else if (['Snow', 'Mist', 'Haze', 'Fog'].includes(item.main)) {
                        return 'cold';
                    } else if (['Thunderstorm', 'Drizzle', 'Rain', 'Tornado', 'Squall'].includes(item.main)) {
                        return 'dark';
                    } else {
                        return 'sunny';
                    }
                }))
            };
        case 'SEARCH_WEATHER_NOW_FAILURE':
            return {
                loading: false,
                data: {},
                error: action.payload.error,
                found: false
            };
        default:
            return state;
    }
}