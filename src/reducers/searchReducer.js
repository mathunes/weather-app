const initialState = {
    loading: false,
    data: {},
    error: null
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_CITY_STARTED':
            return {
                loading: true
            };
        case 'SEARCH_CITY_SUCCESS':
            return {
                loading: false,
                data: action.weatherData,
                error: null
            };
        case 'SEARCH_CITY_FAILURE':
            return {
                loading: false,
                data: {},
                error: action.payload.error
            };
        default:
            return state;
    }
}