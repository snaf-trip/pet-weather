import { FC } from 'react';
import { useEffect, useState } from 'react';
import { ServerData } from '../../../weatherResponseType';
import WeatherDataStore from '../../../stores/weatherDataStore.stores';
import './mainWeatherView.modules.scss';
import { SearchLocation } from '../../../components/searchLocation/searchLocation.components';
import { WeatherContent } from '../../../components/weatherContnent/weatherContent.components';
import { getWeatherRequest } from '../../../api/weatherRequest.api';
import { observer } from 'mobx-react-lite';

export const MainWeatherView: FC = observer(() => {
  // const [weatherData, setWeatherData] = useState<ServerData | undefined>();

  const { data, getData } = WeatherDataStore;

  useEffect(() => {
    if (data === undefined) getWeatherRequest(getData);
  }, []);

  console.log(data);

  return (
    <div className="mainWeatherView__container">
      <div className="mainWeatherView__content">
        <SearchLocation />
        <WeatherContent data={data} />
      </div>
    </div>
  );
});
