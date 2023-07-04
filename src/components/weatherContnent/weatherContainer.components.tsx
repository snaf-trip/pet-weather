import './weatherContainer.components.scss';
import { ServerData } from '../../types/weatherResponseType.types';
import { Loader } from '../../ui/loader/loader.components';
import TempUnitStore from '../../stores/tempUnitStore.stores';
import { observer } from 'mobx-react-lite';

interface Props {
  data: ServerData | string | undefined;
}

export const WeatherContainer = observer(({ data }: Props) => {
  const { tempUnit } = TempUnitStore;

  return (
    <div className="weatherContainer__container">
      {data === undefined ? (
        <Loader />
      ) : (
        <>
          {typeof data === 'string' ? (
            <h1 className="weatherContainer__badResponse">{data}</h1>
          ) : (
            <>
              <img
                src={`src/weatherIcons/${data.current.condition.text}.svg`}
                alt=""
                width={250}
                height={250}
                className="weatherContainer__weatherIcon"
              />
              <div className="weatherContainer__mainData">
                <h1 className="weatherContainer__temp">
                  {tempUnit === 'C'
                    ? data?.current.temp_c
                    : data?.current.temp_f}
                  <span className="weatherContainer__degreeIcon">°</span>
                </h1>
                <span className="weatherContainer__description">
                  {data.current.condition.text}
                </span>
              </div>
              <div className="weatherContainer__details">
                <div className="weatherContainer__detail">
                  <img src="src/images/temperatureFeelsLike.svg" width="15" />
                  <div className="weatherContainer__detailText">
                    <span className="weatherContainer__detailValue">
                      {tempUnit === 'C'
                        ? data?.current.feelslike_c
                        : data?.current.feelslike_f}
                      °
                    </span>
                    <p className="weatherContainer__detailName">Fells like</p>
                  </div>
                </div>

                <div className="weatherContainer__detail">
                  <img src="src/images/wind.svg" width="34" />
                  <div className="weatherContainer__detailText">
                    <span className="weatherContainer__detailValue">
                      {data?.current.wind_kph}
                      <span className="weatherConten__speedUnit">km/h</span>
                    </span>
                    <p className="weatherContainer__detailName">Wind speed</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
});
