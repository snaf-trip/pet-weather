import { useEffect, useState } from 'react';
import './App.scss';
import { ServerData } from './weatherResponseType';
import { getWeatherRequest } from './api/weatherRequest.api';

function App() {
  const [weatherData, setWeatherData] = useState<ServerData | undefined>();

  useEffect(() => {
    if (weatherData === undefined) getWeatherRequest(setWeatherData);
  }, []);

  return (
    <>
      <div>APP</div>
      <h1>{weatherData?.location.name}</h1>
      <h2>{weatherData?.current.temp_c}C</h2>
    </>
  );
}

export default App;
