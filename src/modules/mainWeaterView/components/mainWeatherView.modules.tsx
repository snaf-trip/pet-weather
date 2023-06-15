import { FC } from 'react';
import './mainWeatherView.modules.scss';

export const MainWeatherView: FC = () => {
  return (
    <div className="mainWeatherView__container">
      <div className="mainWeatherView__content">
        <div>Search</div>
        <div>ICON</div>
        <div>TEMP</div>
        <div>OTHER INFO</div>
      </div>
    </div>
  );
};
