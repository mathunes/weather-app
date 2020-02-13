import api from "../services/api";

export function searchWeatherNow(cityInfo, lat, lon) {
    let search = '';

    if (cityInfo) {
        search = `weather?q=${cityInfo}`;
    } else {
        search = `weather?lat=${lat}&lon=${lon}`;
    }

    return dispatch => {
        dispatch(searchWeatherNowStarted());

        api.get(search, {
            params: {
                appid: 'f0907836e5052169cf34edbd7b01ceca'
            }
        })
        .then(response => {
            dispatch(searchWeatherNowSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchWeatherNowFailure(error.message));
        })
    }
}


export function searchWeatherFiveDays(cityInfo, lat, lon) {
    let search = '';

    if (cityInfo) {
        search = `forecast?q=${cityInfo}`;
    } else {
        search = `forecast?lat=${lat}&lon=${lon}`;
    }

    return dispatch => {
        dispatch(searchWeatherFiveDaysStarted());

        api.get(search, {
            params: {
                appid: 'f0907836e5052169cf34edbd7b01ceca'
            }
        })
        .then(response => {
            dispatch(searchWeatherFiveDaysSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchWeatherFiveDaysFailure(error.message));
        })
    }
}

const searchWeatherNowStarted = () => ({
    type: 'SEARCH_WEATHER_NOW_STARTED'
});

const searchWeatherNowSuccess = weatherData => ({
    type: 'SEARCH_WEATHER_NOW_SUCCESS',
    weatherData
});

const searchWeatherNowFailure = error => ({
    type: 'SEARCH_WEATHER_NOW_FAILURE',
    payload: {
        error
    }
})



const searchWeatherFiveDaysStarted = () => ({
    type: 'SEARCH_WEATHER_FIVE_DAYS_STARTED'
});

const searchWeatherFiveDaysSuccess = weatherData => ({
    type: 'SEARCH_WEATHER_FIVE_DAYS_SUCCESS',
    weatherData
});

const searchWeatherFiveDaysFailure = error => ({
    type: 'SEARCH_WEATHER_FIVE_DAYS_FAILURE',
    payload: {
        error
    }
})

