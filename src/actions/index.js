import api from "../services/api";

export function searchCity(cityInfo, lat = -15.7801, long = -47.9292, now = false) {
    let search = '';

    if (cityInfo) {
        if (now) {
            search = `weather?q=${cityInfo}`;
        } else {
            search = `forecast?q=${cityInfo}`;
        }
        
    } else {
        if (now) {
            search = `weather?lat=${lat}&lon=${long}`;
        } else {
            search = `forecast?lat=${lat}&lon=${long}`;
        }
        
    }

    return dispatch => {
        dispatch(searchCityStarted());

        api.get(search, {
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
    type: 'SEARCH_CITY_FAILURE',
    payload: {
        error
    }
})

