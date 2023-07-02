import { useEffect, useState } from 'react';
import WeatherDataStore from '../../../stores/weatherDataStore.stores';
import './mainWeatherView.modules.scss';
import { SearchLocation } from '../../../components/searchLocation/searchLocation.components';
import { WeatherContent } from '../../../components/weatherContnent/weatherContent.components';
import { getWeatherRequest } from '../../../api/weatherRequest.api';
import { observer } from 'mobx-react-lite';
import { ipGetter } from '../../../api/ipUserRequest.api';
import { FooterSettings } from '../../footerSettings/comoponents/footerSettings.modules';
import TempUnitStore from '../../../stores/tempUnitStore.stores';
import BackgroundImgStore from '../../../stores/backgroundImgStore.stores';
import { UserLoactionStorage } from '../../../types/userLocationStorageType.types';

export const MainWeatherView = observer(() => {
  const { data, getData } = WeatherDataStore;
  const { initTempUnit } = TempUnitStore;
  const { imgUrl } = BackgroundImgStore;
  const [userLocation, setUserLocation] = useState<UserLoactionStorage | null>(
    JSON.parse(localStorage.getItem('userLocation')!)
  );

  useEffect(() => {
    if (userLocation === null) {
      //first get user location
      ipGetter(getData, setUserLocation);
    } else if (data === undefined) {
      //first get weather data
      getWeatherRequest(userLocation.city, getData);
    }

    //inintial TempUnit
    let unit = localStorage.getItem('tempUnit');
    if (unit === null) {
      localStorage.setItem('tempUnit', 'C');
      initTempUnit('C');
    } else {
      initTempUnit(unit);
    }
  }, []);

  return (
    <div
      className="mainWeatherView__container"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="mainWeatherView__content">
        <SearchLocation userLocation={userLocation} />
        <WeatherContent data={data} />
        <FooterSettings />
      </div>
    </div>
  );
});
