import axios from "axios";
import { backgroundSetter } from "../modules/mainWeaterView/utils/backgroundSetter.modules";
import { ServerData, ServerResponse, WeatherServerResponseError } from "../types/weatherResponseType.types";

export const getWeatherRequest = (
  city: string,
  getData: (data: ServerData | string) => void,
) => {
  axios
    .get(`https://api.weatherapi.com/v1/current.json?key=41dab428dc624be0b63184944231406&q=${city}&aqi=no`)
    .then((response: ServerResponse) => {
      getData(response.data);
      backgroundSetter(response.data.location.tz_id);
    })
    .catch((error: WeatherServerResponseError) => {
      getData(error.response.data.error.message)
    });
};
