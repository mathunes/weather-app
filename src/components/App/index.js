import React from 'react';
import SearchInput from '../SearchInput';
import WeatherNow from '../WeatherNow';
import WeatherFiveDays from '../WeatherFiveDays';
import '../../style/index.css';

function App() {
  return (
    <div className="App">
      <SearchInput />
      <WeatherNow />
      <WeatherFiveDays />
    </div>
  );
}

export default App;
