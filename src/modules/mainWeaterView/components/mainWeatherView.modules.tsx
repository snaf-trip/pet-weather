import { FC } from 'react';
import { useEffect } from 'react';
import WeatherDataStore from '../../../stores/weatherDataStore.stores';
import './mainWeatherView.modules.scss';
import { SearchLocation } from '../../../components/searchLocation/searchLocation.components';
import { WeatherContent } from '../../../components/weatherContnent/weatherContent.components';
import { getWeatherRequest } from '../../../api/weatherRequest.api';
import { observer } from 'mobx-react-lite';
import { ipGetter } from '../../../api/userLocationRequest.api';

export const MainWeatherView: FC = observer(() => {
  const { data, getData } = WeatherDataStore;

  useEffect(() => {
    if (!localStorage.getItem('userLocation')) {
      ipGetter(getData);
    } else {
      if (data === undefined)
        getWeatherRequest(localStorage.getItem('userLocation')!, getData);
    }
  }, []);

  return (
    <div className="mainWeatherView__container">
      <div className="mainWeatherView__content">
        <SearchLocation />
        <WeatherContent data={data} />
      </div>
    </div>
  );
});
