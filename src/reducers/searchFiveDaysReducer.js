const initialState = {
    loading: false,
    data: {},
    error: null,
    found: false
}

export default function searchFiveDaysReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_WEATHER_FIVE_DAYS_STARTED':
            return {
                loading: true,
                found: true
            };
        case 'SEARCH_WEATHER_FIVE_DAYS_SUCCESS':
            return {
                loading: false,
                data: action.weatherData,
                error: null,
                found: true
            };
        case 'SEARCH_WEATHER_FIVE_DAYS_FAILURE':
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