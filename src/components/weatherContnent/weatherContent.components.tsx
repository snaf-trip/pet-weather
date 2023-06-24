import './weatherContent.components.scss';
import { ServerData } from '../../types/weatherResponseType.types';
import { Loader } from '../../ui/loader/loader.components';
import TempUnitStore from '../../stores/tempUnitStore.stores';
import { observer } from 'mobx-react-lite';

interface Props {
  data: ServerData | string | undefined;
}

export const WeatherContent = observer(({ data }: Props) => {
  const { tempUnit } = TempUnitStore;

  return (
    <div className="weatherContent__container">
      {data === undefined ? (
        <Loader />
      ) : (
        <>
          {typeof data === 'string' ? (
            <h1>{data}</h1>
          ) : (
            <>
              <img
                src={`src/weatherIcons/${data.current.condition.text}.svg`}
                alt=""
                width={250}
                height={250}
                className="weatherContent__weatherIcon"
              />
              <div className="weatherContent__temp">
                {tempUnit === 'C' ? data?.current.temp_c : data?.current.temp_f}
                °
              </div>
              <div className="weatherContent__otherInfo">
                Other content soon...
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
});