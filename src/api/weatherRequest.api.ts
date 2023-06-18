import { ServerData, ServerResponse, WeatherServerResponseError } from "../types/weatherResponseType.types";
import axios from "axios";

export const getWeatherRequest = (
  city: string,
  getData: (data: ServerData | string) => void
) => {
  axios
    .get(`https://api.weatherapi.com/v1/current.json?key=41dab428dc624be0b63184944231406&q=${city}&aqi=no`)
    .then((response: ServerResponse) => {
      getData(response.data);
    })
    .catch((error: WeatherServerResponseError) => {
      getData(error.response.data.error.message)
    });
};
