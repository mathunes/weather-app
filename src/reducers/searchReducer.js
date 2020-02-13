const initialState = {
    loading: false,
    data: {},
    error: null,
    found: false
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_CITY_STARTED':
            return {
                loading: true,
                found: true
            };
        case 'SEARCH_CITY_SUCCESS':
            return {
                loading: false,
                data: action.weatherData,
                error: null,
                found: true
            };
        case 'SEARCH_CITY_FAILURE':
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