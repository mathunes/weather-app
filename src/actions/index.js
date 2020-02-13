import api from "../services/api";

export function searchCity(cityInfo) {
    return dispatch => {
        dispatch(searchCityStarted());

        api.get(`weather?q=${cityInfo}`, {
            params: {
                appid: 'f0907836e5052169cf34edbd7b01ceca'
            }
        })
        .then(response => {
            dispatch(searchCitySuccess(response.data));
        })
        .catch(error => {
            dispatch(searchCityFailure(error.message));
        })
    }
}

const searchCityStarted = () => ({
    type: 'SEARCH_CITY_STARTED'
});

const searchCitySuccess = weatherData => ({
    type: 'SEARCH_CITY_SUCCESS',
    weatherData
});

const searchCityFailure = error => ({
    type: 'SEACH_CITY_FAILURE',
    payload: {
        error
    }
})

