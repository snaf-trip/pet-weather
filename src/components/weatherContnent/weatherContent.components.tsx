import './weatherContent.components.scss';
import { ServerData } from '../../weatherResponseType';
import { Loader } from '../loader/loader.components';

interface Props {
  data: ServerData | undefined;
}

export const WeatherContent = ({ data }: Props) => {
  return (
    <div className="weatherContent__container">
      {data === undefined ? (
        <Loader />
      ) : (
        <>
          <img
            src={`src/weatherIcons/${data?.current.condition.text}.svg`}
            alt=""
            width={250}
            height={250}
            className="weatherContent__weatherIcon"
          />
          <div className="weatherContent__temp">{data?.current.temp_c}°</div>
          <div className="weatherContent__otherInfo">Other content</div>
        </>
      )}
    </div>
  );
};
