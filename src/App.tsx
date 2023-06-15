import { useEffect, useState } from 'react';
import './App.scss';
import { ServerData } from './weatherResponseType';
import { getWeatherRequest } from './api/weatherRequest.api';
import { MainWeatherView } from './modules/mainWeaterView/components/mainWeatherView.modules';

function App() {
  const [weatherData, setWeatherData] = useState<ServerData | undefined>();

  useEffect(() => {
    if (weatherData === undefined) getWeatherRequest(setWeatherData);
  }, []);

  return (
    <>
      <MainWeatherView />
    </>
  );
}

export default App;
