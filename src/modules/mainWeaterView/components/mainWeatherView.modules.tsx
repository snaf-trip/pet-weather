import { useEffect } from 'react';
import WeatherDataStore from '../../../stores/weatherDataStore.stores';
import './mainWeatherView.modules.scss';
import { SearchLocation } from '../../../components/searchLocation/searchLocation.components';
import { WeatherContent } from '../../../components/weatherContnent/weatherContent.components';
import { getWeatherRequest } from '../../../api/weatherRequest.api';
import { observer } from 'mobx-react-lite';
import { ipGetter } from '../../../api/ipUserRequest.api';
import { FooterSettings } from '../../footerSettings/comoponents/footerSettings.modules';
import TempUnitStore from '../../../stores/tempUnitStore.stores';
import { timeStyler } from '../../../utils/timeStyler.utils';

export const MainWeatherView = observer(() => {
  const { data, getData } = WeatherDataStore;
  const { initTempUnit } = TempUnitStore;

  useEffect(() => {
    if (!localStorage.getItem('userLocation')) {
      ipGetter(getData);
    } else {
      if (data === undefined)
        getWeatherRequest(localStorage.getItem('userLocation')!, getData);
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
    <div className="mainWeatherView__container" style={timeStyler()}>
      <div className="mainWeatherView__content">
        <SearchLocation />
        <WeatherContent data={data} />
        <FooterSettings />
      </div>
    </div>
  );
});