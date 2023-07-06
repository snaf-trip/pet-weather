import './weaterContent.componetns.scss';
import TempUnitStore from '../../../../stores/tempUnitStore.stores';
import { ServerData } from '../../../../types/weatherResponseType.types';

interface Props {
  data: ServerData;
}

export const WeatherContent = ({ data }: Props) => {
  const { tempUnit } = TempUnitStore;

  return (
    <>
      <img
        src={`src/weatherIcons/${data.current.condition.text}.svg`}
        alt=""
        width={250}
        height={250}
        className="weatherContent__weatherIcon"
      />
      <div className="weatherContent__mainData">
        <h1 className="weatherContent__temp">
          {tempUnit === 'C' ? data.current.temp_c : data.current.temp_f}
          <span className="weatherContent__degreeIcon">°</span>
        </h1>
        <span className="weatherContent__description">
          {data.current.condition.text}
        </span>
      </div>
      <div className="weatherContent__details">
        <div className="weatherContent__detail">
          <img src="src/images/temperatureFeelsLike.svg" width="15" />
          <div className="weatherContent__detailText">
            <span className="weatherContent__detailValue">
              {tempUnit === 'C'
                ? data.current.feelslike_c
                : data.current.feelslike_f}
              °
            </span>
            <p className="weatherContent__detailName">Fells like</p>
          </div>
        </div>

        <div className="weatherContent__detail">
          <img src="src/images/wind.svg" width="34" />
          <div className="weatherContent__detailText">
            <span className="weatherContent__detailValue">
              {data?.current.wind_kph}
              <span className="weatherConten__speedUnit">km/h</span>
            </span>
            <p className="weatherContent__detailName">Wind speed</p>
          </div>
        </div>
      </div>
    </>
  );
};
