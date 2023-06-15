import { FC } from 'react';
import './mainWeatherView.modules.scss';
import { SearchLocation } from '../../../components/searchLocation/searchLocation.components';

export const MainWeatherView: FC = () => {
  return (
    <div className="mainWeatherView__container">
      <div className="mainWeatherView__content">
        <SearchLocation />
        <div>ICON</div>
        <div>TEMP</div>
        <div>OTHER INFO</div>
      </div>
    </div>
  );
};
