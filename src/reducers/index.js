import { combineReducers } from 'redux';

import searchFiveDaysReducer from './searchFiveDaysReducer';
import searchNowReducer from './searchNowReducer';

export default combineReducers({
    fiveDaysWeather: searchFiveDaysReducer,
    nowWeather: searchNowReducer,
});