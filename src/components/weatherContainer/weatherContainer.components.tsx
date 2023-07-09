import './weatherContainer.components.scss';
import { ServerData } from '../../types/weatherResponseType.types';
import { Loader } from '../../ui/loader/loader.components';
import { observer } from 'mobx-react-lite';
import { WeatherContent } from './components/weatherContent/weaterContent.componetns';

interface Props {
  data: ServerData | string | undefined;
}

export const WeatherContainer = observer(({ data }: Props) => {
  return (
    <div className="weatherContainer__container">
      {/* нужно пересмотреть это решение */}
      {data === undefined ? (
        <Loader />
      ) : (
        <>
          {typeof data === 'string' ? (
            <h1 className="weatherContainer__badResponse">{data}</h1>
          ) : (
            <WeatherContent data={data} />
          )}
        </>
      )}
    </div>
  );
});
