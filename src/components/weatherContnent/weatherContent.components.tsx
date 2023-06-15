import { FC } from 'react';
import './weatherContent.components.scss';

export const WeatherContent: FC = () => {
  return (
    <div className="weatherContent__container">
      <img src="src/weatherIcons/sunny.svg" alt="" width={200} height={200} />
      <div className="weatherContent__temp">+29°</div>
      <div className="weatherContent__otherInfo">Other content</div>
    </div>
  );
};
