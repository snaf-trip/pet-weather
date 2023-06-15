import { FC } from 'react';
import './mainWeatherView.modules.scss';
import { SearchLocation } from '../../../components/searchLocation/searchLocation.components';
import { WeatherContent } from '../../../components/weatherContnent/weatherContent.components';

export const MainWeatherView: FC = () => {
  return (
    <div className="mainWeatherView__container">
      <div className="mainWeatherView__content">
        <SearchLocation />
        <WeatherContent />
      </div>
    </div>
  );
};
